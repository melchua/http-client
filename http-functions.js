// http-functions.js

var http = require('https');

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step4.html'
// };


function getHTML (options, callback) {
  http.get(options, function(response) {
    var allChunks = '';
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      // console.log('Chunk: '+ chunk + '\n');
      allChunks += chunk + '\n';
    });
    response.on('end', function() {
      callback(allChunks);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

module.exports = getHTML;

// getHTML(requestOptions, printHTML);