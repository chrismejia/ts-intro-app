"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
/**
 * Read the `football.csv`, split the file on each newline, and create nested arrays of each entry at each newline split
 */
const reader = new CsvFileReader_1.CSVFileReader('./data/football.csv');
reader.read();
console.log(reader.data);
let lfcWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Liverpool' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        lfcWins++;
    }
    else if (match[2] === 'Liverpool' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        lfcWins++;
    }
}
console.log(`Liverpool won ${lfcWins} games this season`);
