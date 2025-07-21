function cleanFalsyValues(arr) {
  const result = arr.filter(Boolean);
  console.log(result);
}

// Output:
cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]);
