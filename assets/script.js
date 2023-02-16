const myKey = 'b1cd3692';

var movieInput = document.getElementById("searchInput");

var yearX = document.getElementById("yearXBox");
var castX = document.getElementById("castXBox");
var infoX = document.getElementById("infoXBox");
var ratingX = document.getElementById("ratingXBox");

var moviesSearched = document.getElementById("movieList");

var apiOMDB = "http://www.omdbapi.com/?t="+movieInput.value+"&apikey="+myKey;



