var keys = require("./keys.js")

var tweet = require("twitter")
var spotify = require("spotify")
var movie = require("request")
var fs = require("fs")


spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});