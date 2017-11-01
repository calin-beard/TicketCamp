'use strict';

import {add, get, update, remove} from 'dbHandler';

/**
 * @name Projects table
 * @field id (auto)
 * @field title (required)
 * @field description (optional)
 * @field company (optional)
 * @field creationDate (auto)
 * @field lastUpdatedDate (auto)
 * @field owner (required)
 * @field members (optional)
 * @field history (auto)
 */

const projectsTable = "projects"; //todo change if necessary

/** CREATE equivalent
 * @param item The object to be added
 */
export function createProject(item) {
    add(item, projectsTable);
}

/** READ equivalent
 * @param item The object to be retrieved
 */
export function getProject(item) {
    get(item, projectsTable);
}

/** UPDATE equivalent
 * @param item The object to be updated
 */
export function editProject(item) {
    update(item, projectsTable);
}

/** DELETE equivalent
 * @param item The object to be removed
 */
export function removeProject(item) {
    remove(item, projectsTable);
}