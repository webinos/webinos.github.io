// Node js downloader of md files
var https = require('https');
var fs = require('fs');
var Configuration = require("../scripts/configuration.js");

var downloadFile = function (url, filename) {
    https.get(url, function(response) {
        response.pipe(fs.createWriteStream(filename));
    });
};

var fetchItems = function(listOfItems) {
    for (var i = 0; i < listOfItems.length; i++) {
        var repoName = listOfItems[i].repositoryName;
        console.log("Fetching: ", repoName);
        downloadFile("https://raw.github.com/webinos/" + repoName + "/master/README.md", repoName + ".Readme.md.html");
        downloadFile("https://raw.github.com/wiki/webinos/" + repoName + "/Examples.md", repoName + ".Examples.md.html");
    }
};

fetchItems(Configuration.APIs);
fetchItems(Configuration.Core);
