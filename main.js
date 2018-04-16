
  var http = require('https');

function getAndPrintHTML(callback) {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  http.get(requestOptions, function(response) {
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

function getAndPrintHTMLChunks() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  http.get(requestOptions, function(response) {
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

// getAndPrintHTML(printChunks);
// getAndPrintHTML();