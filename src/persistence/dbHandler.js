'use strict';

let MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost/ticketcamp";

// let connection = MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });


exports.Item = class {

    constructor(table, schema) {
        this.table = table;
        this.fields = schema;
    }

    addField(fieldType, fieldValue) {
        this.fields[fieldType] = fieldValue;
        return this;
    }

    getTable() {
        return this.table;
    }

    getFields() {
        return this.fields;
    }

    getValueOf(field) {
        return this.fields[field];
    }
};


/**
 * Database API containing CRUD operations and more
 * This should be used for interacting with the database
 */

const databaseName = ""; //todo set database name

/** CREATE equivalent
 * @param item The object to be added
 */
exports.add = function(item) {

    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log("Could not connect to Mongo");
            return false;
        }
        db.collection(item.getTable()).insertOne(item.getFields(), function(err, result) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
};

/** READ equivalent
 * @param fieldName The field name from the object to be retrieved
 * @param fieldValue The known field value of fieldName
 * @param table The table where to retrieve from
 */
exports.get = function(fieldName, fieldValue, table) {

    // todo

    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log("Could not connect to Mongo");
            return false;
        }

        const query = { fieldName: fieldValue };

        db.collection(table).findOne(query, function(err, result) {
            if (err) throw err;
            console.log("1 document found");
            db.close();
            return result;
        });
    });
};

/** UPDATE equivalent
 * @param itemID The object to be updated
 * @param field The field from item to be updated
 * @param newValue Value to be updated with
 * @param table The table where to update
 */
exports.update = function(itemID, field, newValue, table) {

    // todo
    return true;
};

/** DELETE equivalent
 * @param itemID The object to be removed
 * @param table The table where to remove from
 */
exports.remove = function(itemID, table) {

    // todo
    return true;
};
