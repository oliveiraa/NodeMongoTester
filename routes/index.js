var db = {};
exports.db = db;

/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index', { title: 'Express' });
};

exports.crud = function(req, res) {
  res.render('crud', {title: 'Crud View'});
};

exports.insert = function(req, res) {
  this.db.open(function(err,db){
    if(!err) {
      db.collection('Users', function(err, collection) {
        var user = req.body.user;
        console.log("Inserting " + user);
        collection.insert(user, {safe: true}, function(err, result) {
          var retorno = {};
          retorno.status = 'Sucesso';
          retorno.result = result;
          res.send(retorno);
        });
      });
    };
  });
};

exports.update = function(req, res) {
  var obj = findOne(req.body.user._id);
  this.db.open(function(err, db) {
    if(!err) {
      db.collection('Users', function(err, collection) {
        collection.update({_id: req.body.user._id},req.body.user,{safe:true},function(err, result){
          res.send({result: result, err: err});
        });
      });
    };
  });
};

exports.delete = function(req, res) {
  this.db.open(function(err, db) {
    if(!err) {
      db.collection('Users', function(err, collection) {
//        collection.remove({mykey:2}, {safe:true}, function(err,result) {});

        collection.remove(function(err, result) {
          res.send({status: 'removed', test: 'testando', result: result, error: err});
        });
      });
    };
  });
};

exports.query = function(req, res) {
  this.db.open(function(err, db) {
    if(!err) {
      db.collection('Users', function(err, collection) {
        collection.find().toArray(function(err,items) {
          res.send(items);
        });
      });
    };
  });
};

function findOne(key){
  this.db.open(function(err, db) {
    if(!err) {
      db.collection('Users', function(err, collection) {
        var result = collection.findOne({_id:key}, function(err, items){
          console.log('Result : ' + result);
          console.log('The query returned : ' + items);
        });
      });
    };
  });
};
