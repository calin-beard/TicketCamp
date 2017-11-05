'use strict';

import {add, get, update, remove, Item} from 'dbHandler';

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

/* Usage example
    var item = new ProjectItem("TicketCamp", "Jason")
        .add("description", "TicketCamp project");
        .add("members", "Jason, Jessica");
    createProject(item);
 */

export class ProjectItem extends Item {

    constructor(title, owner) {
        super(projectsTable, schema)
            .add("title", title)
            .add("owner", owner);
    }
}


/** CREATE equivalent
 * @param item The ProjectItem to be created
 */
export function createProject(item) {

    requireOrThrow(item, 'createProject() item');
    requireOrThrow(item.getValueOf('title'), 'createProject() title');
    requireOrThrow(item.getValueOf('owner'), 'createProject() owner');

    Object.values(item.getFields()).forEach(value => function() {
        value = requireOrSet(value, "");
    });

    add(item);
}

/** UPDATE title
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
function editTitle(itemID, newValue) {
    update(itemID, "title", newValue, projectsTable);
}

/** UPDATE owner
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
function editOwner(itemID, newValue) {
    update(itemID, "owner", newValue, projectsTable);
}

/** UPDATE description
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
function editDescription(itemID, newValue) {
    update(itemID, "description", newValue, projectsTable);
}

/** UPDATE company
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
function editCompany(itemID, newValue) {
    update(itemID, "company", newValue, projectsTable);
}

/** UPDATE members
 * @param newValue New value
 * @param itemID The id of the item on which the field shall be updated
 */
function editMembers(itemID, newValue) {
    update(itemID, "members", newValue, projectsTable);
}

/** READ equivalent
 * @param itemID The id of the object to be retrieved
 */
export function getProject(itemID) {
    get(itemID, projectsTable);
}

/** DELETE equivalent
 * @param itemID The id of the object to be removed
 */
export function removeProject(itemID) {
    remove(itemID, projectsTable);
}