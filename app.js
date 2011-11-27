
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , mongo = require('./mongo');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

routes.db = mongo.connect();
// Routes

app.get('/', routes.index);

app.get('/mongo/crud', routes.crud)
app.post('/mongo/insert', routes.insert)
app.post('/mongo/update', routes.update)
app.post('/mongo/delete', routes.delete)
app.get('/mongo/query', routes.query)


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
