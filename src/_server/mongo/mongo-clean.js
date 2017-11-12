let MongoClient = require('mongodb').MongoClient;

const dbName = "TicketCamp";
const url = "mongodb://localhost/" + dbName;

function cleanMongo() {

    /* Creates the collection */
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log("Could not connect to Mongo");
            return false;
        } else {
            console.log("Connection successful to database: " + dbName);
        }

        db.collection("issues").drop(function(err, delOK) {
            if (err) {
                console.log("Could not drop collection 'issues'");
                return false;
            }
            if (delOK) {
                console.log("Collection 'issues' dropped");
            }
        });

        db.collection("projects").drop(function(err, delOK) {
            if (err) {
                console.log("Could not drop collection 'projects'");
                return false;
            }
            if (delOK) {
                console.log("Collection 'projects' dropped");
            }
        });

        db.close();
    });
}

cleanMongo();
