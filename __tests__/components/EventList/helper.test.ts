import "@testing-library/jest-dom";
import { chunkArray } from "@/components/EventList/helper";

describe("EventList helper functions", () => {
  it("chunkArray functions on empty array", () => {
    expect(chunkArray([], 2)).toEqual([]);
  });

  it("chunkArray functions on empty array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(chunkArray(arr, 2)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ]);
  });
});
