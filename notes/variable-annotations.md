# Annotations with Variables

## When to use annotations

- Functions that return the `any` type

  - `any` is a type; implies that TS has no idea what this value is.
  - TS can't check for correct property references.

- When we declare a vairable on one line and then initialize its value later
- Variable whose type can't be inferred correctly

## Function annotations

- Dictates types of arguments received and what type of values it will return

### How to annotate

- each argument gets their own annotation
- shorthand return annotation off of argument list
  - return type inference does read off function body but best practice is to explicitly declare return value type

```ts
// Arrow Func
const add = (a: number, b: number): number => {
  return a + b;
};

// Function declaration
function divide(c: number, d: number): number {
  return c / d;
}

// Anonymous function
const multiply = function (e: number, f: number): number {
  return e * f;
};
```

## `void` and `never`

- NB: functions that return `void` **CAN** return `null` or `undefined`
- `void`: nothing is ever returned from this function
- `never`: never reaches the end of this function (to return anything, because it exited this function to run something else)

```ts
// LOGS something, but does NOT return anything
const logger = (message: string): void => {
  console.log(message);
};

// uses `never` since we're throwing a new Error instead of returning anything (or nothing)
const msgErrThrower = (errMsg: string): never => {
  throw new Error(errMsg);
};
```

## Destructuring annotation

The destructuring and its annotation are always going to be TWO separate parts.

```ts
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
```

## Objects

### Destructuring assignment of existing objects

When you destructure an existing object to declare a new variable, the variable annotation **must be** the expected destructure of the focused object.

```ts
const profile = {
  name: 'Christian',
  age: 33,
  coords: {
    lat: 41,
    lng: -74,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
```
