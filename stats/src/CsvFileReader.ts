import fs from 'fs';

/**
 * Using MatchResult as a type assertion is our way of telling TypeScript that we understand what is going on here; so instead of TS just knowing that it's a string, we can tell it that it's specifically one of a set of options.
 */

/**
 * The first version of the second map featured this definition:
 * ```ts
 * arr.map((row: string[]): any => {})
 * ```
 *  where any would've been a union of types:
 *
 * ```ts
 * (Date | number | string | MatchResult)[]
 * ```
 *
 * Instead we can define a tuple as a new type, and then ensure that the row of strings is each converted into the appropriate types.
 */

export class CSVFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
