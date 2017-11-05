
function isUnset(object) {

    return ((object === null) || (object === 'undefined'));
}

function requireOrThrow(object, varName) {

    if(isUnset(object)) {
        throw varName + " is either null or undefined";
    }
}

function requireOrSet(object, value) {

    if(isUnset(object)) {
        return value;
    }
}
