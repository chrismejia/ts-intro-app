"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollections = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollections extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    /**
     * Since it's a string, we need to need to account for `charCodeAt` values.
     * We also need to find a way to compare the existing value; `.toLowerCase()`
     * @param leftIdx
     * @param rightIdx
     */
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    }
    /**
     * Since we can't swap values in a string, we need to `.split` the string to obtain an array where we can swap character values and then `.join` the characters array back into a string.
     * @param leftIdx
     * @param rightIdx
     */
    swap(leftIdx, rightIdx) {
        const characters = this.data.split('');
        const leftHand = characters[leftIdx];
        characters[leftIdx] = characters[rightIdx];
        characters[rightIdx] = leftHand;
        this.data = characters.join('');
    }
}
exports.CharactersCollections = CharactersCollections;
