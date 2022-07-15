# Typed Arrays

## Why are typed arrays useful?

1. They help with inference when extracting values.

```ts
const carMakers = ['Subaru', 'Toyota', 'Honda'];
const car = carMakers[0]; // string
const myCar = carMakers.pop();
```

2. Prevent incompatible values

```ts
carMakers.push(100);
```

3. Help with array methods like `map` and `forEach`

```ts
carMakers.map((car: string): string => car.toUpperCase());
```

## Flexible types

Instead of relying on inference of present values of an array, you can dictate the expected types of an array explicitly:

```ts
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('12-25-2030');
importantDates.push(new Date());
importantDates.push(19294); // note the push input error
```
