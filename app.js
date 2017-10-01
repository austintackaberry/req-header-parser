var http = require("http");
var express = require("express");
var app = express();
app.enable('trust proxy');

app.use('/', express.static('public'));

app.get('/whoami', function(req, res) {
  var whoami = {
    "ipaddress": req.ip,
    "language": req.headers['accept-language'].split(',')[0],
    "software": req.headers['user-agent'].split(/[\(\)]/)[1]
  }
  res.json(whoami);
});
app.listen(8000);
console.log('Server running on Port 8000...')
