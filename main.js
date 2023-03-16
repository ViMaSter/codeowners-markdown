// import generate() from generate.js call it with first command line argument
import generate from './generate.js';
import path from 'node:path';

const __dirname = path.resolve();
const relativeSourceDirectoryPath = process.argv[2];
const absoluteSourceDirectoryPath = path.resolve(__dirname, relativeSourceDirectoryPath);
const output = generate(absoluteSourceDirectoryPath);
console.log(output);