document.addEventListener("DOMContentLoaded", function() {
    // Dummy movie data
    const movies = [
      { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
      { title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
      { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 },
      { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },
      { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994 },
      // Add more movies here...
      { title: "Inception", director: "Christopher Nolan", year: 2010 },
      { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", year: 1999 },
      { title: "Interstellar", director: "Christopher Nolan", year: 2014 },
      { title: "The Silence of the Lambs", director: "Jonathan Demme", year: 1991 },
      { title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", year: 2003 },
      // Add more movies here...
      { title: "The Usual Suspects", director: "Bryan Singer", year: 1995 },
      { title: "The Green Mile", director: "Frank Darabont", year: 1999 },
      { title: "Saving Private Ryan", director: "Steven Spielberg", year: 1998 },
      { title: "The Departed", director: "Martin Scorsese", year: 2006 },
      { title: "Gladiator", director: "Ridley Scott", year: 2000 },
      // Add more movies here...
      { title: "The Lion King", director: "Roger Allers, Rob Minkoff", year: 1994 },
      { title: "Schindler's List", director: "Steven Spielberg", year: 1993 },
      { title: "The Godfather: Part II", director: "Francis Ford Coppola", year: 1974 },
      { title: "The Lord of the Rings: The Fellowship of the Ring", director: "Peter Jackson", year: 2001 },
      { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
      // Add more movies here...
      { title: "Fight Club", director: "David Fincher", year: 1999 },
      { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994 },
      { title: "The Prestige", director: "Christopher Nolan", year: 2006 },
      { title: "The Departed", director: "Martin Scorsese", year: 2006 },
      { title: "The Green Mile", director: "Frank Darabont", year: 1999 },
      // Add more movies here...
      { title: "The Godfather: Part III", director: "Francis Ford Coppola", year: 1990 },
      { title: "Shawshank Redemption", director: "Frank Darabont", year: 1994 },
      { title: "Goodfellas", director: "Martin Scorsese", year: 1990 },
      { title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
      { title: "The Lord of the Rings: The Two Towers", director: "Peter Jackson", year: 2002 },

      { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
      { title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
      { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 },
      { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },
      { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994 },
      // Add more English movies here...
      { title: "The Godfather: Part III", director: "Francis Ford Coppola", year: 1990 },
      { title: "Shawshank Redemption", director: "Frank Darabont", year: 1994 },
      { title: "Goodfellas", director: "Martin Scorsese", year: 1990 },
      { title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
      { title: "The Lord of the Rings: The Two Towers", director: "Peter Jackson", year: 2002 },
      // Add more English movies here...
      { title: "3 Idiots", director: "Rajkumar Hirani", year: 2009, language: "Hindi" },
      { title: "Baahubali: The Beginning", director: "S.S. Rajamouli", year: 2015, language: "Telugu" },
      { title: "Rang De Basanti", director: "Rakeysh Omprakash Mehra", year: 2006, language: "Hindi" },
      { title: "Dangal", director: "Nitesh Tiwari", year: 2016, language: "Hindi" },
      { title: "Kabali", director: "Pa. Ranjith", year: 2016, language: "Tamil" },
      // Add more Hindi, Telugu, and Tamil movies here...
      { title: "Ghajini", director: "A.R. Murugadoss", year: 2008, language: "Hindi" },
      { title: "Singham", director: "Rohit Shetty", year: 2011, language: "Hindi" },
      { title: "Magadheera", director: "S.S. Rajamouli", year: 2009, language: "Telugu" },
      { title: "Mersal", director: "Atlee", year: 2017, language: "Tamil" },
      { title: "Sarkar", director: "A.R. Murugadoss", year: 2018, language: "Tamil" },
      { title: "Visaranai", director: "Vetrimaaran", year: 2015, language: "Tamil" },
      { title: "Pariyerum Perumal", director: "Mari Selvaraj", year: 2018, language: "Tamil" },
      { title: "Aruvi", director: "Arun Prabu Purushothaman", year: 2016, language: "Tamil" },
      { title: "Super Deluxe", director: "Thiagarajan Kumararaja", year: 2019, language: "Tamil" },
      { title: "Vada Chennai", director: "Vetrimaaran", year: 2018, language: "Tamil" },
      // Add more Tamil movies here...
      { title: "Kaththi", director: "A.R. Murugadoss", year: 2014, language: "Tamil" },
      { title: "Enthiran", director: "S. Shankar", year: 2010, language: "Tamil" },
      { title: "Nayagan", director: "Mani Ratnam", year: 1987, language: "Tamil" },
      { title: "Aayirathil Oruvan", director: "Selvaraghavan", year: 2010, language: "Tamil" },
      { title: "Sivaji", director: "S. Shankar", year: 2007, language: "Tamil" },
      // Add more movies here...
    ];
  
    // Function to render movie items
    function renderMovies(movies) {
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
    renderMovies(movies);
  
    // Function to filter movies based on search input
    function filterMovies(searchText) {
      const filteredMovies = movies.filter(function(movie) {
        return movie.title.toLowerCase().includes(searchText.toLowerCase());
      });
      renderMovies(filteredMovies);
    }
  
    // Search input event listener
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function() {
      const searchText = this.value;
      filterMovies(searchText);
  
      // Check if the searched movie is in the library
      const movieFound = movies.some(function(movie) {
        return movie.title.toLowerCase().includes(searchText.toLowerCase());
      });
  
      // Display message if the movie is not found
      const searchMessage = document.getElementById("searchMessage");
      if (!movieFound) {
        searchMessage.textContent = "Movie not found in library.";
      } else {
        searchMessage.textContent = "";
      }
    });
  
    // Logout functionality
    const logoutButton = document.getElementById("logout");
    logoutButton.addEventListener("click", function(event) {
      event.preventDefault();
      // Here you can implement logout logic
      // For demonstration purposes, let's just redirect to the login page
      window.location.href = "login.html";
    });
  });
  