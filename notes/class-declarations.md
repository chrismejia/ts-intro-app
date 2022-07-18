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
