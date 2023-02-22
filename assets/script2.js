var movieInput = document.getElementById("searchInput");
var searchBTN = document.getElementById("SearchBtn");

var yearX = document.getElementById("yearXBox");
var castX = document.getElementById("castXBox");
var infoX = document.getElementById("infoXBox");
var ratingX = document.getElementById("ratingXBox");

var moviesSearched = document.getElementById("pastSearches");

var pastSearches = [];



    //function showSearchHistory() {
       // var moviesSearched = $("#pastSearches");
      //  moviesSearched.empty();
       // if(pastSearches.length) {
       // for(var i = 0; i < pastSearches.length; i++){
          //  moviesSearched.append("<li>" + pastSearches[i].movieInput + "</li>");
       // }}
    //}
    
    function getMovieInfo() {
        var apiOMDB = "http://www.omdbapi.com/?t="+movieInput.value+"&apikey=b1cd3692";

        fetch(apiOMDB)
    .then(function (response) {
      if (response.ok){

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
        movieRating: "imdb Rating: " + movieRtg
        // iterate over to find IMDB rating rating: response.Ratings,
        
       };
       

       if (yearX.checked) {
        // this element is checked
      var yearList = document.createElement("li");
        var getYr = "Cast: " + Number(data.Year);
       yearList.textContent = getYr;
        
       // moviesSearched.appendChild(yearList);
        
        pastSearches.push(getYr);

    }
      if(castX.checked){
       var castList = document.createElement("li");
        var getCast = "Cast: " + data.Actors;
       castList.textContent = getCast;

        //moviesSearched.appendChild(castList);
        
        pastSearches.push(getCast);

      }
      if(infoX.checked){
       var infoList = document.createElement("li");
        var getInfo = "Info: " + data.Plot;
       infoList.textContent = getInfo;

       // moviesSearched.appendChild(infoList);
       
        pastSearches.push(getInfo);

      }
      if(ratingX.checked){
       var ratingList = document.createElement("li");
        var getRatings = "imdbRatings: " + data.imdbRating;
        ratingList.textContent = getRatings;

       // moviesSearched.appendChild(ratingList);
        
        pastSearches.push(getRatings);
      }

      console.log(pastSearches);
      
      for (i = 0; i < pastSearches.length; i++){
    
      var node = document.createElement("li");
      var textnode = document.createTextNode(pastSearches[i]);
      node.appendChild(textnode);
      moviesSearched.appendChild(node);
    
}


       console.log(savedSearch);

        if(pastSearches.length >= 5) { 
            pastSearches.pop();
        }
        pastSearches.unshift(savedSearch);
        
        localStorage["pastSearches"] = JSON.stringify(pastSearches);
       // showSearchHistory();
    });
    } 
    }
)};
    












