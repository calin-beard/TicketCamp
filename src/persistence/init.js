let MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost/ticketcamp";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});