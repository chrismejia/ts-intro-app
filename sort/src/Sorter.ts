/**
 * We implement `Sortable` to act as a gatekeeper for classes that can be sorted.
 * We use an interface here as the type instead of a class because all we care about is that whatever input into `Sorter` has the required properties and methods.
 *
 * Comparing and sorting is left to the class, where data-type specific instructions is dictated, leaving `Sorter` free from needing `if` statement type-guards that gatekeep type-specific sorting instructions.
 */

interface Sortable {
  length: number;
  compare(leftIdx: number, rightIdx: number): boolean;
  swap(leftIdx: number, rightIdx: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
