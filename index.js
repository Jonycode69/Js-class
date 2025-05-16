// example array data from a movie api
const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.2,
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  },
];

// example of sort with select option html
const sort = document.getElementById("sort"); // get the select element
sort.addEventListener("change", (e) => {
  const selectedValue = e.target.value;

  // sort movie titles
  if (selectedValue === "a-z") {
    const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
    const moviesMapped = sortedMovies.map((item) => {
      return `<div class="movie">
        <h2>${item.title}</h2>
        </div>`;
    });

    const sortedMoviesContainer = document.getElementById("all-movies");
    sortedMoviesContainer.innerHTML = moviesMapped;
  } else if (selectedValue === "z-a") {
    const sortedMovies = movies.sort((a, b) => b.title.localeCompare(a.title));
    const moviesMapped = sortedMovies.map((item) => {
      return `<div class="movie">
        <h2>${item.title}</h2>
        </div>`;
    });
    const sortedMoviesContainer = document.getElementById("all-movies");
    sortedMoviesContainer.innerHTML = moviesMapped;
  }
});



// Assignment 2

// 1. Array of student objects
const students = [
  { name: "Alice", score: 85 }, //scored A
  { name: "Bob", score: 58 }, //scored D
  { name: "Charlie", score: 92 }, //scored A
  { name: "Diana", score: 74 }, //scored C
  { name: "Chris", score: 95, age: 20, country: "USA" }, //scored A
];

// 2. Function to assign grades
function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

// 3. Process each student
let totalScore = 0;

for (let process = 0; process < students.length; process++) { // Loop through the array
  const { name, score, age, country } = students[process]; // Destructure the object

  // or without destructuring
//   const name = students[i].name;
//   const score = students[i].score;
//   const age = students[i].age;
//   const country = students[i].country;

  const grade = getGrade(score); // Call the getGrade function
  totalScore += score;

//   console.log(`${name} scored ${score} and received a grade of ${grade}.`);
  //display all students scores and received grades on the UI using innerHTML
  const studentList = document.getElementById("StudentList");
  studentList.innerHTML += `<li>${name} scored ${score} and received a grade of ${grade}.</li>`;


  // 4. Check scholarship eligibility
  if (score > 90 && name.startsWith("C")) {
    console.log(`${name} is eligible for a scholarship!`);
  }
}

// 5. Calculate average score
const averageScore = totalScore / students.length;
console.log(`\nClass average score: ${averageScore.toFixed(2)}`);
