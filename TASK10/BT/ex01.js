function convertArrayToObject(array) {
  const result = {};

  for (let item of array) {
    const [key, value] = item.split(":");

    result[key] = value;
  }

  return result;
}

const arrayString = ["name:John", "age:30", "city:NY"];
console.log(convertArrayToObject(arrayString)); // { name: 'John', age: '30', city: 'NY' }/
