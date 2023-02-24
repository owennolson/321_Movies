$(document).ready(function () {
  var year = document.getElementById("movieYr");
  var cast = document.getElementById("movieCast");
  var info = document.getElementById("movieSummary");
  var rating = document.getElementById("movieRtg");
  var searchTermInput = document.getElementById("searchInput");
    var movieInput = localStorage.getItem("userInput");
    var movieInfo = JSON.parse(localStorage.getItem("searchHistory"))[0];
    var homeBtn = document.getElementById("homePage");
    console.log(movieInput);
  
    videoSearch(movieInput);
    console.log(movieInfo);
    // infoAPI();
    year.textContent = movieInfo.movieYear;
    cast.textContent = movieInfo.movieCast;
    info.textContent = movieInfo.moviePlot;
    rating.textContent = movieInfo.movieRating

    //  function infoAPI()
    //    var apiOMDB = "http://www.omdbapi.com/?t=" + searchTermInput.value + "&apikey=b1cd3692"; 
    //    fetch(apiOMDB)
    //    .then(function (response) {
    //      response.json().then(function (data) {
    //      year.textContent = data.Year;
    //      cast.textContent = data.Actors;
    //      info.textContent = data.Plot;
    //      rating.textContent = data.imdbRating;

    //      year.innerHTML = data.year;
    //      })


    function videoSearch(searchTerm) {
      $.get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4iANTavTOkhNiHJBZLKy9VwkaCACFJxg&type=video&part=snippet&maxResults=1" +
          "&q=" +
          encodeURI(searchTerm + " trailer"),
        (data) => {
          console.log(data);
          let video = `<iframe width="720" height="515" src="http://www.youtube.com/embed/${data.items[0].id.videoId}" frameborder="0" allowfullscreen></iframe>`;
          $("#videos").append(video);
        }
      );
    }
  
    homeBtn.addEventListener('click', function(){
      document.location.replace("./index.html");
    })
  });