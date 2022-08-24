const fs = require('node:fs');
const Events = require('node:events');

const event = new Events;
const log = console.log;

//*** */ Sync write execution 
// fs.writeFileSync('m1.text', 'Hello Mern');
// log('File Write Done');

//*** */ aSync write execution 
// fs.writeFile('m2.text', 'Hello Mern Async', ()=>{
//     log('Inside of callback');
// });
// log('File Write Done');

// *** aSync append execution
const fileName = 'm2.text';

event.on('read', async()=>{
    const data = await fs.promises.readFile(fileName, 'utf-8');
    log('Reading'+"\n", data);
})

fs.appendFile(fileName, `\n${ new Date().toLocaleDateString()}`, ()=>{
    log('Writing Finished');
    event.emit('read');
});
log('Writing Started');
