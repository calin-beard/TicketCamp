'use strict';

import {add, get, update, remove} from 'dbHandler';

/**
 * @name Issues table
 * @field id
 * @field title
 * @field description
 * @field creationDate
 * @field lastUpdatedDate
 * @field type
 * @field state
 * @field creator
 * @field assignee
 * @field childOf
 * @field blockerOf
 * @field history
 */

const issuesTable = "issues"; //todo change if necessary

/** CREATE equivalent
 * @param item The object to be added
 */
export function add(item) {
    add(item, issuesTable);

    // b = b || 0; (e.g. 0 is default)

    // b = (typeof b !== 'undefined') ?  b : 1;

    // if(typeof myVariable === 'undefined') {
    //     myVariable = 'default';
    // }
}

/** READ equivalent
 * @param item The object to be retrieved
 */
export function get(item) {
    get(item, issuesTable);
}

/** UPDATE equivalent
 * @param item The object to be updated
 */
export function update(item) {
    update(item, issuesTable);
}

/** DELETE equivalent
 * @param item The object to be removed
 */
export function remove(item) {
    remove(item, issuesTable);
}