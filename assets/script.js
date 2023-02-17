//const myKey = 'b1cd3692';

var movieInput = document.getElementById("searchInput");
var searchBTN = document.getElementById("SearchBtn");

var yearX = document.getElementById("yearXBox");
var castX = document.getElementById("castXBox");
var infoX = document.getElementById("infoXBox");
var ratingX = document.getElementById("ratingXBox");

var moviesSearched = document.getElementById("movieList");

console.log(moviesSearched);

//t=title, i=imdb id, type=movies,series,episode y=year plot=return short or full


function getMovieInfo(){
    var apiOMDB = "http://www.omdbapi.com/?t="+movieInput.value+"&apikey=b1cd3692";

    fetch(apiOMDB)
    .then(function (response) {
      if (response.ok) {
        
        response.json().then(function (data) {
          console.log(data);
          
          var posterList = document.createElement("img");
          var getPoster = data.Poster;

          posterList.src = getPoster;
          moviesSearched.appendChild(posterList);


          if (yearX.checked) {
            // this element is checked
            var yearList = document.createElement("li");
            var getYr = "Cast: " + Number(data.Year);
            yearList.textContent = getYr;
            
            moviesSearched.appendChild(yearList);
        }
          if(castX.checked){
            var castList = document.createElement("li");
            var getCast = "Cast: " + data.Actors;
            castList.textContent = getCast;

            moviesSearched.appendChild(castList);
          }
          if(infoX.checked){
            var infoList = document.createElement("li");
            var getInfo = "Info: " + data.Plot;
            infoList.textContent = getInfo;

            moviesSearched.appendChild(infoList);
          }
          if(ratingX.checked){
            var ratingList = document.createElement("li");
            var getRatings = "imdbRatings: " + data.imdbRating;
            ratingList.textContent = getRatings;
            moviesSearched.appendChild(ratingList);
          }

          
        });
      } 
}
)};


movieInput = "avatar 2";
//t=title, i=imdb id, type=movies,series,episode y=year 
var apiOMDB = "http://www.omdbapi.com/?t="+movieInput.value+"&apikey=b1cd3692";


//t=title, i=imdb id, type=movies,series,episode y=year 
var apiOMDB = "http://www.omdbapi.com/?t="+movieInput.value+"&apikey=b1cd3692";
var apiYouTube = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ movieInput.val() + "&apiKey=AIzaSyDhMGoaM3JNvpeBffOSpxTvwHWi2PvlTDM";

fetch(apiYouTube, { method: "GET" })
.then((response) => response.json())
.then((data) => {
  console.log(data);
});


