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


/** CREATE equivalent
 * @param title The title of the item to be created
 * @param type The type of the item to be created
 * @param description The description of the item to be created
 * @param assignee The assignee of the item to be created
 * @param childOf Item is the child of this parameter
 * @param blockerOf Item is currently blocking this parameter
 */
export function createIssue(title, type, description, assignee, childOf, blockerOf) {

    if(title === 'undefined') throw "For creation, title is required but not assigned";

    if(type === 'undefined') throw "For creation, type is required but not assigned";

    // b = b || 0; (e.g. 0 is default)

    // b = (typeof b !== 'undefined') ?  b : 1;

    // if(typeof myVariable === 'undefined') {
    //     myVariable = 'default';
    // }
}

/** UPDATE title
 * @param item The item on which the field shall be updated
 * @param newValue New value
 */
function editTitle(item, newValue) {
    update(item, "title", newValue, issuesTable);
}

/** UPDATE type
 * @param newValue New value
 * @param item The item on which the field shall be updated
 */
function editType(item, newValue) {
    update(item, "title", newValue, issuesTable);
}

/** UPDATE description
 * @param newValue New value
 * @param item The item on which the field shall be updated
 */
function editDescription(item, newValue) {
    update(item, "title", newValue, issuesTable);
}

/** UPDATE assignee
 * @param newValue New value
 * @param item The item on which the field shall be updated
 */
function editAssignee(item, newValue) {
    update(item, "title", newValue, issuesTable);
}

/** UPDATE parent value
 * @param newValue New value
 * @param item The item on which the field shall be updated
 */
function editChildOf(item, newValue) {
    update(item, "title", newValue, issuesTable);
}

/** UPDATE the issue currently blocked by this
 * @param newValue New value
 * @param item The item on which the field shall be updated
 */
function editBlockerOf(item, newValue) {
    update(item, "title", newValue, issuesTable);
}

/** READ equivalent
 * @param item The object to be retrieved
 */
export function getIssue(item) {
    return get(item, issuesTable);
}

/** DELETE equivalent
 * @param item The object to be removed
 */
export function removeIssue(item) {
    remove(item, issuesTable);
}