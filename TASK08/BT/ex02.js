const arrayWords = ["Hello world", "JS is fun", "Arrays and strings"];
function countTotalWords(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let words = arr[i].split(" ");
    total += words.length;
  }
  return total;
}

console.log(countTotalWords(["Hello world", "JS is fun", "Arrays and strings"])); // 8