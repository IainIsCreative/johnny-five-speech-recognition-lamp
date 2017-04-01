import 'babel-polyfill';
import socketIOClient from 'socket.io-client';

const io = socketIOClient(window.location.name);

const audioButton = document.getElementById('audio-activation-button');

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.lang = 'en-GB';

let transcript;
let lampOn = false;

io.on('connect', (socket) => {
  console.log('[socket.io] Client Connected.');
  io.emit('join', 'Client is connected.');

  audioButton.addEventListener('click', () => {
    recognition.start();
  });

  recognition.onresult = (event) => {
    transcript = event.results[0][0].transcript.toLowerCase();

    console.log(transcript);

    if (transcript == 'turn on the lamp') {
      console.log(lampOn);
      if(lampOn) {
        console.log('Lamp is already on.');
      } else {
        lampOn = true;
        io.emit('lamp', lampOn);
      }
    } else if (transcript == 'turn off the lamp') {
      console.log(lampOn);
      if(!lampOn) {
        console.log('Lamp is already off.');
      } else {
        lampOn = false;
        io.emit('lamp', lampOn);
      }
    } else {
      console.log('Command not recognised');
    }
  }

  recognition.onspeechend = () => {
    recognition.stop();
  }

})
