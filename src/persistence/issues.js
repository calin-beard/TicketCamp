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
 * @param item The object to be added
 */
export function createIssue(title, type, description, assignee, childOf, blockerOf) {

    // b = b || 0; (e.g. 0 is default)

    // b = (typeof b !== 'undefined') ?  b : 1;

    // if(typeof myVariable === 'undefined') {
    //     myVariable = 'default';
    // }
}

/** UPDATE title
 * @param newValue New value
 */
function editTitle(newValue) {
    //
}

/** UPDATE type
 * @param newValue New value
 */
function editType(newValue) {
    //
}

/** UPDATE description
 * @param newValue New value
 */
function editDescription(newValue) {
    //
}

/** UPDATE assignee
 * @param newValue New value
 */
function editAssignee(newValue) {
    //
}

/** UPDATE parent value
 * @param newValue New value
 */
function editChildOf(newValue) {
    //
}

/** UPDATE the issue currently blocked by this
 * @param newValue New value
 */
function editBlockerOf(newValue) {
    //
}

/** READ equivalent
 * @param item The object to be retrieved
 */
export function getIssue(item) {
    get(item, issuesTable);
}

/** DELETE equivalent
 * @param item The object to be removed
 */
export function removeIssue(item) {
    remove(item, issuesTable);
}