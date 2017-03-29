// @flow
import { Board, Led } from 'johnny-five';
import express from 'express';
import { Server } from 'http';
import socketIO from 'socket.io';

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
http.listen(8000, () => {
  console.log('Server running on *:8000');
});

// Set up new Johnny-Five board and set `lampOn` to false
const board = new Board();
let lampOn = false;

/**
 *
 * Set up Robot and add functionality when it's ready.
 *
 *
 */
board.on('ready', function() {
  // Let the server console know that the robot is ready
  console.log('[johnny-five] Robot Online');

  // store RGB LED under `lamp` constant
  const lamp = new Led.RGB([11, 10, 9]);

  /**
   *
   *
   *
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
       * Turn the lamp on if it's true.
       * Turn it off if it's false.
       *
       */
      client.on('lamp', (lampVal) => {
        lampOn = lampVal;
        if(lampOn) {
          lamp.on();
          lamp.color('#22eeaa');
        } else {
          lamp.stop().off();
        }
      });

    }

  });

});
