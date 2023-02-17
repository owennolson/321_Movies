var movieInput = $('input[name="searchInput"]').val();
console.log(movieInput);
//var apiYouTube = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ movieInput.value + "&apiKey=AIzaSyDhMGoaM3JNvpeBffOSpxTvwHWi2PvlTDM";

// function getApi() {
//     fetch(apiYouTube, { method: "GET" })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
// });
// }
$(document).ready(function(){
        //videoSearch(movieInput)
        mockVideoSearch();
    })
 
function videoSearch(movieInput){
    movieInput = "avatar";
    $.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDhMGoaM3JNvpeBffOSpxTvwHWi2PvlTDM&type=video&part=snippet&maxResults=1"+ "&q=" + movieInput,(data) => {
        console.log(data)
        let video = `<iframe width="420" height="315" src="http://www.youtube.com/embed/${data[0].items[0].id.videoId}" frameborder="0" allowfullscreen></iframe>`;
            $("#videos").append(video)
        });
}
// function mockVideoSearch() {
//     var data = [{
//         "kind": "youtube#searchListResponse",
//         "etag": "A0hApOmckKKmmgn_wCwi4inm7K4",
//         "nextPageToken": "CAEQAA",
//         "regionCode": "US",
//         "pageInfo": {
//             "totalResults": 1000000,
//             "resultsPerPage": 1
//         },
//         "items": [
//             {
//                 "kind": "youtube#searchResult",
//                 "etag": "1kjs_D11yp0_pUwKOILempqD8wo",
//                 "id": {
//                     "kind": "youtube#video",
//                     "videoId": "Xe--hgPX5xw"
//                 },
//                 "snippet": {
//                     "publishedAt": "2023-02-14T16:56:42Z",
//                     "channelId": "UCgjxQJ6TlKqhHax8742ZMdA",
//                     "title": "Avatar: The Way of Water | Heartbeat",
//                     "description": "",
//                     "thumbnails": {
//                         "default": {
//                             "url": "https://i.ytimg.com/vi/Xe--hgPX5xw/default.jpg",
//                             "width": 120,
//                             "height": 90
//                         },
//                         "medium": {
//                             "url": "https://i.ytimg.com/vi/Xe--hgPX5xw/mqdefault.jpg",
//                             "width": 320,
//                             "height": 180
//                         },
//                         "high": {
//                             "url": "https://i.ytimg.com/vi/Xe--hgPX5xw/hqdefault.jpg",
//                             "width": 480,
//                             "height": 360
//                         }
//                     },
//                     "channelTitle": "Avatar",
//                     "liveBroadcastContent": "none",
//                     "publishTime": "2023-02-14T16:56:42Z"
//                 }
//             }
//         ]
//     }];
//     let video = `<iframe width="420" height="315" src="http://www.youtube.com/embed/${data[0].items[0].id.videoId}" frameborder="0" allowfullscreen></iframe>`;

//     $("#videos").append(video);
// }