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

/**
 * Converting `Sorter` to an abstract class with abstract type specs of what to expect allows you to call methods within `Sorter` that will eventually exists (via class extension) as long as you provide the type specs for each future property/method.
 */
export abstract class Sorter {
  abstract compare(leftIdx: number, rightIdx: number): boolean;
  abstract swap(leftIdx: number, rightIdx: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
