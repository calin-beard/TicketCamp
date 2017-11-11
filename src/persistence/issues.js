'use strict';

const handler = require('./dbHandler');
const validation = require('../utility/validation');

const issuesTable = "issues";

/** Issues schema */
const schema = {
    id: Number,             /* id (auto) */
    title: String,          /* title (required) */
    type: String,           /* type (required) */
    description: String,    /* description (optional) */
    creationDate: Date,     /* creationDate (auto) */
    lastUpdatedDate: Date,  /* lastUpdatedDate (auto) */
    state: String,          /* state (auto) */
    creator: String,        /* creator (auto) */
    assignee: String,       /* assignee (optional) */
    childOf: Number,        /* childOf (optional) */
    blockerOf: Number,      /* blockerOf (optional) */
    history: Array          /* history (auto) */
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
        i = validation.requireOrSet(i, "");
    }

    handler.add(item);
};

/** UPDATE title
 * @param itemID The id of the item on which the field shall be updated
 * @param newValue New value
 */
exports.editTitle = function(itemID, newValue) {
    handler.update(itemID, "title", newValue, issuesTable);
};

/** UPDATE type
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editType = function(itemID, newValue) {
    handler.update(itemID, "type", newValue, issuesTable);
};

/** UPDATE description
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editDescription = function(itemID, newValue) {
    handler.update(itemID, "description", newValue, issuesTable);
};

/** UPDATE assignee
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editAssignee = function(itemID, newValue) {
    handler.update(itemID, "assignee", newValue, issuesTable);
};

/** UPDATE parent value
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editChildOf = function(itemID, newValue) {
    handler.update(itemID, "childOf", newValue, issuesTable);
};

/** UPDATE the issue currently blocked by this
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
exports.editBlockerOf = function(itemID, newValue) {
    handler.update(itemID, "blockerOf", newValue, issuesTable);
};

/** READ equivalent
 * @param itemID The id of the object to be retrieved
 */
exports.getIssue = function(itemID) {
    return handler.get(itemID, issuesTable);
};

/** DELETE equivalent
 * @param itemID The id of the object to be removed
 */
exports.removeIssue = function(itemID) {
    handler.remove(itemID, issuesTable);
};
