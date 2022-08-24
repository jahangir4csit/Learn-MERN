const fs = require('node:fs');
const log = console.log;

const fileName = './streams/sample.pdf'

const readableStream = fs.createReadStream(fileName, {highWaterMark: 1024});
const writeableStream = fs.createWriteStream('./streams/sample-copy.pdf');

let iterator = 0;
readableStream.on('data', (chunk)=>{
    log(++iterator, '\t', chunk.length);
    writeableStream.write(chunk);
});

readableStream.on('end', ()=>{
    log('end');
    writeableStream.end(); 
});