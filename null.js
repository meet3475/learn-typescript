"use strict";
var data1 = null;
var data2 = undefined;
var data3 = null; // string or null
var data4 = undefined; // string or undefined
var data5 = null; // string, null or undefined
var data6 = undefined; // string, null or undefined
var data7 = "Hello, TypeScript!"; // string, null or undefined
var user = null;
var login = true;
if (login) {
    user = "John Doe";
}
console.log(user); // Output: John Doe
console.log(typeof data3); // Output: object
