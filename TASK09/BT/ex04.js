// Thêm phương thức forEach2 vào prototype của Array
Array.prototype.forEach2 = function (callback) {
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (i in this) {
      callback(this[i], i, this);
    }
  }
};

const arr1 = [1, 2, 3, 4, 5];
arr1.forEach2((value, index) => {
  console.log(`Vị trí ${index}: ${value}`);
});

const arr2 = [1, , 3, , 5];
arr2.forEach2((value, index) => {
  console.log(`Vị trí ${index}: ${value}`);
});

const arr3 = [1, 2, 3];
arr3.forEach2((value, index, array) => {
  console.log(`Vị trí ${index}: ${value}`);
  array.push(4);
});
