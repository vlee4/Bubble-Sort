function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  //odd one out goes in first half
  //math.ceil(wholeArray.length/2)
  //slice at midpoint
  //firstHalf = 0,midpoint
  //secondHalf = midpoint, length
  //keep splitting until array length is 1

  //if array <=1 return array

  if (wholeArray.length <= 1) {
    return [wholeArray, []];
  } else {
    let midpoint = Math.ceil(wholeArray.length / 2);
    let firstHalf = wholeArray.slice(0, midpoint);
    let secondHalf = wholeArray.slice(midpoint);
    return [firstHalf, secondHalf];
  }
}

function merge(arrA, arrB) {
  //Check that arrays have length
  //if !arrA or !arrB

  //Compare first element of both arrays
  //push small or the two into output array
  //push arrX.shift method

  //compare first elements again, repeat putting smaller into output array

  //keep looping while arrA&B have length
  //when one of the arrays doesn't have length push remaining array into output array

  let outputArray = [];

  while (arrA.length && arrB.length) {
    let firstA = arrA[0];
    let firstB = arrB[0];
    firstA >= firstB
      ? outputArray.push(arrB.shift())
      : outputArray.push(arrA.shift());
  }
  // console.log("ARR A", arrA);
  // console.log("ARR B", arrB);
  // arrA.length ? console.log("YES") : console.log("NO");
  outputArray = arrA.length
    ? outputArray.concat(arrA)
    : outputArray.concat(arrB);
  // console.log("OUTPUT ARRAY", outputArray);
  return outputArray;
}

function mergeSort(array) {
  //output array
  //while array lengths >1 split() on returned arrays
  //until each array is of length 1
  //outputArray = merge(mergeSort(), mergeSort()))

  //check array.length >1; yes
  //[2,1,4,3] split this
  //[2,1],[4,3] call mergeSort on each outputted array which will check array.length>=1
  //[2],[1],[4],[3] if array length is 1, call merge()

  //check if nested arrays are both <=1 merge

  if (array.length > 1) {
    let [arr1, arr2] = split(array);
    let outputArr = merge(mergeSort(arr1), mergeSort(arr2));
    return outputArr;
  } else {
    //if length <=1
    return array;
  }
}
