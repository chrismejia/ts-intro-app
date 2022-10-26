import fs from 'fs';
import { dateStringToDate } from './utlis';
import { MatchResult } from './MatchResult';

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

export abstract class CSVFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}

// mapRow(row: string[]): MatchData {
//   return [
//     dateStringToDate(row[0]),
//     row[1],
//     row[2],
//     parseInt(row[3]),
//     parseInt(row[4]),
//     row[5] as MatchResult,
//     row[6],
//   ];
// }
