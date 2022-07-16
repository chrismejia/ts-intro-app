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
