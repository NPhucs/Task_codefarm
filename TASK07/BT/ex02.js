function findSecondLargestNumber(arr) {

  if (!Array.isArray(arr) || arr.length < 2) {
    return -1;
  }
  
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num < largest && num > secondLargest) {
      secondLargest = num;
    }
  }
  

  return secondLargest === -Infinity ? -1 : secondLargest;
}


console.log(findSecondLargestNumber([1, 2, 3, 4, 5])); // 4
console.log(findSecondLargestNumber([1, 1, 1])); // -1
console.log(findSecondLargestNumber([1])); // -1