"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
// Create an object that satisfies the 'DataReader' interface
// Remember that 'fs' paths are relative to their project folder base,
// NOT the current file!
const myCsvFileReader = new CsvFileReader_1.CSVFileReader('./data/football.csv');
// Create an instance of matchreader and pass in something satisfying the 'DataReader interface
const myMatchReader = new MatchReader_1.MatchReader(myCsvFileReader);
myMatchReader.load();
/**
 * Read the `football.csv`, split the file on each newline, and create nested arrays of each entry at each newline split
 */
// console.log(reader.data);
let lfcWins = 0;
for (let match of myMatchReader.matches) {
    if (match[1] === 'Liverpool' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        lfcWins++;
    }
    else if (match[2] === 'Liverpool' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        lfcWins++;
    }
}
console.log(`Liverpool won ${lfcWins} games this season`);
