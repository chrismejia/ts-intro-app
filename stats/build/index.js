"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
/**
 * Read the `football.csv`, split the file on each newline, and create nested arrays of each entry at each newline split
 */
const matches = fs_1.default
    .readFileSync('./data/football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map((row) => row.split(','));
console.log(matches);
