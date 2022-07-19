"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const someNums = new NumbersCollection_1.NumbersCollection([
    10, 3345, 347234732, 8345673, 84, 21, 3457, -5, 0,
]);
const sorter = new Sorter_1.Sorter(someNums);
sorter.sort();
console.log(sorter.collection);
