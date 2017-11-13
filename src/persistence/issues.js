'use strict';

const handler = require('./dbHandler');
const validation = require('../utility/validation');

const issuesTable = "issues";

/** Issues schema */
const schema = {
    id: null,               /* id: Number (auto) */
    title: null,            /* title: String (required) */
    type: null,             /* type: String (required) */
    description: null,      /* description: String (optional) */
    creationDate: null,     /* creationDate: Date (auto) */
    lastUpdatedDate: null,  /* lastUpdatedDate: Date (auto) */
    state: null,            /* state: String (auto) */
    creator: null,          /* creator: String (auto) */
    assignee: null,         /* assignee: String (optional) */
    childOf: null,          /* childOf: Number (optional) */
    blockerOf: null,        /* blockerOf: Number (optional) */
    history: null           /* history: Array (auto) */
};

/* Usage example
    var item = new IssueItem("Create database", "feature")
        .addField("description", "Create database APIs and implementation");
        .addField("assignee", "Jason");
    createIssue(item);
 */

exports.IssueItem = class extends handler.Item {

    constructor(title, type) {
        super(issuesTable, schema)
            .addField("title", title)
            .addField("type", type);
    }
};


/** CREATE equivalent
 * @param item The IssueItem to be created
 */
exports.createIssue = function(item) {

    validation.requireOrThrow(item, 'createIssue() item');
    validation.requireOrThrow(item.getValueOf('title'), 'createIssue() title');
    validation.requireOrThrow(item.getValueOf('type'), 'createIssue() type');

    for(let i in item.getFields()) {
        item.getFields()[i] = validation.requireOrSet(item.getFields()[i], "");
    }

    return handler.add(item);
};

/** UPDATE title
 * @param itemID The id of the item on which the field shall be updated
 * @param newValue New value
 */
exports.editTitle = function(itemID, newValue) {

    validation.requireOrThrow(itemID, 'editTitle() itemID');
    validation.requireOrThrow(newValue, 'editTitle() newValue');

    return handler.update(itemID, "title", newValue, issuesTable);
};

/** UPDATE type
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editType = function(itemID, newValue) {

    validation.requireOrThrow(itemID, 'editType() itemID');
    validation.requireOrThrow(newValue, 'editType() newValue');

    return handler.update(itemID, "type", newValue, issuesTable);
};

/** UPDATE description
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editDescription = function(itemID, newValue) {

    validation.requireOrThrow(itemID, 'editDescription() itemID');
    validation.requireOrThrow(newValue, 'editDescription() newValue');

    return handler.update(itemID, "description", newValue, issuesTable);
};

/** UPDATE assignee
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editAssignee = function(itemID, newValue) {

    validation.requireOrThrow(itemID, 'editAssignee() itemID');
    validation.requireOrThrow(newValue, 'editAssignee() newValue');

    return handler.update(itemID, "assignee", newValue, issuesTable);
};

/** UPDATE parent value
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editChildOf = function(itemID, newValue) {

    validation.requireOrThrow(itemID, 'editChildOf() itemID');
    validation.requireOrThrow(newValue, 'editChildOf() newValue');

    return handler.update(itemID, "childOf", newValue, issuesTable);
};

/** UPDATE the issue currently blocked by this
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editBlockerOf = function(itemID, newValue) {

    validation.requireOrThrow(itemID, 'editBlockerOf() itemID');
    validation.requireOrThrow(newValue, 'editBlockerOf() newValue');

    return handler.update(itemID, "blockerOf", newValue, issuesTable);
};

/** READ equivalent
 * @param fieldName The field name from the object to be retrieved
 * @param fieldValue The known field value of fieldName
 */
exports.getIssue = function(fieldName, fieldValue) {

    validation.requireOrThrow(fieldName, 'getIssue() fieldName');
    validation.requireOrThrow(fieldValue, 'getIssue() fieldValue');

    return handler.get(fieldName, fieldValue, issuesTable);
};

/** DELETE equivalent
 * @param itemID The id of the object to be removed
 */
exports.removeIssue = function(itemID) {

    validation.requireOrThrow(itemID, 'removeIssue() itemID');

    return handler.remove(itemID, issuesTable);
};
