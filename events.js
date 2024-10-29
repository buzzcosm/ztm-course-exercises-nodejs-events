// events.js
const EventEmitter = require('events');
const celebrity = new EventEmitter();

/* **************** */
/* Observer pattern */
/* **************** */

// Observer 1: Subscribe to the celebrity
celebrity.on('race', (result) => {
  if (result === 'win') {
    console.log('Congratulations! You are the best!');  
  }
});

// Observer 2: Subscribe to the celebrity 
celebrity.on('race', (result) => {
  if (result === 'win') {
    console.log('Boo I could have better than that!');
  }
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');