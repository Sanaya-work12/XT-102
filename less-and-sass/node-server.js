var express = require('express'),
app = express();

app.use(express.static(__dirname))
//app.use('/',express.static(__dirname+'/js'));

app.listen(5000, function() {
console.log('listening on *:5000');
});