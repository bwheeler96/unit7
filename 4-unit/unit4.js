'use strict'

// ===== Problem 1, join() ===== //
function join(arr) {
    return arr.join(' and ')
}

(function _testJoin() {
    let result = join( ["John", "Paul", "Mary", "Tony", "Joan"] );

    if (result !== 'John and Paul and Mary and Tony and Joan') {
        throw new Error('array not joined correctly')
    }

    console.log('_testJoin: 1 test passed:', result)
})()


// ===== Problem 2, range() =====//
function range(start, end) {
    if (end < start) {
        throw new Error("End must be greater than start")
    }

    let size = end - start + 1

    let result = new Array(size)

    for (let i = 0; i < size; i++) {
        result[i] = start + i
    }
    return result
}

(function _testRange() {
    let result = range(1, 10)

    console.log('result of testRange():', result)
})()


// ========= Problem 2, sum() ===========
function sum(arr) {
    let total = 0

    for (let value of arr) {
        total += value
    }
    return total
}

(function _testSum() {
    let result = sum(range(1, 10))

    if (result !== 55) {
        throw new Error('Result not eq 55: ' + result)
    }

    console.log('_testSum(): 1 test passed:', result)
})()

// ===== Problem 3, Person ===== //

class Person extends Object {
    constructor(attributes) {
        super()
        this.name = attributes.name
        this.children = attributes.children || []
        this.spouse = attributes.spouse || null
        this.father = attributes.father || null
        this.mother = attributes.mother || null
    }

    changeSpouse(newSpouse) {
        this.spouse = newSpouse
    }
}

let tuulia = new Person({
    name: 'Tuulia'
})

let ani = new Person({
    name: 'Ani'
})

let sipho = new Person({
    name: 'Sipho',
    mother: tuulia,
    spouse: ani
})

tuulia.children.push(sipho)
ani.spouse = sipho

let aolani = new Person({
    name: 'Aolani',
    mother: ani,
    father: sipho
})

let hiro = new Person({
    name: 'Hiro',
    mother: ani,
    father: sipho
})

let xue = new Person({
    name: 'Xue',
    mother: ani,
    father: sipho
})


let test = function _testPerson() {
    if (sipho.mother.name !== 'Tuulia') {
        throw new Error("Tuulia is Sipho's mother")
    }

    ani.changeSpouse(new Person({ name: 'mars' }))

    if (ani.spouse.name !== 'mars') {
        throw new Error("Ani's spouse is now mars")
    }

    console.log('_testPerson(): 2 tests passed')
}


test()
