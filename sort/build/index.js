"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
// import { CharactersCollections } from './CharactersCollection';
const LinkedList_1 = require("./LinkedList");
// const someNums = new NumbersCollection([
//   10, 3345, 347234732, 8345673, 84, 21, 3457, -5, 0,
// ]);
// const sorter = new Sorter(someNums);
// sorter.sort();
// console.log(sorter.collection);
// const someChars = new CharactersCollections('FDSGasfOLvfga');
// const sorter = new Sorter(someChars);
// sorter.sort();
// console.log(sorter.collection);
const myList = new LinkedList_1.LinkedList();
myList.add(500);
myList.add(-10);
myList.add(-3);
myList.add(4);
const sorter = new Sorter_1.Sorter(myList);
sorter.sort();
myList.print();
