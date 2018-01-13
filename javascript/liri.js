require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var command = process.argv[2];

var value = process.argv[3];
console.log(value);



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

 	var params = {screen_name: 'TotallyRaine'};
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
 	if (value) {
 		console.log("There was a value")
 		spotify.search({type: 'track', query: value}, function(error, data) {
 			if(!error) {
 				// console.log(JSON.stringify(data));
 				for (var i = 0; i < data.length; i++) {
 					var dataArtist = data[i].artists;
 					console.log(dataArtist);
 				}
 			}
 		});
 	} else {
 		console.log("No value was provided")
 		spotify.search({type: 'track', query: 'The Sign'}, function(error, data) {
 			if(!error) {
 				console.log(data.tracks.items[0]);
 				// console.log(data.album);
 				for (var i = 0; i < data.length; i++) {
 					var info = data.tracks.items.artists[i];
 					console.log("log " + info);
 				}
 			}
 		});
 	};

 };

 function movies() {

 }

 function iWantItThatWay() {

 }