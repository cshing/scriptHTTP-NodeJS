var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

var output = "";


function getHTML (options, callback) {

    /* Add your code here */
    https.get(options, function (response) {
        response.setEncoding('utf8');
    
        response.on('data', function (data) {
                output += data;
            });
        
        response.on('end', function() {
            (callback(output))
        });
      });
     
}
  
function printHTML (html) {
    console.log(html);
};
  
console.log(getHTML(requestOptions, printHTML))
