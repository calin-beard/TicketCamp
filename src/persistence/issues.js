'use strict';

import {add, get, update, remove} from 'dbHandler';

const issuesTable = "issues"; //todo change if necessary

/** CREATE equivalent
 * @param item The object to be added
 */
export function add(item) {
    add(item, issuesTable);
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