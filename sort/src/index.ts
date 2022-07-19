import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const someNums = new NumbersCollection([
  10, 3345, 347234732, 8345673, 84, 21, 3457, -5, 0,
]);
const sorter = new Sorter(someNums);

sorter.sort();
console.log(sorter.collection);
