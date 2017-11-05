'use strict';

import {add, get, update, remove, Item} from 'dbHandler';

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
        .add("assignee", "Jason");
    createIssue(item);
 */

export class IssueItem extends Item {

    constructor(title, type) {
        super(issuesTable, schema)
            .add("title", title)
            .add("type", type);
    }
}


/** CREATE equivalent
 * @param item The IssueItem to be created
 */
export function createIssue(item) {

    requireOrThrow(item, 'createIssue() item');
    requireOrThrow(item.getValueOf('title'), 'createIssue() title');
    requireOrThrow(item.getValueOf('type'), 'createIssue() type');

    Object.values(item.getFields()).forEach(value => function() {
        value = requireOrSet(value, "");
    });

    add(item);

    // for(var i in foo){
    //     alert(i); // alerts key
    //     alert(foo[i]); //alerts key's value
    // }

    // for(let i in item.getFields()) {
    //     requireOrSet(i, "");
    // }

    // Object.keys(item.getFields()).forEach(function(key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    // });

    // Object.keys(obj).map(e => console.log(`key=${e}  value=${obj[e]}`));

    // var fieldList = [];
    // fieldList.push(description);

    // b = b || 0; (e.g. 0 is default)

    // b = (typeof b !== 'undefined') ?  b : 1;

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