const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
const log = console.log;

// eventEmitter.on('test', ()=>{
//     log('Test Fire');
// });
// eventEmitter.emit('test');

eventEmitter.on('even', ()=>{
    log('Even : ', new Date().toLocaleTimeString());
});
eventEmitter.on('odd', ()=>{
    log('Odd : ', new Date().toLocaleTimeString());
});

setInterval(()=>{
    const t = new Date().getTime();
    t%2 === 0 ? eventEmitter.emit('even') : eventEmitter.emit('odd');
}, 1751);