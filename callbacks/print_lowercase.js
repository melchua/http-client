var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};


function printLowerCase(data) {
  console.log(data.toLowerCase());
}

getHTML(requestOptions, printLowerCase);

