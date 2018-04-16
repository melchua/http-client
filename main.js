
  var http = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

function getAndPrintHTML(options) {
  http.get(options, function(response) {
    var allChunks = '';
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      console.log('Chunk: '+ chunk + '\n');
    });
    response.on('end', function() {
      console.log('done printing');
    });
  });

}

function getAndPrintHTMLChunks(options, callback) {
  http.get(options, function(response) {
    var allChunks = '';
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      console.log('Chunk: '+ chunk + '\n');
      allChunks += chunk;
    });
    response.on('end', function() {
      callback(allChunks);
    });
  });

}

function printChunks(data) {
  console.log(data);
}

getAndPrintHTMLChunks(requestOptions, printChunks);
// getAndPrintHTML();