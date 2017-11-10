/** Returns true if object is either null or undefined
 * @param object The object to be checked
 * @returns {boolean}
 */
function isUnset(object) {

    return ((object === null) || (object === 'undefined'));
}

/** Throws an error if object is either null or undefined
 * @param object The object to be checked
 * @param varName The object's name
 */
function requireOrThrow(object, varName) {

    if(isUnset(object)) {
        throw varName + " is either null or undefined";
    }
}

/** Assigns value to object if object is either null or undefined
 * @param object The object to be checked
 * @param value The value to be set
 * @returns The value that has to be set
 */
function requireOrSet(object, value) {

    if(isUnset(object)) {
        return value;
    } else {
        return object;
    }
}
