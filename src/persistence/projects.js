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

const projectsTable = "projects";

const schema = {
    id: Number,
    title: String,
    owner: String,
    description: String,
    company: String,
    creationDate: Date,
    lastUpdatedDate: Date,
    members: Array,
    history: Array
};


/** CREATE equivalent
 * @param item The object to be added
 */
export function createProject(title, owner, description, company, members) {

    // add(item, projectsTable);
}

/** UPDATE title
 * @param newValue New value
 */
function editTitle(newValue) {
    //
}

/** UPDATE owner
 * @param newValue New value
 */
function editOwner(newValue) {
    //
}

/** UPDATE description
 * @param newValue New value
 */
function editDescription(newValue) {
    //
}

/** UPDATE company
 * @param newValue New value
 */
function editCompany(newValue) {
    //
}

/** UPDATE members
 * @param newValue New value
 */
function editMembers(newValue) {
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