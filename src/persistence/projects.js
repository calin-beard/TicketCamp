'use strict';

const handler = require('./dbHandler');
const validation = require('../utility/validation');

const projectsTable = "projects";

/** Projects schema */
const schema = {
    id: null,               /* id: Number (auto) */
    title: null,            /* title: String (required) */
    owner: null,            /* owner: String (required) */
    description: null,      /* description: String (optional) */
    company: null,          /* company: String (optional) */
    creationDate: null,     /* creationDate: Date (auto) */
    lastUpdatedDate: null,  /* lastUpdatedDate: Date (auto) */
    members: null,          /* members: Array (optional) */
    history: null           /* history: Array (auto) */
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
        item.getFields()[i] = validation.requireOrSet(item.getFields()[i], "");
    }

    return handler.add(item);
};

/** UPDATE title
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editTitle = function(itemID, newValue) {

    validation.requireOrThrow(itemID, 'editTitle() itemID');
    validation.requireOrThrow(newValue, 'editTitle() newValue');

    return handler.update("title", itemID, newValue, projectsTable);
};

/** UPDATE owner
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editOwner = function(itemID, newValue) {

    validation.requireOrThrow(itemID, 'editOwner() itemID');
    validation.requireOrThrow(newValue, 'editOwner() newValue');

    return handler.update("owner", itemID, newValue, projectsTable);
};

/** UPDATE description
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editDescription = function(itemID, newValue) {

    validation.requireOrThrow(itemID, 'editDescription() itemID');
    validation.requireOrThrow(newValue, 'editDescription() newValue');

    return handler.update("description", itemID, newValue, projectsTable);
};

/** UPDATE company
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editCompany = function(itemID, newValue) {

    validation.requireOrThrow(itemID, 'editCompany() itemID');
    validation.requireOrThrow(newValue, 'editCompany() newValue');

    return handler.update("company", itemID, newValue, projectsTable);
};

/** UPDATE members
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editMembers = function(itemID, newValue) {

    validation.requireOrThrow(itemID, 'editMembers() itemID');
    validation.requireOrThrow(newValue, 'editMembers() newValue');

    return handler.update("members", itemID, newValue, projectsTable);
};

/** READ equivalent
 * @param fieldName The field name from the object to be retrieved
 * @param fieldValue The known field value of fieldName
 */
exports.getProject = function(fieldName, fieldValue) {

    validation.requireOrThrow(fieldName, 'getProject() fieldName');
    validation.requireOrThrow(fieldValue, 'getProject() fieldValue');

    return handler.get(fieldName, fieldValue, projectsTable);
};

/** DELETE equivalent
 * @param itemID The id of the object to be removed
 */
exports.removeProject = function(itemID) {

    validation.requireOrThrow(itemID, 'removeProject() itemID');

    return handler.remove(itemID, projectsTable);
};