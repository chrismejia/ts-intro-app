/**
 * Receives a 'date' string in the style of '28/12/2018' and converts it to its corresponding Date value.
 * @param dateString
 * @returns Date
 */
export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
