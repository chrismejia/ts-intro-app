"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
/**
 * Receives a 'date' string in the style of '28/12/2018' and converts it to its corresponding Date value.
 * @param dateString
 * @returns Date
 */
const dateStringToDate = (dateString) => {
    const dateParts = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
