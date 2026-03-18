// Exercise 3
//Declare studentList Array
const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98]
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100]
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100]
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85]
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98]
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90]
  },
];

// Compute min using reduce
const getMin = scores =>
  scores.reduce((min, s) => (s < min ? s : min), scores[0]);

// Compute max using reduce
const getMax = scores =>
  scores.reduce((max, s) => (s > max ? s : max), scores[0]);

// Compute average using reduce
const getAvg = scores =>
  scores.reduce((sum, s) => sum + s, 0) / scores.length;

const cLastNameResults = studentList
  .filter(s => s.lastName.startsWith("C")) // Only last names starting with C
  .map(s => ({
    firstName: s.firstName,
    lastName: s.lastName,
    minScore: getMin(s.scores),
    maxScore: getMax(s.scores),
    avgScore: getAvg(s.scores)
  }));

//Output
console.log(cLastNameResults);

// Exercise 4
// Add extra credit
for (let i = 0; i < studentList.length; i++) {
    studentList[i].scores = studentList[i].scores.map(score => score + 5);
}

// Add missing exam score
for (let i = 0; i < studentList.length; i++) {
    const scores = studentList[i].scores;
    const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;

    // Add the average score to the existing array
    studentList[i].scores.push(avg);
}

// Display results
for (let i = 0; i < studentList.length; i++) {
    const s = studentList[i];
    console.log(`${s.firstName} ${s.lastName}: [${s.scores.join(", ")}]`);
}


