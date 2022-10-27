"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
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
class CSVFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row) => row.split(','))
            .map(this.mapRow);
    }
}
exports.CSVFileReader = CSVFileReader;
