'use strict';

/** The main security module
 *  Receives requests, sanitizes inputs,
 *  checks if user is authenticated,
 *  check if user is authorized,
 *  and finally performs the requested action.
 */

exports.RequestItem = class {

    constructor(user, action, data) {
        this.user = user;
        this.action = action;
        this.data = data;
    }

    getUser() {
        return this.user;
    }

    getAction() {
        return this.action;
    }

    getData() {
        return this.data;
    }
};

/** Function which analyzes requests
 *  and performs actions if necessary.
 * @param req The {@link #RequestItem} to be analyzed.
 */
exports.request = function(req) {

    //todo
};