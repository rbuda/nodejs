const https = require('https');
var username = 'ryannebuda';

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

var request = https.get('https://teamtreehouse.com/' + username + '.json', (response) => {
  var body = "";
  // console.log(response.statusCode);
  // console.log(response.headers);

  response.on('data', (d) => {
    body += d;
    // process.stdout.write(d);
  });
  response.on('end', function(){
    var profile = JSON.parse(body);
    // console.dir(profile);
    printMessage(username, profile.badges.length, profile.points.JavaScript)
  })
});
// request.end();

request.on('error', (e) => {
  console.error(e);
});
