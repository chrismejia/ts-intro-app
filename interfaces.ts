interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

// !BAD! Long inline parameter type
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name ${vehicle.name}`);
//   console.log(`Name ${vehicle.year}`);
//   console.log(`Name ${vehicle.broken}`);
// };

// !GOOD! uses an interface to extract the defintion to improve readability
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name ${vehicle.name}`);
  console.log(`Name ${vehicle.year}`);
  console.log(`Name ${vehicle.broken}`);
  console.log(`Name ${vehicle.summary()}`);
};

printVehicle(oldCivic);
