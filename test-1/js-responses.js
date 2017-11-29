//===== Problem 4

(function() {
    let response = prompt()
    
    response += response + response
    alert(response)
})()

/*===== Problem 5

Automatic type conversion is a feature of javascript that allows
data types to be inferred based on the context.

All arithmetic operators except the + operator will convert
the operands from strings to numbers. Most other languages would throw an error
or refuse to compile, but javascript will make its best attempt to parse the strings
as floating point numbers.

For example:

'4' - '3' === 1
'100' * '10' === 1000
'20' / '5' === 4

This is an example of automatic type conversion, and it can be very useful, especially
when operating on data from a web form.

Another way automatic type conversion is done is on boolean types. While
javascript has both "true" and "false" it is very common to use "truthy" and "falsey"
values as booleans.

A very common pattern in node js used to be

asyncFunction(function callback(err, data) {
    if (err)
        // Handle err
    else
        // something with data
})

Where err would be set to null when no error was present. Other languages may not allow
null in a conditional, but javascript is fine with it because it has decided null is "falsey".

*/


/* Problem 6

good afternoon
good afternoon

Because in function f2() the variable x is scoped when defined, so it does not overwrite var x declared in the global scope, while f1() does

*/

/* Problem 7 */

function duck(duck) {
    alert( typeof duck )
}

/* Problem 8

a. "HE WHO LAUGHS, LASTS."
b. 8
c. -1
d. 3
e. 16
f. 16
g. -1
h. 8
i. l
j. ""
k. t

*/

/* Problem 9 */

// Creates a constructor for Thing that defines the property `name`
function Thing(name) {

  this.name = name;

}

/**
 * Defines a prototype function for all prototypes of Thing
 * That accepts a callback and an argument
 * doSomething then calls the callback using the context
 * of the <Thing> instance with the argument that was passed in
 */
Thing.prototype.doSomething = function(callback, salutation) {

  callback.call(this, salutation);

}

/**
 * Defines a function that will print
 * the argument passed in, followed by a space,
 * followed by the value of this.name
 */
function Afunction(salutation) {

  console.log(salutation + " " + this.name);

}

// Defines an instance of thing
var t = new Thing('John Smith');

/**
 * Calls the doSomething() function on 
 * thing, which prints "Hello John Smith"
 * to the console, because of the use
 * of callback.call(this, salutation).
 */
t.doSomething(Afunction, 'Hello');

/** Problem 10

Objects in javascript provide logical ordering for things represented in code.
In javascript I can define an object called ToDoItem, that will handle all of my 
functions related to ToDoItems. I could implement #cancel() and #done() functions,
and all of those functions would be neatly wrapped up inside of my object.

Other languages, such as C, do not have objects. Instead of this neat little solution,
C developers have to write functions that look like #cancel_to_do_item(), #mark_to_do_item_as_done().
While this is great for projects that demand the power of C, we're happy to use objects in javascript
because they make everything much easier to reason about.
*/

/* Problem 11 */

function MedRecord(first, last, record, id, insurance) {
    this.firstName = first
    this.lastName = last
    this.medRecord = record
    this.medId = id
    this.insuranceInfo = insurance
}

MedRecord.prototype.changeInsurance = function(insurance) {
    this.insuranceInfo = insurance
}

//===== Problem 12

const data = [
    { first: 'Mike', last: 'Smith' },
    { first: 'Anna', last: 'House' },
    { first: 'Mark', last: 'McDonald' } // We were so close to having the letters line up
]

for (let person of data) {
    console.log(person.first[0].toLowerCase() + person.last.toLowerCase())
}
