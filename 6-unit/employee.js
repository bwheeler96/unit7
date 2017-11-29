'use strict'

function Employee(first, last, ssn, eid, dept) {
    this.firstName = first;
    this.lastName = last;
    this.ssn = ssn;
    this.eid = eid;
    this.dept = dept;
}

Employee.prototype.prettyPrint = function() {
    console.log(this.firstName, this.lastName, ':', this.dept)
};

let mScott = new Employee('Michael', 'Scott', '000-00-0000', 1, 'empty');

(function _test() {
    mScott.prettyPrint()
    if (mScott.ssn !== '000-00-0000' || mScott.dept !== 'empty') {
        throw new Error('Employee.Prototype ssn or dept is wrong')
    }
})()
