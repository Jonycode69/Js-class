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
