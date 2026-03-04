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
let c;
c = 12;
c = "ab";
if (typeof c === "string")
    c.toLocaleUpperCase(); // in case of unknown type first we need to check the string after that only we use run any method
function abcd() {
    console.log("hey");
} // if a function doesn't return anything then we put type void
let d; //setting  type of d as null
let e; //here we are using union,that mean value of e can either be string or number
function getDataOfUser(obj) {
}
getDataOfUser({ name: "abi", email: "a@example.com", password: "123" });
function abc(obj) {
    // here we can get obj.admin
}
let f;
let g; // Now g can be either number or string or null
//# sourceMappingURL=app.js.map