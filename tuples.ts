const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};
type Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ['brown', true, 40]; // explicit

// now we can use the Drink type def
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// incomplete assignments are also caught

const badDrink: Drink = ['green']; // source has 1 element, but requires 3

pepsi[0] = 40; // error because of tuple definition

// bad definition

const carSpecs: [number, number] = [400, 3354];

// more clearly understandable
const carStats = {
  horsepower: 400,
  weight: 3354,
};
