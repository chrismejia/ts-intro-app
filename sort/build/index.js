"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
// const someNums = new NumbersCollection([
//   10, 3345, 347234732, 8345673, 84, 21, 3457, -5, 0,
// ]);
// const sorter = new Sorter(someNums);
// sorter.sort();
// console.log(sorter.collection);
const someChars = new CharactersCollection_1.CharactersCollections('FDSGasfOLvfga');
const sorter = new Sorter_1.Sorter(someChars);
sorter.sort();
console.log(sorter.collection);
