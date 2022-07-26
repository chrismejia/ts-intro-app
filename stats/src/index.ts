import fs from 'fs';

/**
 * Read the `football.csv`, split the file on each newline, and create nested arrays of each entry at each newline split
 */
const matches = fs
  .readFileSync('./data/football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => row.split(','));

console.log(matches);
