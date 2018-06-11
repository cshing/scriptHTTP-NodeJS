var https = require('https');

var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step3.html'
    };

var output = ""


function getAndPrintHTML (options) {

  /* Add your code here */

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
            output += data;
        });
    
    response.on('end', function() {
        console.log(output);
    });
  });
}

getAndPrintHTML(requestOptions)