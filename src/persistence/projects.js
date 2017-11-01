'use strict';

import {add, get, update, remove} from 'dbHandler';

/**
 * @name Projects table
 * @field id
 * @field title
 * @field description
 * @field company
 * @field creationDate
 * @field lastUpdatedDate
 * @field owner
 * @field members
 * @field history
 */

const projectsTable = "projects"; //todo change if necessary

/** CREATE equivalent
 * @param item The object to be added
 */
export function add(item) {
    add(item, projectsTable);
}

/** READ equivalent
 * @param item The object to be retrieved
 */
export function get(item) {
    get(item, projectsTable);
}

/** UPDATE equivalent
 * @param item The object to be updated
 */
export function update(item) {
    update(item, projectsTable);
}

/** DELETE equivalent
 * @param item The object to be removed
 */
export function remove(item) {
    remove(item, projectsTable);
}