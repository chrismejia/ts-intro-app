let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];
let mixedNestedArrs: (string | number)[][] = [[1], [1, 'a', 3], [4, 5, 6]];

// class Car {}
// let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber: (i: number) => void = (n: number) => {
  console.log(n);
};

const add = (a: number, b: number): number => {
  return a + b;
};
