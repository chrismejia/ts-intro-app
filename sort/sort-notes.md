# Sorting Algorithm

## Setup & Packages

1. Started an npm project
2. Created two folders:
   1. `src/`: to organize all TS files
   2. `build/`: to organize all the compiled JS output files
3. Created a `tsconfig.json` file by running `tsc --init` in our terminal.
4. In the `tsconfig.json`, activated two config lines:
   1. `rootDir`: Specify the root folder within your source files.
   2. `outDir`: Specify an output folder for all emitted files.
5. Installed the `nodemon` and `concurrently` npm packages
   1. `nodemon`: will run the compiled JS files
   2. [`concurrently`](https://www.npmjs.com/package/concurrently): will run our `build` and `run` commands concurrently
6. Wrote our `start` scripts:
   1. `start:build`: runs the TS compiler in `--watch` mode
   2. `start:run`: runs `nodemon` to run our compiled JS files
   3. `start`: tells `concurrently` to run all npm `start` scripts that match the `*` wildcard
7. Test run the project setup by running `npm start`; success!

## Features

### The union `|` operator

When used in a type definition, TS allows you to access the **properties and methods** that are common between types that unionized.

e.g. `number[] | string` allows you to access the property:

- `.length`

and the methods:

- `.concat()`
- `.indexOf()`
- `.lastIndexOf()`
- `.slice()`
- `.toString()`
- `.valueOf()`

### Using type guards with `|` unions

TS understands that certain code will not operate as intended because of the way it checks the common features between unionized types. We can dictate certain behaviors to work around this using type guards.

A type guard is an explicit type check, (e.g. `typeof`, `instanceof`) that allows for certain type conflicting actions to occur.

#### Primitive values vs. object references

You can use `typeof` to type guard the following primitive data types:

- `number`
- `string`
- `boolean`
- `symbol`

Similarly, you can type guard every other value that is created with a constructor function using `instanceof`:

- `Array`
- objects like Classes, `Date`s, etc
