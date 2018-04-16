var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};


function printUpperCase(data) {
  console.log(data.toUpperCase());
}

getHTML(requestOptions, printUpperCase);

