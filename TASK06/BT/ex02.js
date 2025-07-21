// Input:
function filterEvenNumbers(arr) {
  const result = arr.filter((num) => num % 2 === 0);
  console.log(result);
}

// Output:
filterEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]
filterEvenNumbers([1, 3, 5, 7]); // Output: []
filterEvenNumbers([]); // Output: []
filterEvenNumbers([-2, -1, 0, 1, 2]); // Output: [-2, 0, 2]
