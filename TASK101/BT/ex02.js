function convertNested(arr) {
 
  const map = {};
  arr.forEach((item) => {
    map[item.id] = { ...item, children: [] }; 
  });

  const result = [];


  arr.forEach((item) => {
    if (item.parent === 0) {
      result.push(map[item.id]); 
    } else {
      map[item.parent].children.push(map[item.id]); 
    }
  });

  // Xóa thuộc tính parent
  Object.values(map).forEach((item) => {
    delete item.parent;
  });

  return result;
}

// Dữ liệu đầu vào
const categories = [
  { id: 1, name: "Chuyên mục 1", parent: 0 },
  { id: 2, name: "Chuyên mục 2", parent: 0 },
  { id: 3, name: "Chuyên mục 3", parent: 0 },
  { id: 4, name: "Chuyên mục 2.1", parent: 2 },
  { id: 5, name: "Chuyên mục 2.2", parent: 2 },
  { id: 6, name: "Chuyên mục 2.3", parent: 2 },
  { id: 7, name: "Chuyên mục 3.1", parent: 3 },
  { id: 8, name: "Chuyên mục 3.2", parent: 3 },
  { id: 9, name: "Chuyên mục 3.3", parent: 3 },
  { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
  { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];


const categoriesNested = convertNested(categories);
console.log(JSON.stringify(categoriesNested, null, 2)); 
