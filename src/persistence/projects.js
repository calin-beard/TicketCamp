'use strict';

const handler = require('./dbHandler');
const validation = require('../utility/validation');

const projectsTable = "projects";

/** Projects schema */
const schema = {
    id: Number,             /* id (auto) */
    title: String,          /* title (required) */
    owner: String,          /* owner (required) */
    description: String,    /* description (optional) */
    company: String,        /* company (optional) */
    creationDate: Date,     /* creationDate (auto) */
    lastUpdatedDate: Date,  /* lastUpdatedDate (auto) */
    members: Array,         /* members (optional) */
    history: Array          /* history (auto) */
};

/* Usage example
    var item = new ProjectItem("TicketCamp", "Jason")
        .add("description", "TicketCamp project");
        .add("members", "Jason, Jessica");
    createProject(item);
 */

exports.ProjectItem = class extends handler.Item {

    constructor(title, owner) {
        super(projectsTable, schema)
            .add("title", title)
            .add("owner", owner);
    }
};


/** CREATE equivalent
 * @param item The ProjectItem to be created
 */
exports.createProject = function(item) {

    validation.requireOrThrow(item, 'createProject() item');
    validation.requireOrThrow(item.getValueOf('title'), 'createProject() title');
    validation.requireOrThrow(item.getValueOf('owner'), 'createProject() owner');

    for(let i in item.getFields()) {
        i = validation.requireOrSet(i, "");
    }

    handler.add(item);
};

/** UPDATE title
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editTitle = function(itemID, newValue) {
    handler.update(itemID, "title", newValue, projectsTable);
};

/** UPDATE owner
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editOwner = function(itemID, newValue) {
    handler.update(itemID, "owner", newValue, projectsTable);
};

/** UPDATE description
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editDescription = function(itemID, newValue) {
    handler.update(itemID, "description", newValue, projectsTable);
};

/** UPDATE company
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editCompany = function(itemID, newValue) {
    handler.update(itemID, "company", newValue, projectsTable);
};

/** UPDATE members
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editMembers = function(itemID, newValue) {
    handler.update(itemID, "members", newValue, projectsTable);
};

/** READ equivalent
 * @param itemID The id of the object to be retrieved
 */
exports.getProject = function(itemID) {
    handler.get(itemID, projectsTable);
};

/** DELETE equivalent
 * @param itemID The id of the object to be removed
 */
exports.removeProject = function(itemID) {
    handler.remove(itemID, projectsTable);
};