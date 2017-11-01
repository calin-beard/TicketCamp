'use strict';


let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ticketcamp");

let ticketSchema = new mongoose.Schema({
    name: String,
    owner: String,
    issueNumber: Number
});

let Database = mongoose.model("Database", ticketSchema);

// Database.create();

const project = new Database({
    name: "myProject",
    owner: "me",
    issueNumber: 20
});

project.save(function(err, project) {
    if(err) {
        console.log("Failed to save project " + project + "... error: " + err);
    }
    else {
        console.log("Successfully saved project " + project);
    }
});

/**
 * Database API containing CRUD operations and more
 * This should be used for interacting with the database
 */

const databaseName = ""; //todo set database name

/** CREATE equivalent
 * @param item The object to be added
 * @param table The table where to add to
 */
export function add(item, table) {
    // todo
}

/** READ equivalent
 * @param item The object to be retrieved
 * @param table The table where to retrieve from
 */
export function get(item, table) {
    // todo
}

/** UPDATE equivalent
 * @param item The object to be updated
 * @param table The table where to update
 */
export function update(item, table) {
    // todo
}

/** DELETE equivalent
 * @param item The object to be removed
 * @param table The table where to remove from
 */
export function remove(item, table) {
    // todo
}

export { add, get, update, remove };