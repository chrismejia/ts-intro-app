# Classes in TypeScript

## Longform v Shorthand definitions

### Longform

You define the variables with their types before the `constructor` statement and pass the expected initial parameters (with definition) into the `constructor`.

```ts
class Sorter {
  collection: number[]; // type definition

  // re-use of definition here
  constructor(collection: number[]) {
    this.collection = collection;
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
```

### Shorthand, using `public`

You can consolidate the definition **AND** the `collection` instance value assignment into the `constructor` parameter by using the `public` keyword.

`public` in the constructor does double duty here:

1. Provides type definition
2. Replaces `this.collection = collection` in `constructor`

```ts
class Sorter {
  constructor(public collection: number[]) {}
}

const sorter = new Sorter([10, 3, -5, 0]);
```

## Classes, but with future promises: Abstract Classes

- Can't be used to create an object directly
- Only used as a parent class
- Can contain real implementation for some methods
- The implemented methods can refer to other methods that don't actually exist yet (we still have to provide names and types for the un-implemented methods)
- Can make child classes promise to implement some other method

## Interfaces vs abstract classes

### Interfaces

- Sets up a contract between different classes
- Use when we have very different object that we want to work together
- Promotes loose coupling

### Abstract Classes/Inheritance (`extends`)

- Sets up a contract between different classes
- Use when we are trying to build up a definition of an object
- Strongly couples classes together
