$(document).ready(function () {
    var movieInput = localStorage.getItem("userInput");
    var homeBtn = document.getElementById("homePage");
    console.log(movieInput);
  
    videoSearch(movieInput);
  
    function videoSearch(searchTerm) {
      $.get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDhMGoaM3JNvpeBffOSpxTvwHWi2PvlTDM&type=video&part=snippet&maxResults=1" +
          "&q=" +
          encodeURI(searchTerm + " trailer"),
        (data) => {
          console.log(data);
          let video = `<iframe width="720" height="515" src="http://www.youtube.com/embed/${data.items[0].id.videoId}" frameborder="0" allowfullscreen></iframe>`;
          $("#videos").append(video);
        }
      );
    }
  
  
  
    function getMovieInfo() {
      var apiOMDB =
        "http://www.omdbapi.com/?t=" + movieInput.value + "&apikey=b1cd3692";
  
      fetch(apiOMDB).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            var searchInput = movieInput.value;
            if (searchInput == "") {
              return;
            }
            var posterList = document.createElement("img");
            var getPoster = data.Poster;
  
            posterList.src = getPoster;
            //moviesSearched.appendChild(posterList);
  
            pastSearches.push(getPoster.image);
  
            var movieYr = data.Year;
            var movieCst = data.Actors;
            var moviePlt = data.Plot;
            var movieRtg = data.imdbRating;
            //make call to get API movie data
            var savedSearch = {
              searchInput: searchInput,
              movieTitle: response.Title,
              movieYear: "Year: " + movieYr,
              movieCast: "Cast: " + movieCst,
              moviePlot: "Summary: " + moviePlt,
              movieRating: "imdb Rating: " + movieRtg,
              // iterate over to find IMDB rating rating: response.Ratings,
            };
  
            if (yearX.checked) {
              // this element is checked
              var yearList = document.createElement("li");
              var getYr = "Year: " + Number(data.Year);
              yearList.textContent = getYr;
  
              // moviesSearched.appendChild(yearList);
  
              pastSearches.push(getYr);
            }
            if (castX.checked) {
              var castList = document.createElement("li");
              var getCast = "Cast: " + data.Actors;
              castList.textContent = getCast;
  
              //moviesSearched.appendChild(castList);
  
              pastSearches.push(getCast);
            }
            if (infoX.checked) {
              var infoList = document.createElement("li");
              var getInfo = "Info: " + data.Plot;
              infoList.textContent = getInfo;
  
              // moviesSearched.appendChild(infoList);
  
              pastSearches.push(getInfo);
            }
            if (ratingX.checked) {
              var ratingList = document.createElement("li");
              var getRatings = "imdbRatings: " + data.imdbRating;
              ratingList.textContent = getRatings;
  
              // moviesSearched.appendChild(ratingList);
  
              pastSearches.push(getRatings);
            }
  
            console.log(pastSearches);
  
            var storedMovies = JSON.stringify(pastSearches);
  
            console.log(storedMovies);
  
            localStorage.setItem("Movie", storedMovies);
  
            var searchedMovies = localStorage.getItem("Movie");
            var storeMovieDetails = JSON.parse(searchedMovies);
  
            for (i = 0; i < storeMovieDetails.length; i++) {
              var listOfMovies = document.createElement("li");
              var textnode = document.createTextNode(storeMovieDetails[i]);
              listOfMovies.appendChild(textnode);
              moviesSearched.appendChild(listOfMovies);
            }
  
            console.log(savedSearch);
  
            if (pastSearches.length >= 5) {
              pastSearches.pop();
            }
            pastSearches.unshift(savedSearch);
  
            localStorage["pastSearches"] = JSON.stringify(pastSearches);
            // showSearchHistory();
          });
        }
      });
    }
  
  
    
    homeBtn.addEventListener('click', function(e){
      e.preventDefault();
      document.location.replace("./index.html");
    })
  });