// Function to handle form submission and add the new movie
function addNewMovie() {
    // Get input values
    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const year = document.getElementById("year").value;

    // Create a new movie object
    const newMovie = {
        title: title,
        director: director,
        year: year
    };

    // Add the new movie to the movies array
    movies.push(newMovie);

    // Call renderMovies function to update the movie list on the home page
    renderMovies();

    // Show success message
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    // Optional: Redirect to the home page or display a success message
}

// Call the addNewMovie function when the form is submitted
document.getElementById("addMovieForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addNewMovie();
});
