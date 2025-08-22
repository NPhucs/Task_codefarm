function removeDuplicate(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    // Nếu là NaN
    if (Number.isNaN(item)) {
      // kiểm tra trong result có NaN chưa
      if (!result.some((x) => Number.isNaN(x))) {
        result.push(item);
      }
    }
    // Nếu là null hoặc undefined
    else if (item === null || item === undefined) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
    // Các giá trị bình thường
    else {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
  }

  return result;
}

// Test với fruits
const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];

console.log(removeDuplicate(fruits));
// ["apple", "banana", "kiwi", "orange"]

// Test thêm với NaN, null, undefined
const mixed = ["a", NaN, NaN, null, null, undefined, undefined, "b"];
console.log(removeDuplicate(mixed));
// ["a", NaN, null, undefined, "b"]
