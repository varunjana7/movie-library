document.addEventListener("DOMContentLoaded", function() {
    // Dummy movie data
    const movies = [
      // Your movie data here...
    ];
  
    // Function to render movie items
    function renderMovies() {
      const movieList = document.getElementById("movieList");
  
      // Clear existing movie items
      movieList.innerHTML = "";
  
      // Loop through movies array and create list items
      movies.forEach(function(movie) {
        const li = document.createElement("li");
        li.textContent = `${movie.title} (${movie.year}) - Directed by ${movie.director}`;
        movieList.appendChild(li);
      });
    }
  
    // Call renderMovies function when the page loads
    renderMovies();
  
    // Add New Movie button click event listener
    const addMovieButton = document.getElementById("addMovie");
    addMovieButton.addEventListener("click", function() {
      // Redirect to the page for adding a new movie
      window.location.href = "add_movie.html";
    });
  });
  