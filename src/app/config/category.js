var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = "mongodb://localhost:27017/music_store";


module.exports.getAll = function(req, res){
  mongo.connect(url, function(err, db){
    assert.equal(null, err);
    console.log("Successfully connected to db");

    var collections = db.collection("categories");

    collections.find({}).toArray(function(err,docs){
    assert.equal(null,err);
      res.send(docs);
    })

    db.close();
  });
};
