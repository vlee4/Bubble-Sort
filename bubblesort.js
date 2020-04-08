function swap(array) {
  const a = array[0];
  const b = array[1];
  if (a <= b) {
    return array;
  } else {
    return [b, a];
  }
}

function bubbleSort(array) {
  /* your code here */
  // debugger;
  if (array.length <= 1) {
    return array;
  } else if (array.length === 2) {
    return swap(array);
  } else {
    //loop through to array.length
    //once reach end, call bubblesort with (0, -1)
    let outputArr = [];
    for (let i = 0; i < array.length - 1; i++) {
      let element = [array[i], array[i + 1]];
      const swapped = swap(element);
      array[i] = swapped[0];
      array[i + 1] = swapped[1];
    }
    // console.log("THE ARRAY", array);
    outputArr.unshift(array[array.length - 1]);
    // console.log("Slice", array.slice(0, -1));
    outputArr = [...bubbleSort(array.slice(0, -1)), ...outputArr];
    // console.log("OUTPUT ARRAY", outputArr);
    return outputArr;
  }
}
