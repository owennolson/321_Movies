var movieInput = document.getElementById("searchInput");
var movieTrailerBtn = document.getElementById("movieTrailerBtn");
var movieInfoBtn = document.getElementById("movieInfoBtn");
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
    ratingX: ratingX.checked,
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
  var apiOMDB =
    "http://www.omdbapi.com/?t=" + userInput.movieName + "&apikey=b1cd3692";
  return fetch(apiOMDB).then(function (response) {
    if (response.ok) {
      return response.json().then(function (data) {
        var searchInput = movieInput.value;
        if (searchInput == "") {
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
          movieRating: "imdb Rating: " + movieRtg,
          // iterate over to find IMDB rating rating: response.Ratings,
        };
        var history = getMovies();
        if (history.length >= 5) {
          history.pop();
        }
        history.unshift(searchHistory);
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
        function showMovies() {
          //TO DO: get search history instead
          var searchedMovies = localStorage.getItem("searchHistory");
          var storeMovieDetails = JSON.parse(searchedMovies);
          console.log(storeMovieDetails);
          //TO DO: fix new variable into loop, looping over search history
          moviesSearched.innerHTML = "";
          for (i = 0; i < storeMovieDetails.length; i++) {
            var listOfMovies = document.createElement("li");
            listOfMovies.innerHTML = storeMovieDetails[i].movieTitle;
            if (
              castX.checked == true &&
              yearX.checked == true &&
              infoX.checked == true &&
              ratingX.checked == true
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieCast +
                storeMovieDetails[i].movieYear +
                storeMovieDetails[i].moviePlot +
                storeMovieDetails[i].movieRating;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == true &&
              yearX.checked == true &&
              infoX.checked == true &&
              ratingX.checked == false
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieCast +
                storeMovieDetails[i].movieYear +
                storeMovieDetails[i].moviePlot;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == true &&
              yearX.checked == true &&
              infoX.checked == false &&
              ratingX.checked == false
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieCast +
                storeMovieDetails[i].movieYear;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == true &&
              yearX.checked == false &&
              infoX.checked == false &&
              ratingX.checked == false
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieCast;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == true &&
              yearX.checked == true &&
              infoX.checked == false &&
              ratingX.checked == true
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieCast +
                storeMovieDetails[i].movieYear +
                storeMovieDetails[i].movieRating;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == true &&
              yearX.checked == false &&
              infoX.checked == false &&
              ratingX.checked == true
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieCast +
                storeMovieDetails[i].movieRating;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == false &&
              yearX.checked == true &&
              infoX.checked == false &&
              ratingX.checked == true
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieYear +
                storeMovieDetails[i].movieRating;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == false &&
              yearX.checked == false &&
              infoX.checked == false &&
              ratingX.checked == true
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieRating;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == true &&
              yearX.checked == false &&
              infoX.checked == false &&
              ratingX.checked == true
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieCast +
                storeMovieDetails[i].movieRating;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == false &&
              yearX.checked == true &&
              infoX.checked == false &&
              ratingX.checked == false
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieYear;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == true &&
              yearX.checked == true &&
              infoX.checked == false &&
              ratingX.checked == false
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieCast +
                storeMovieDetails[i].movieYear;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == false &&
              yearX.checked == true &&
              infoX.checked == true &&
              ratingX.checked == false
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieYear +
                storeMovieDetails[i].movieInfo;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == true &&
              yearX.checked == true &&
              infoX.checked == true &&
              ratingX.checked == false
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieCast +
                storeMovieDetails[i].movieYear +
                storeMovieDetails[i].moviePlot;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == false &&
              yearX.checked == false &&
              infoX.checked == true &&
              ratingX.checked == false
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].moviePlot;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == false &&
              yearX.checked == true &&
              infoX.checked == true &&
              ratingX.checked == false
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieYear +
                storeMovieDetails[i].moviePlot;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == false &&
              yearX.checked == true &&
              infoX.checked == true &&
              ratingX.checked == true
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieYear +
                storeMovieDetails[i].moviePlot +
                storeMovieDetails[i].movieRating;
              moviesSearched.appendChild(listOfMovies);
            } else if (
              castX.checked == true &&
              yearX.checked == false &&
              infoX.checked == true &&
              ratingX.checked == true
            ) {
              listOfMovies.innerHTML =
                storeMovieDetails[i].movieTitle +
                storeMovieDetails[i].movieCast +
                storeMovieDetails[i].moviePlot +
                storeMovieDetails[i].movieRating;
              moviesSearched.appendChild(listOfMovies);
            }
            //var textnode = document.createTextNode(storeMovieDetails[i]);
            //istOfMovies.appendChild(textnode);
          }
        }
        showMovies();
        return Promise.resolve();
        //console.log(savedSearch);
        //if(pastSearches.length >= 5) {
        //pastSearches.pop();
        //}
        //pastSearches.unshift(savedSearch);
        //localStorage["pastSearches"] = JSON.stringify(pastSearches);
        // showSearchHistory();
      });
    }
  });
}
//TO DO: Move gather search to event listener, function we did with Owen, redirect
movieInfoBtn.addEventListener("click", function () {
  gatherSearch();
  getMovieInfo();
});

movieTrailerBtn.addEventListener("click", function () {
  localStorage.setItem("userInput", movieInput.value);
  gatherSearch();
  getMovieInfo().then(function () {
    document.location.replace("./movieInfo.html");
  });
});
