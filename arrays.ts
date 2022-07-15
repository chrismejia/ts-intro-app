const carMakers = ['Subaru', 'Toyota', 'Honda'];

const blankStrArr: string[] = []; // would say `any[]` without the type definition

const someDates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['Fit', 'S2000'],
  ['Forester', 'BRZ'],
];

const car = carMakers[0]; // string
const myCar = carMakers.pop();

carMakers.push(100); // note the input error

// Help with map
carMakers.map((car: string): string => car.toUpperCase());

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('12-25-2030');
importantDates.push(new Date());
importantDates.push(19294); // note the push input error
