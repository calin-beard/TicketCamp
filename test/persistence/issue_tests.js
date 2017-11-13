const issues = require('../../src/persistence/issues');

let assert = require('assert');

function basicTest() {
    assert.equal(-1, [1,2,3].indexOf(4));
}

function testCreate_throws() {

    // let x = new issues.IssueItem();
    // assert.throws(issues.createIssue(x), Error, "Error thrown");

    // let y = new issues.IssueItem("myTitle");
    // assert.throws(issues.createIssue(y), Error, "Error thrown");

    let item = new issues.IssueItem("Create database", "feature");

    // issues.createIssue(item);

    // console.log(issues.getIssue("title", "Create database"));

    // console.log(issues.editType("feature", "issue"));

    // issues.editTitle();

    // issues.removeIssue();

    // assert.equal(issues.createIssue(z), true);
    // assert.equal(issues.editDescription(z, "hello"), true);
    // assert.equal(issues.editAssignee(z, "hello"), true);
    // assert.equal(issues.editBlockerOf(z, "hello"), true);
    // assert.equal(issues.editChildOf(z, "hello"), true);
    // assert.equal(issues.editDescription(z, "hello"), true);
    // assert.equal(issues.editTitle(z, "hello"), true);
    // assert.equal(issues.editType(z, "hello"), true);
    // assert.equal(issues.getIssue(z), true);
    // assert.equal(issues.removeIssue(z), true);
}

console.log("Starting 'issue' tests");

basicTest();
testCreate_throws();
