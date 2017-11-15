'use strict';

exports.sanitize = function(str) {
    return escape(str);
};

exports.unsanitize = function(str) {
    return unescape(str);
};
