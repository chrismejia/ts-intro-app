"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
/**
 * Read the `football.csv`, split the file on each newline, and create nested arrays of each entry at each newline split
 */
const reader = new CsvFileReader_1.CSVFileReader('./data/football.csv');
reader.read();
/**
 * `enum` represent all string/number possibilities. enum props can be accessed like object values via dot-notation. They cannot be edited externally (via network request, etc.) They need to be defined at code time.
 */
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let lfcWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Liverpool' && match[5] === MatchResult.HomeWin) {
        lfcWins++;
    }
    else if (match[2] === 'Liverpool' && match[5] === MatchResult.AwayWin) {
        lfcWins++;
    }
}
console.log(`Liverpool won ${lfcWins} games this season`);
