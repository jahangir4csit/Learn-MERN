const stream = require('node:stream');
const fs = require('node:fs');
const fileStream = fs.createWriteStream('./streams/output.txt');
fileStream.write('Hello World');
fileStream.end();

