import * as issues from "../../src/persistence/issues";

let assert = require('assert');

function basicTest() {
    assert.equal(-1, [1,2,3].indexOf(4));
}

function testCreate_throws() {

    let x = new issues.IssueItem();
    let y = new issues.IssueItem("myTitle");

    assert.throws(issues.createIssue(x), Error, "Error thrown");
    assert.throws(issues.createIssue(y), Error, "Error thrown");

    //todo
    issues.editAssignee();
    issues.editBlockerOf();
    issues.editChildOf();
    issues.editDescription();
    issues.editTitle();
    issues.editType();
    issues.getIssue();
    issues.removeIssue();
}

console.log("Starting 'issue' tests");

basicTest();
testCreate_throws();
