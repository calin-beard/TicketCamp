'use strict';

import { add, get, update, remove, Item } from 'dbHandler';


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
}

/** UPDATE title
 * @param itemID The id of the item on which the field shall be updated
 * @param newValue New value
 */
export function editTitle(itemID, newValue) {
    update(itemID, "title", newValue, issuesTable);
}

/** UPDATE type
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
export function editType(itemID, newValue) {
    update(itemID, "type", newValue, issuesTable);
}

/** UPDATE description
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
export function editDescription(itemID, newValue) {
    update(itemID, "description", newValue, issuesTable);
}

/** UPDATE assignee
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
export function editAssignee(itemID, newValue) {
    update(itemID, "assignee", newValue, issuesTable);
}

/** UPDATE parent value
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
export function editChildOf(itemID, newValue) {
    update(itemID, "childOf", newValue, issuesTable);
}

/** UPDATE the issue currently blocked by this
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
export function editBlockerOf(itemID, newValue) {
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
