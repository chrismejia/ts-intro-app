import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

/**
 * Read the `football.csv`, split the file on each newline, and create nested arrays of each entry at each newline split
 */

const reader = new MatchReader('./data/football.csv');
reader.read();

console.log(reader.data);

let lfcWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Liverpool' && match[5] === MatchResult.HomeWin) {
    lfcWins++;
  } else if (match[2] === 'Liverpool' && match[5] === MatchResult.AwayWin) {
    lfcWins++;
  }
}

console.log(`Liverpool won ${lfcWins} games this season`);
