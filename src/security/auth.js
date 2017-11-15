'use strict';

exports.ACTIONS = {
    READ_ISSUE :        {value: 0, name: "Read issue information"},
    WRITE_ISSUE :       {value: 1, name: "Modify issue information"},
    READ_PROJECT_INFO : {value: 2, name: "Read project information"}
};

exports.isAuthenticated = function(user) {

    //todo
};

exports.isAuthorized = function(user, action) {

    //todo
};
