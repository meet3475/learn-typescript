var data1: null = null;
var data2: undefined = undefined;

var data3: string | null = null; // string or null
var data4: string | undefined = undefined; // string or undefined
var data5: string | null | undefined = null; // string, null or undefined
var data6: string | null | undefined = undefined; // string, null or undefined
var data7: string | null | undefined = "Hello, TypeScript!"; // string, null or undefined

var user: null | string = null; 
var login = true;
if (login) {
   user = "John Doe";
}   

console.log(user); // Output: John Doe
console.log(typeof data3); // Output: object

