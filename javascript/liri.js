require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var command = process.argv[2];

var value = process.argv[3];


//Testing
console.log(keys);
console.log(keys.spotify.id);
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

 }

 function movies() {

 }

 function iWantItThatWay() {

 }