'use strict';

exports.ACTIONS = {
    "READ_ISSUE" : readIssue,
    "MODIFY_ISSUE" : modifyIssue,
    "CREATE_ISSUE" : createIssue,
    "READ_PROJECT_INFO" : readProjectInfo,
    "MODIFY_PROJECT_INFO" : modifyProjectInfo
};

exports.isAuthenticated = function(user) {
    // todo
};

exports.isAuthorized = function(user, action) {

    // todo
    let permissions = readPermissions(user);
    if(permissions[action]) {
        // perform action
    } else {
        // reject action
    }
};

function readPermissions(userId) {
    // todo
}

function readIssue() {
    // todo
}

function modifyIssue() {
    // todo
}

function createIssue() {
    // todo
}

function readProjectInfo() {
    // todo
}

function modifyProjectInfo() {
    // todo
}

// var tmpFunc = new Function(codeToRun);
// tmpFunc();

// var jsonFun = {
//     fun1 : function(){
//         alert('Done');
//     }
// };
//
// $('button').click(function(){
//     jsonFun.fun1();
// });

// function doSomething (condition) {
//     var stuff = {
//         'one': function () {
//             return 'one';
//         },
//
//         'two': function () {
//             return 'two';
//         },
//
//         'three': function () {
//             return 'three';
//         }
//     };
//
//     if (typeof stuff[condition] !== 'function') {
//         return 'default';
//     }
//
//
//     return stuff[condition]();
// }
