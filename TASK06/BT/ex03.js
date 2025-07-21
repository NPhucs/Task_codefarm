// Input:
function filterLongStrings(arr) {
  const result = arr.filter((str) => typeof str === "string" && str.length > 5);
  console.log(result);
}

// Output:
filterLongStrings(["hello", "world", "javascript", "nodejs"]);
// Output: ["javascript", "nodejs"]

filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]);
// Output: ["hello world", "goodbye!!"]

filterLongStrings(["hi", "bye", "yes"]);
// Output: []
