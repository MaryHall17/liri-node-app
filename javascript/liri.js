require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var command = process.argv[2];

var value = process.argv[3];


//Testing
console.log(keys);
console.log(keys.spotify.id);

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

 } 

 function spotify() {

 }

 function movies() {

 }

 function iWantItThatWay() {

 }