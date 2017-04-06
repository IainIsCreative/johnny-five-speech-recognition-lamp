// @flow

/* eslint-disable no-console */
import 'babel-polyfill';
import socketIOClient from 'socket.io-client';

// Set Up socket.io
const io = socketIOClient(window.location.name);

// Get the Audio Trigger Button
const audioButton = document.getElementById('audio-activation-button');

/* eslint-disable no-undef */
const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
/* eslint-enable no-undef */
recognition.lang = 'en-GB';

/**
 *
 * Set up Transcript variable, leave it undefined for later use.
 * Set up `lampOn` boolean and set it to false as a default as lamp should be
 * off on first load.
 *
 */
let transcript;
let lampOn = false;

/**
 *
 * Set up socket middleware and actions to occur when voice activation is
 * happening on the client side.
 *
 */
io.on('connect', () => {
  // Let the client and server know that the Client is connected.
  console.log('[socket.io] Client Connected.');
  io.emit('join', 'Client is connected.');

  /**
   *
   * Add an event listener for when the audio button is triggered, and begin
   * Speech Recognition.
   *
   */
  audioButton.addEventListener('click', () => {
    recognition.start();
  });

  /**
   *
   * When Speech Recognition is finished, store it in the `transcript`
   * variable and convert it to lower case for ease of recognition.
   *
   */
  recognition.onresult = (event) => {
    transcript = event.results[0][0].transcript.toLowerCase();

    // Log the transcript in the console.
    console.log(transcript);

    /**
     *
     * Run condition for the transcript.
     * If it's 'turn on the lamp', log the `lampOn` variable, and check if it's
     * already set to true. If not, set it to true, and send the lamp's value
     * to the server.
     *
     * If the transcript says 'turn off the lamp', check the `lampOn` variable
     * to see if it's already false. If not, send the value to the server.
     *
     * Anything else, log into the console that the command was not recognised.
     *
     */
    if (transcript === 'turn on the lamp') {
      console.log(lampOn);
      if (lampOn) {
        console.log('Lamp is already on.');
      } else {
        lampOn = true;
        io.emit('lamp', lampOn);
      }
    } else if (transcript === 'turn off the lamp') {
      console.log(lampOn);
      if (!lampOn) {
        console.log('Lamp is already off.');
      } else {
        lampOn = false;
        io.emit('lamp', lampOn);
      }
    } else {
      console.log('Command not recognised');
    }
  };

  recognition.onspeechend = () => {
    recognition.stop();
  };
});
