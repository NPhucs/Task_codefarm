function calculateAverageScores(students) {
  return students.map(student => {
    let sum = 0;
    let count = 0;
    
    // Tính tổng điểm và số lượng điểm
    student.scores.forEach(score => {
      sum += score;
      count++;
    });
    
    // Tính điểm trung bình và làm tròn đến 1 chữ số thập phân
    const average = count > 0 ? Math.round((sum / count) * 10) / 10 : 0;
    
    return {
      name: student.name,
      average: average
    };
  });
}

// Test case
const students = [
  { name: "An", scores: [8, 7.5, 9] },
  { name: "Bình", scores: [6, 5.5, 7] },
  { name: "Chi", scores: [9, 9.5, 10] },
];

const result = calculateAverageScores(students);
console.log(result);
// Output:
// [
//   { name: "An", average: 8.2 },
//   { name: "Bình", average: 6.2 },
//   { name: "Chi", average: 9.5 }
// ]