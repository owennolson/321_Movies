//const myKey = 'b1cd3692';

var movieInput = document.getElementById("searchInput");
var searchBTN = document.getElementById("SearchBtn");

var yearX = document.getElementById("yearXBox");
var castX = document.getElementById("castXBox");
var infoX = document.getElementById("infoXBox");
var ratingX = document.getElementById("ratingXBox");

var moviesSearched = document.getElementById("movieList");



//t=title, i=imdb id, type=movies,series,episode y=year plot=return short or full


function getMovieInfo(){
    var apiOMDB = "http://www.omdbapi.com/?t="+movieInput.value+"&apikey=b1cd3692";

    fetch(apiOMDB)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          
        });
      } 
}
)};


//t=title, i=imdb id, type=movies,series,episode y=year 
var apiOMDB = "http://www.omdbapi.com/?t="+movieInput.value+"&apikey=b1cd3692";
var apiYouTube = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ movieInput.val() + "&apiKey=AIzaSyDhMGoaM3JNvpeBffOSpxTvwHWi2PvlTDM";

fetch(apiYouTube, { method: "GET" })
.then((response) => response.json())
.then((data) => {
  console.log(data);
});


