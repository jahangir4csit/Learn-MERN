const fs = require('node:fs');
const { stdin, stdout } = require('node:process');

const writeableStream = fs.createWriteStream('./streams/pipe.txt');

stdin.pipe(writeableStream);
