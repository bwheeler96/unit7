'use strict'

function has(object, property) {
    return object.hasOwnProperty(property)
}

(function _test() {
    let object = {
        property: 'yes'
    }

    if (!has(object, 'property')) {
        throw new Error('has() does not detect existing properties')
    }

    if (has(object, 'nonexist')) {
        throw new Error('has() is seeing things that are not there')
    }

    console.log('2 tests passed')
})()
