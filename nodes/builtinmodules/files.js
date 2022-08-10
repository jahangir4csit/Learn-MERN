const fs = require('node:fs');
const log = console.log;

// Sync execution 
// fs.writeFileSync('m1.text', 'Hello Mern');
// log('File Write Done');

// aSync execution 
fs.writeFile('m2.text', 'Hello Mern Async', ()=>{
    log('Inside of callback');
});
log('File Write Done');