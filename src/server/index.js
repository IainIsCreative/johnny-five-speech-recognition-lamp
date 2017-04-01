// @flow
import { Board, Led } from 'johnny-five';
import temporal from 'temporal';
import express from 'express';
import { Server } from 'http';
import socketIO from 'socket.io';

// Import configurations for web server
import { webPort } from '../shared/config';

// Import HTML function
import renderApp from './render-app';

// Set up Express, the Server, and socket.io
const app = express();
const http = Server(app);
const io = socketIO.listen(http);

// Set up socket and connected variables
let connected = false;
let socket;

// Place `dist` directory under `/static` alias
app.use('/static', express.static('dist'));

// When visiting the root, send the HTML function and render
app.get('/', (req, res) => {
  res.send(renderApp());
});

// Run Server under specific port
http.listen(webPort, () => {
  console.log(`Server running on *:${webPort}`);
});

// Set up new Johnny-Five board and set `lampOn` to false
const board = new Board({
  // Set REPL to false — not needed and running `rs` makes it angry
  repl: false,
});
let lampOn = false;

/**
 *
 * Set up Robot and add functionality when it's ready.
 *
 */
board.on('ready', function() {
  // Let the server console know that the robot is ready
  console.log('[johnny-five] Robot Online');

  // store RGB LED under `lamp` constant
  const lamp = new Led.RGB([11, 10, 9]);

  /**
   *
   * Run the Sockets
   *
   * When the client is connected, log it into the console.
   * If the client has connected, then the lamp can execute functions based on
   * instructions from the client side.
   *
   */
  io.on('connect', (client) => {
    // Now that we've connected, set the variable to true
    connected = true;

    client.on('join', (handshake) => {
      console.log(`[socket.io] ${handshake}`);
    });

    // If we're connected, watch out for changes from the client
    if (connected) {

      /**
       *
       * When a client has sent a change to the lamp's state, receive the `lamp`
       * event's value and check if it's changed.
       * Then we can update the `lampOn` variable and if it's changed, it will
       * determine the state of the lamp.
       *
       * Turn the lamp on if it's true and run the loop.
       * Turn it off if it's false, by stopping the loop.
       *
       */
      client.on('lamp', (lampVal) => {

        let i = 0;
        const colors = [
          '#e148c6',
          '#961ef3',
          '#710ff7',
          '#694bff',
          '#5772fa',
          '#5c98fc',
          '#5cb6fc',
          '#5cd4fc',
          '#5cfcef',
          '#4befb7',
          '#48d16f',
          '#41b426',
          '#59d13d',
          '#97ec59',
          '#c5fb6f',
          '#fbdf6f',
          '#f5a56b',
          '#f5746b',
          '#da4d5a',
          '#d6395a',
          '#eb4c71',
          '#f4519a',
        ];

        lampOn = lampVal;
        board.loop(300, (stopLoop) => {
          if(lampOn) {
            lamp.color(colors[i++]);
            if (i === colors.length) {
              i = 0;
            }
          } else {
            stopLoop();
          }
        });

        if(!lampOn) {
          lamp.stop().off();
        }

      });

    }

  });

});
