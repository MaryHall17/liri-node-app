require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var command = process.argv[2];

var value = process.argv;

var song = "";

var movie = "";

// console.log(process.argv[3]);
// return


for (var i = 3; i < value.length; i++) {

	if (i > 3 && i < value.length) {

		song = song + "+" + value[i];
		movie = movie + "+" + value[i];

	} 

	else {

		song += value[i];
		movie = movie += value[i];

	}
}




//Testing
// console.log(keys);
// console.log(keys.spotify.id);
// console.log(client);

//Switch statements

switch (command) {
	case "my-tweets":
	tweets();
	break;

	case "spotify-this-song":
	spotify();
	break;

	case "movie-this":
	movies();
	break;

	case "do-what-it-says":
	iWantItThatWay();
	break;

}
 
 function tweets() { 

 	var Twitter = require('twitter');

	var client = new Twitter ({
	
	consumer_key: keys.twitter.consumer_key,
	consumer_secret: keys.twitter.consumer_secret,
	access_token_key: keys.twitter.access_token_key,
	access_token_secret: keys.twitter.access_token_secret
	
	});

 	var params = {screen_name: 'TotallyRaine', limit: 20};
 	client.get('statuses/user_timeline', params, function(error, tweets, response) {
 		if (!error) {
 			// console.log("Tweets " + JSON.stringify(tweets));
 			for (var i = 0; i < tweets.length; i++) {
 				var tweetText = tweets[i].text;
 				console.log(tweetText);
 			
 			}
 			// console.log(response);

 		}
 	});

 }; 

 function spotify() {

 	var Spotify = require('node-spotify-api');

 	var spotify = new Spotify ({
 		id: keys.spotify.id,
 		secret: keys.spotify.secret
 	});
 	console.log("test");
 	if (song) {
 		console.log("There was a value")
 		spotify.search({type: 'track', query: song}, function(error, data) {
 			if(!error) {
 				var trackData = data.tracks.items[0];
 				// console.log(trackData);
 				// console.log(JSON.stringify(data));
 				for (var i = 0; i < 20; i++) {
 					var artist = trackData.artists[i].name;
 					var track = trackData.name;
 					var album = trackData.album.name;
 					var previewLink = trackData. external_urls.spotify;
 					var infoObj = {
 						artist,
 						track,
 						album,
 						previewLink
 					};
 					console.log(infoObj);
 					
 				}
 			}
 		});
 	} else {
 		// console.log("No value was provided")
 		spotify.search({type: 'track', query: 'The Sign'}, function(error, data) {
 			if(!error) {
 				var trackData = data.tracks.items[0];
 				// console.log(trackData);
 				// for (var i = 0; i < 20; i++) {
 				// 	console.log("something");
 				// }
 				// console.log(JSON.stringify(data));
 				// console.log(data.tracks.items.length);
 				// console.log(trackData);
 				// console.log(trackData.artists[0].name);
 				// console.log(trackData.artists[1].name);
 				// console.log(data.album);
 				for (var i = 0; i < 20; i++) {
 					var artist = trackData.artists[i].name;
 					var track = trackData.name;
 					var album = trackData.album.name;
 					var previewLink = trackData. external_urls.spotify;
 					var infoObj = {
 						artist,
 						track,
 						album,
 						previewLink
 					};
 					console.log(infoObj);
 					console.log("var received " + trackData);
 					// console.log("log " + artist);
 					// console.log(track);
 					// console.log(album);
 					// console.log(previewLink);
 					// console.log("something happened");
 				}
 			}
 		});
 	};

 };

 function movies() { 
 	var request = require("request");
 	if (movie) {
 		var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
 		console.log(queryUrl);
 	} 
 	else {
 		var queryUrl = "http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy";
 		console.log(queryUrl);
 	}
 	



 }

 function iWantItThatWay() {

 }