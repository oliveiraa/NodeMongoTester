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
          console.log("Inserting");
        });
      });
    };
  });

  res.send("{status: success}");
};

exports.update = function(req, res) {
  var obj = findOne(1);
  this.db.open(function(err, db) {
    if(!err) {
      db.collection('test', function(err, collection) {
        //collection.update({mykey:2}, {$push:{docs:{doc2:1}}}, {safe:true}, function(err, result) {});
      });
    };
  });
};

exports.delete = function(req, res) {
  this.db.open(function(err, db) {
    if(!err) {
      db.collection('test', function(err, collection) {
        var docs = [{mykey:1}, {mykey:2}, {mykey:3}];

        collection.insert(docs, {safe:true}, function(err, result) {
          collection.remove({mykey:1});

          collection.remove({mykey:2}, {safe:true}, function(err,result) {});

          collection.remove(function(err, result) {});
        });
      });
    };
  });
};

exports.query = function(req, res) {
  this.db.open(function(err, db) {
    if(!err) {
      db.collection('test', function(err, collection){
        var users = [];
        collection.insert(docs, {safe: true}, function(err, result) {
          collection.find().toArray(function(err,items) {
            users = items;
          });
        });
      });
    };
  });
  req.send(users);
};

function findOne(key){
  this.db.open(function(err, db) {
    if(!err) {
      db.collection('test', function(err, collection) {
        var result = collection.findOne({id:key}, function(err, items){
          console.log('Result : ' + result);
          console.log('The query returned : ' + items);
        });
      });
    };
  });
};
