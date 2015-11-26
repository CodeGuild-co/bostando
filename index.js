var express = require('express');
var marked = require('marked');
var fs = require('fs');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
	wndwerr();
});

app.get('/posts/:post/', function(request, response) {
    var path = __dirname + "/views/posts/" + request.params.post + ".md";
    var include = fs.readFileSync (path, 'utf8');
    var html = marked (include);
    response.render('pages/post', {'content': html});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function wndwerr() {

 console.log("You have absolutely completely failed at everything");
}
