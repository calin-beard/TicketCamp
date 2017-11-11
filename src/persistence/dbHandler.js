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
        this.schema = schema;
        this.fields = schema;
    }

    addField(fieldType, fieldValue) {
        this.fields[fieldType] = fieldValue;
        return this;
    }

    getTable() {
        return this.table;
    }

    getSchema() {
        return this.schema;
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

    //todo

    // MongoClient.connect(url, function(err, db) {
    //     if (err) throw err;
    //     db.collection(item.getTable()).insertOne(item.getFields(), function(err, result) {
    //         if (err) throw err;
    //         console.log("1 document inserted");
    //         db.close();
    //     });
    // });
};

/** READ equivalent
 * @param itemID The object to be retrieved
 * @param table The table where to retrieve from
 */
exports.get = function(itemID, table) {

    // todo

    // Database.find({ name: itemID }, function (err, item) {
    //     if (err) return console.error(err);
    //     return item;
    // });
};

/** UPDATE equivalent
 * @param itemID The object to be updated
 * @param field The field from item to be updated
 * @param newValue Value to be updated with
 * @param table The table where to update
 */
exports.update = function(itemID, field, newValue, table) {
    // todo
};

/** DELETE equivalent
 * @param itemID The object to be removed
 * @param table The table where to remove from
 */
exports.remove = function(itemID, table) {
    // todo
};

// module.exports = {
//     add: function () {
//         // whatever
//     },
//     get: function () {
//         // whatever
//     }
// };
