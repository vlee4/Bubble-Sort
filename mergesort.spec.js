describe("Split Array function", function () {
  it("is able to split an array into two halves", function () {
    expect(split([1])).toEqual([[1], []]);
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    expect(split([10, 20, 30, 40, 50])).toEqual([
      [10, 20, 30],
      [40, 50],
    ]);
  });
});

describe("Merge function", function () {
  it("is able to merge two sorted arrays into one sorted array", function () {
    // test the merging algorithm
    expect(merge([1], [])).toEqual([1]);
    expect(merge([2], [1])).toEqual([1, 2]);
    expect(merge([4, 5], [2, 8])).toEqual([2, 4, 5, 8]);
    expect(merge([10, 13, 15], [2, 16])).toEqual([2, 10, 13, 15, 16]);
  });
});

describe("mergeSort function", function () {
  it("It sorts the array", function () {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([5, 4, 7, 10, 9])).toEqual([4, 5, 7, 9, 10]);
    expect(mergeSort([13, 2, 5, 9, 20, 1])).toEqual([1, 2, 5, 9, 13, 20]);
  });
});
