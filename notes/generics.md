# Generics

- Like function args, but for types in class/function definitions
- Allows us to define the type of a property/argument/return value at some point
- Used heavily when writing reusable code

```ts
class HoldAnything<Type> {
  data: Type;
}

// now we can create instances using this generic
const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;

const holdString = new HoldAnything<string>();
holdString.data = 'myString';
```
