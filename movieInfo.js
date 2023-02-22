var movieInput = $("searchInput").val();
console.log(movieInput);

$(document).ready(function(){
        videoSearch(movieInput)
        //mockVideoSearch();
    })
 
function videoSearch(movieInput){
    $.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDhMGoaM3JNvpeBffOSpxTvwHWi2PvlTDM&type=video&part=snippet&maxResults=1"+ "&q=" + movieInput,(data) => {
        console.log(data)
        let video = `<iframe width="720" height="515" src="http://www.youtube.com/embed/${data.items[0].id.videoId}" frameborder="0" allowfullscreen></iframe>`;
            $("#videos").append(video)
        });
        clear();
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