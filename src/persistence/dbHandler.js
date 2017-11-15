'use strict';

/**
 * Database API containing CRUD operations and more
 * This should be used for interacting with the database
 */

let MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost/ticketcamp";

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


/** Function wrapper that executes database queries within a transaction
 * @param action Action to be performed after connection (add/get/update/remove)
 */
function runWithinTransaction(action) {

    MongoClient.connect(url)
        .then(function (db) {
            console.log("Connection to Mongo was successful");
            action(db);
        })
        .catch(function (err) {
            console.log("Could not perform Mongo action: " + err);
            return false;
        })
}

/** CREATE equivalent
 * @param item The object to be added
 */
exports.add = function(item) {

    runWithinTransaction( (db) => {
        db.collection(item.getTable()).insertOne(item.getFields(), function(err, result) {
            if (err) throw err;
            console.log("Successfully inserted " + result.insertedCount + " items");
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

    runWithinTransaction( (db) => {
        const query = {};
        query[fieldName] = fieldValue;

        db.collection(table).find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            return result;
        });
    });
};

/** UPDATE equivalent
 * @param fieldName The field name from the object to be updated
 * @param fieldValue The known field value of fieldName
 * @param newValue Value to be updated with
 * @param table The table where to update
 */
exports.update = function(fieldName, fieldValue, newValue, table) {

    runWithinTransaction( (db) => {
        const getQuery = {};
        const setQuery = {};
        const innerSetQuery = {};

        getQuery[fieldName] = fieldValue;
        innerSetQuery[fieldName] = newValue;
        setQuery['$set'] = innerSetQuery;

        db.collection(table).updateOne(getQuery, setQuery, function(err, result) {
            if (err) throw err;
            console.log("Successfully updated item");
            db.close();
            return result;
        });
    });
};

/** DELETE equivalent
 * @param fieldName The field name from the object to be removed
 * @param fieldValue The known field value of fieldName
 * @param table The table where to remove from
 */
exports.remove = function(fieldName, fieldValue, table) {

    runWithinTransaction( (db) => {
        const query = {};
        query[fieldName] = fieldValue;

        db.collection(table).deleteOne(query, function(err, result) {
            if (err) throw err;
            console.log("Successfully removed item");
            db.close();
        });
    });
};
