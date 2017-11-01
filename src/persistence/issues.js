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
export function createIssue(item) {
    add(item, issuesTable);

    // b = b || 0; (e.g. 0 is default)

    // b = (typeof b !== 'undefined') ?  b : 1;

    // if(typeof myVariable === 'undefined') {
    //     myVariable = 'default';
    // }
}

function addDescription() {
    //
}

/** READ equivalent
 * @param item The object to be retrieved
 */
export function getIssue(item) {
    get(item, issuesTable);
}

/** UPDATE equivalent
 * @param item The object to be updated
 */
export function editIssue(item) {
    update(item, issuesTable);
}

/** DELETE equivalent
 * @param item The object to be removed
 */
export function removeIssue(item) {
    remove(item, issuesTable);
}