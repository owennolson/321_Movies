var movieInput = document.getElementById("searchInput");
var searchBTN = document.getElementById("SearchBtn");

var yearX = document.getElementById("yearXBox");
var castX = document.getElementById("castXBox");
var infoX = document.getElementById("infoXBox");
var ratingX = document.getElementById("ratingXBox");

var moviesSearched = document.getElementById("pastSearches");
var pastSearches = [];


function gatherSearch() {
  var userInputObj = {
    movieName: movieInput.value,
    yearX: yearX.checked,
    castX: castX.checked,
    infoX: infoX.checked,
    ratingX: ratingX.checked
  };


  var movieObj = JSON.stringify(userInputObj);
  localStorage.setItem("currentSearch", movieObj);


}

//TO DO: Move to MovieInfo.js
/**
 * 
 * @returns {Array}
 */
function getMovies() {
  var moviesArray = JSON.parse(localStorage.getItem("searchHistory"));
  if (!moviesArray) {
    moviesArray = [];
  }
  return moviesArray;
}

//function showSearchHistory() {
// var moviesSearched = $("#pastSearches");
//  moviesSearched.empty();
// if(pastSearches.length) {
// for(var i = 0; i < pastSearches.length; i++){
//  moviesSearched.append("<li>" + pastSearches[i].movieInput + "</li>");
// }}
//}


//TO DO: Move to MovieInfo.js
function getMovieInfo() {
  var userInput = JSON.parse(localStorage.getItem("currentSearch"));

  var apiOMDB = "http://www.omdbapi.com/?t=" + userInput.movieName + "&apikey=b1cd3692";

  fetch(apiOMDB)
    .then(function (response) {
      if (response.ok) {

        response.json().then(function (data) {
          var searchInput = movieInput.value;
          if (searchInput == '') {
            return;
          }
          //if(localStorage["pastSearches"]) {
          //pastSearches = JSON.parse(localStorage["pastSearches"]);
          //} 
          var posterList = document.createElement("img");
          var getPoster = data.Poster;

          posterList.src = getPoster;
          var moviePoster = getPoster;
          //moviesSearched.appendChild(posterList);


          pastSearches.push(moviePoster);


          var movieYr = data.Year;
          var movieCst = data.Actors;
          var moviePlt = data.Plot;
          var movieRtg = data.imdbRating;
          //make call to get API movie data
          var searchHistory = {
            moviePoster: data.Poster,
            movieTitle: userInput.movieName,
            movieYear: "Year: " + movieYr,
            movieCast: "Cast: " + movieCst,
            moviePlot: "Summary: " + moviePlt,
            movieRating: "imdb Rating: " + movieRtg
            // iterate over to find IMDB rating rating: response.Ratings,

          };


          var history = getMovies();

          if (history.length >= 5) {
            history.shift();
          }

          history.push(searchHistory);


          var historyString = JSON.stringify(history);
          localStorage.setItem("searchHistory", historyString);



          if (userInput.yearX) {
            // this element is checked
            var yearList = document.createElement("li");
            var getYr = "Year: " + Number(data.Year);
            yearList.textContent = getYr;

            // moviesSearched.appendChild(yearList);

            pastSearches.push(getYr);

          }
          if (userInput.castX) {
            var castList = document.createElement("li");
            var getCast = "Cast: " + data.Actors;
            castList.textContent = getCast;

            //moviesSearched.appendChild(castList);

            pastSearches.push(getCast);

          }
          if (userInput.infoX) {
            var infoList = document.createElement("li");
            var getInfo = "Info: " + data.Plot;
            infoList.textContent = getInfo;

            //moviesSearched.appendChild(infoList);

            pastSearches.push(getInfo);

          }
          if (userInput.ratingX) {
            var ratingList = document.createElement("li");
            var getRatings = "imdbRatings: " + data.imdbRating;
            ratingList.textContent = getRatings;

            //moviesSearched.appendChild(ratingList);

            pastSearches.push(getRatings);
          }




          function showMovies(e) {
            e.preventDefault()
            //TO DO: get search history instead
            var searchedMovies = localStorage.getItem("searchHistory");
            var storeMovieDetails = JSON.parse(searchedMovies);

            console.log(storeMovieDetails);

            //TO DO: fix new variable into loop, looping over search history
            for (i = 0; i < storeMovieDetails.length; i++) {

              var listOfMovies = document.createElement("li");
              listOfMovies.innerHTML = storeMovieDetails[i].movieTitle;
              //var textnode = document.createTextNode(storeMovieDetails[i]);
              //istOfMovies.appendChild(textnode);
              moviesSearched.appendChild(listOfMovies);

            }
          }
          showMovies();

          //console.log(savedSearch);

          //if(pastSearches.length >= 5) { 
          //pastSearches.pop();
          //}
          //pastSearches.unshift(savedSearch);

          //localStorage["pastSearches"] = JSON.stringify(pastSearches);
          // showSearchHistory();
        });
      }
    }
    )
};





//TO DO: Move gather search to event listener, function we did with Owen, redirect
searchBTN.addEventListener("click", function (e) {
  e.preventDefault();
  gatherSearch();
  getMovieInfo();
  localStorage.setItem("userInput", movieInput.value);
  document.location.replace("./movieInfo.html");
})