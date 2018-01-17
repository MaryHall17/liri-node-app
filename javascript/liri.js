require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var command = process.argv[2];

var value = process.argv;

var song = "";

var movie = "";


for (var i = 3; i < value.length; i++) {

	if (i > 3 && i < value.length) {

		song = song + "+" + value[i];
		movie = movie + "+" + value[i];

	} 

	else {

		song += value[i];
		movie += value[i];

	}
}



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
 		
 		spotify.search({type: 'track', query: song}, function(error, data) {
 			if(!error) {
 				var trackData = data.tracks.items[0];
 				
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
 		
 		spotify.search({type: 'track', query: 'The Sign'}, function(error, data) {
 			if(!error) {
 				var trackData = data.tracks.items[0];
 
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

 		request(queryUrl, function(error, response, body) {

 			if (!error && response.statusCode === 200) {
 				var title = JSON.parse(body).Title;
 				var year = JSON.parse(body).Year;
 				var imdbRating = JSON.parse(body).imdbRating;
 				var rottenTomatoesRating = JSON.parse(body).Ratings[1].Value;
 				var countryOfProduction = JSON.parse(body).Country;
 				var language = JSON.parse(body).Language;
 				var plot = JSON.parse(body).Plot;
 				var actors = JSON.parse(body).Actors;
 				
 				var movieObj = {
 					title,
 					year,
 					imdbRating,
 					rottenTomatoesRating,
 					countryOfProduction,
 					language,
 					plot,
 					actors
 				};

 				console.log(movieObj);
 				
 			}
 		})
 	} 
 	else {
 		var queryUrl = "http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy";
 		console.log(queryUrl); 

 		request(queryUrl, function(error, response, body) {

 			if (!error && response.statusCode === 200) {
 				var title = JSON.parse(body).Title;
 				var year = JSON.parse(body).Year;
 				var imdbRating = JSON.parse(body).imdbRating;
 				var rottenTomatoesRating = JSON.parse(body).Ratings[1].Value;
 				var countryOfProduction = JSON.parse(body).Country;
 				var language = JSON.parse(body).Language;
 				var plot = JSON.parse(body).Plot;
 				var actors = JSON.parse(body).Actors;
 				
 				var movieObj = {
 					title,
 					year,
 					imdbRating,
 					rottenTomatoesRating,
 					countryOfProduction,
 					language,
 					plot,
 					actors
 				};

 				console.log(movieObj);
 				
 			}
 		})

	}
 } 

 function iWantItThatWay() {
 	var fs = require("fs"); 

 	fs.readFile("../random.txt", "utf8", function (error, data) {
 		if (error) {
 			return console.log(error);
 		}

 		console.log(data);

 		var dataArr = data.split(",");

 		console.log(dataArr.length);
 		var command = dataArr[0];
 		song = dataArr[1];
 		console.log(command);
 		console.log(song);
 		spotify();


 	});
 }