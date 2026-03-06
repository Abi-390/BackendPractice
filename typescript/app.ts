let arr: [string, number] = ["Abi", 8]; // this is a tuple where we need to tell what will be order of dataypes in the array in ts

enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
} // enum is kind of similar to objects where we can in future access admin like UserRoles.ADMIN or guest like UserRoles.GUEST etc

let a: number; // assigning type to a variable

let b; // since we have not given type to varibale b hence the type that will be assigned to b will be 'any'

let c: unknown;// unknown is a type that can hold any value but we need to check the type of value before using it, it is safer than any because it forces us to do type checking before using the value
c = 12;
c = "ab";

if (typeof c === "string") c.toLocaleUpperCase(); // in case of unknown type first we need to check the string after that only we use run any method

function abcd(): void {
  console.log("hey");
} // if a function doesn't return anything then we put type void

let d: null; //setting  type of d as null

let e: string | number; //here we are using union,that mean value of e can either be string or number

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string; // means gender is optional property
} // interface is basically face of an object, we use it tell the types of the properties inside an object

function getDataOfUser(obj: User) {}

getDataOfUser({ name: "abi", email: "a@example.com", password: "123" });

interface Admin extends User {
  admin: boolean;
} // basiclly admin has all the properties of User interface along with its own property

function abc(obj: Admin) {
  // here we can get obj.admin
}

type sentence = string; // basically we can make our own types-->type aliases
let f: sentence;

type value = number | string | null;

let g: value; // Now g can be either number or string or null

type arg = string | null;

function abcde(obj: arg) {}

abcde("hello"); // here in argument we must pass object with type string or null, if we pass any other type then it will give error because we have defined type of obj as arg and arg can only be string or null


// Now we will see about classes in ts
class software{
    fronted = "react";
    backend = "node";
    database = "mongoDB";
} // this is how we can create a class in ts, here we have created a class software with 3 properties frontend, backend and database

let s1 = new software();// here we have created an object s1 of class software, now we can access the properties of class software using s1 like s1.frontend, s1.backend etc