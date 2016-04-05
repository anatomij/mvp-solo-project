var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client/'));

app.get('/', function(request, response) {
  response.render('../client/blackjack.html')
});

app.listen(process.env.PORT || 3000);
