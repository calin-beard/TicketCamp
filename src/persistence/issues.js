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

const issuesTable = "issues"; //todo change if necessary

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
 * @param old Old value
 * @param _new New value
 */
function editTitle(old, _new) {
    //
}

/** UPDATE type
 * @param old Old value
 * @param _new New value
 */
function editType(old, _new) {
    //
}

/** UPDATE description
 * @param old Old value
 * @param _new New value
 */
function editDescription(old, _new) {
    //
}

/** UPDATE assignee
 * @param old Old value
 * @param _new New value
 */
function editAssignee(old, _new) {
    //
}

/** UPDATE parent value
 * @param old Old value
 * @param _new New value
 */
function editChildOf(old, _new) {
    //
}

/** UPDATE the issue currently blocked by this
 * @param old Old value
 * @param _new New value
 */
function editBlockerOf(old, _new) {
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