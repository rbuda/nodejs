const https = require('https');
var username = 'ryannebuda';

var request = https.get('https://teamtreehouse.com/' + username + '.json', (response) => {
  var body = "";
  // console.log(response.statusCode);
  // console.log(response.headers);

  response.on('data', (d) => {
    body += d;
    // process.stdout.write(d);
  });
  response.on('end', function(){
    console.log(body);
  })
});
// request.end();

request.on('error', (e) => {
  console.error(e);
});
