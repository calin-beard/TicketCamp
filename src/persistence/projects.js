'use strict';

import {add, get, update, remove} from 'dbHandler';

/**
 * @name Projects table
 * @field id (auto)
 * @field title (required)
 * @field owner (required)
 * @field description (optional)
 * @field company (optional)
 * @field creationDate (auto)
 * @field lastUpdatedDate (auto)
 * @field members (optional)
 * @field history (auto)
 */

const projectsTable = "projects"; //todo change if necessary

/** CREATE equivalent
 * @param item The object to be added
 */
export function createProject(title, owner, description, company, members) {

    // add(item, projectsTable);
}

/** UPDATE title
 * @param old Old value
 * @param _new New value
 */
function editTitle(old, _new) {
    //
}

/** UPDATE owner
 * @param old Old value
 * @param _new New value
 */
function editOwner(old, _new) {
    //
}

/** UPDATE description
 * @param old Old value
 * @param _new New value
 */
function editDescription(old, _new) {
    //
}

/** UPDATE company
 * @param old Old value
 * @param _new New value
 */
function editCompany(old, _new) {
    //
}

/** UPDATE members
 * @param old Old value
 * @param _new New value
 */
function editMembers(old, _new) {
    //
}

/** READ equivalent
 * @param item The object to be retrieved
 */
export function getProject(item) {
    get(item, projectsTable);
}

/** DELETE equivalent
 * @param item The object to be removed
 */
export function removeProject(item) {
    remove(item, projectsTable);
}