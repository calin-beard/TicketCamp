let MongoClient = require('mongodb').MongoClient;

const dbName = "TicketCamp";
const url = "mongodb://localhost/" + dbName;

function initMongo() {

    /* Creates the collection */
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log("Could not connect to Mongo");
            return false;
        } else {
            console.log("Connection successful to database: " + dbName);
        }

        db.createCollection("issues", function(err, res) {
            if (err) {
                console.log("Could not create collection 'issues'");
                return false;
            } else {
                console.log("Collection 'issues' created!");
            }
        });

        db.createCollection("projects", function(err, res) {
            if (err) {
                console.log("Could not create collection 'projects'");
                return false;
            } else {
                console.log("Collection 'projects' created!");
            }
        });

        db.close();
    });
}

initMongo();
