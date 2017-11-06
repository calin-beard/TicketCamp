import * as projects from "../../src/persistence/projects";

let assert = require('assert');

function basicTest() {
    assert.equal(-1, [1,2,3].indexOf(4));
}

function testCreate_throws() {

    let x = new projects.ProjectItem();
    let y = new projects.ProjectItem("myTitle");

    assert.throws(projects.createProject(x), Error, "Error thrown");
    assert.throws(projects.createProject(y), Error, "Error thrown");

    //todo
    projects.editTitle();
    projects.editDescription();
    projects.editCompany();
    projects.editMembers();
    projects.editOwner();
    projects.getProject();
    projects.removeProject();
}

console.log("Starting 'issue' tests");

basicTest();
testCreate_throws();