/** Returns true if object is either null or undefined
 * @param object The object to be checked
 * @returns {boolean}
 */
exports.isUnset = function(object) {

    return ((object === null) || (object === 'undefined'));
};

/** Throws an error if object is either null or undefined
 * @param object The object to be checked
 * @param varName The object's name
 */
exports.requireOrThrow = function(object, varName) {

    if(this.isUnset(object)) {
        throw varName + " is either null or undefined";
    }
};

/** Assigns value to object if object is either null or undefined
 * @param object The object to be checked
 * @param value The value to be set
 * @returns The value that has to be set
 */
exports.requireOrSet = function(object, value) {

    if(this.isUnset(object)) {
        return value;
    } else {
        return object;
    }
};
