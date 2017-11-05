import {IssueItem, createIssue} from "../../src/persistence/issues";

let assert = require('assert');

function basicTest() {
    assert.equal(-1, [1,2,3].indexOf(4));
}

function testCreate_throws() {

    let x = new IssueItem();
    let y = new IssueItem("myTitle");

    assert.throws(createIssue(x), Error, "Error thrown");
    assert.throws(createIssue(y), Error, "Error thrown");
}

console.log("Starting 'issue' tests");

basicTest();
testCreate_throws();
