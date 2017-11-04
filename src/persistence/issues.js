'use strict';

import {add, get, update, remove} from 'dbHandler';

/**
 * @name Issues table
 * @field id (auto)
 * @field title (required)
 * @field type (required)
 * @field description (optional)
 * @field creationDate (auto)
 * @field lastUpdatedDate (auto)
 * @field state (auto)
 * @field creator (auto)
 * @field assignee (optional)
 * @field childOf (optional)
 * @field blockerOf (optional)
 * @field history (auto)
 */

const issuesTable = "issues";

const schema = {
    id: Number,
    title: String,
    type: String,
    description: String,
    creationDate: Date,
    lastUpdatedDate: Date,
    state: String,
    creator: String,
    assignee: String,
    childOf: Number,
    blockerOf: Number,
    history: Array
};

/* Usage example
    var item = new IssueItem("Create database", "feature")
        .add("description", "Create database APIs and implementation");
        .add("assignee", "A dude");
 */

export class IssueItem extends Item {

    constructor(title, type) {
        super(issuesTable, schema, title, type);
    }

    add(fieldType, fieldValue) {
        this.fields.push({fieldType, fieldValue});
        return this;
    }
}


/** CREATE equivalent
 * @param title The title of the item to be created
 * @param type The type of the item to be created
 * @param description The description of the item to be created
 * @param assignee The assignee of the item to be created
 * @param childOf Item is the child of this parameter
 * @param blockerOf Item is currently blocking this parameter
 */
export function createIssue(item) {

    if(item.title === 'undefined') throw "For creation, title is required but not assigned";

    if(item.type === 'undefined') throw "For creation, type is required but not assigned";

    // var fieldList = [];
    // fieldList.push(description);

    var item = new IssueItem();

    // b = b || 0; (e.g. 0 is default)

    // b = (typeof b !== 'undefined') ?  b : 1;

    // if(typeof myVariable === 'undefined') {
    //     myVariable = 'default';
    // }
}

/** UPDATE title
 * @param itemID The id of the item on which the field shall be updated
 * @param newValue New value
 */
function editTitle(itemID, newValue) {
    update(itemID, "title", newValue, issuesTable);
}

/** UPDATE type
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
function editType(itemID, newValue) {
    update(itemID, "type", newValue, issuesTable);
}

/** UPDATE description
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
function editDescription(itemID, newValue) {
    update(itemID, "description", newValue, issuesTable);
}

/** UPDATE assignee
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
function editAssignee(itemID, newValue) {
    update(itemID, "assignee", newValue, issuesTable);
}

/** UPDATE parent value
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
function editChildOf(itemID, newValue) {
    update(itemID, "childOf", newValue, issuesTable);
}

/** UPDATE the issue currently blocked by this
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
function editBlockerOf(itemID, newValue) {
    update(itemID, "blockerOf", newValue, issuesTable);
}

/** READ equivalent
 * @param itemID The id of the object to be retrieved
 */
export function getIssue(itemID) {
    return get(itemID, issuesTable);
}

/** DELETE equivalent
 * @param itemID The id of the object to be removed
 */
export function removeIssue(itemID) {
    remove(itemID, issuesTable);
}