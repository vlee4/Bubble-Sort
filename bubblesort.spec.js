describe('Bubble Sort', function () {
  // beforeAll(function () {
  //   spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  // });
  // it('calls swap', function () {
  //   bubbleSort();
  //   expect(window.swap.calls.count()).toEqual(2);
  // });

  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles a single item', function () {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it('handles multiple items', function () {
    expect(bubbleSort([3, 2, 5, 1, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([10, 2]).toEqual([2, 10]));
  });
  // it('handles strings as well as numbers', function () {
  //   expect(bubbleSort(['bee', 'aardvark', 'zebra', 'giraffe'])).toEqual(['aardvark', 'bee', 'giraffe', 'zebra'])
  //   expect(bubbleSort(['B', 'a']))
  // })
});
