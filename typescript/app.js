"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr = ["Abi", 8]; // this is a tuple where we need to tell what will be order of dataypes in the array in ts
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {})); // enum is kind of similar to objects where we can in future access admin like UserRoles.ADMIN or guest like UserRoles.GUEST etc
let a; // assigning type to a variable
let b; // since we have not given type to varibale b hence the type that will be assigned to b will be 'any'
let c; // unknown is a type that can hold any value but we need to check the type of value before using it, it is safer than any because it forces us to do type checking before using the value
c = 12;
c = "ab";
if (typeof c === "string")
    c.toLocaleUpperCase(); // in case of unknown type first we need to check the string after that only we use run any method
function abcd() {
    console.log("hey");
} // if a function doesn't return anything then we put type void
let d; //setting  type of d as null
let e; //here we are using union,that mean value of e can either be string or number
function getDataOfUser(obj) { }
getDataOfUser({ name: "abi", email: "a@example.com", password: "123" });
function abc(obj) {
    // here we can get obj.admin
}
let f;
let g; // Now g can be either number or string or null
function abcde(obj) { }
abcde("hello"); // here in argument we must pass object with type string or null, if we pass any other type then it will give error because we have defined type of obj as arg and arg can only be string or null
// Now we will see about classes in ts
class software {
    fronted = "react";
    backend = "node";
    database = "mongoDB";
} // this is how we can create a class in ts, here we have created a class software with 3 properties frontend, backend and database
let s1 = new software(); // here we have created an object s1 of class software, now we can access the properties of class software using s1 like s1.frontend, s1.backend etc
//# sourceMappingURL=app.js.map