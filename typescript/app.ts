let arr: [string, number] = ["Abi", 8]; // this is a tuple where we need to tell what will be order of dataypes in the array in ts

enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
} // enum is kind of similar to objects where we can in future access admin like UserRoles.ADMIN or guest like UserRoles.GUEST etc

let a: number; // assigning type to a variable

let b; // since we have not given type to varibale b hence the type that will be assigned to b will be 'any'

let c: unknown;
c = 12;
c = "ab";

if (typeof c === "string") c.toLocaleUpperCase();// in case of unknown type first we need to check the string after that only we use run any method

function  abcd():void{
    console.log("hey")
} // if a function doesn't return anything then we put type void

let d:null;//setting  type of d as null

let e:string|number; //here we are using union,that mean value of e can either be string or number

interface User{
    name: string,
    email: string,
    password: string
    gender?:string // means gender is optional property     
} // interface is basically face of an object, we use it tell the types of the properties inside an object

function getDataOfUser(obj:User){

}

getDataOfUser({name:"abi",email:"a@example.com",password:"123"})


interface Admin extends User{
    admin:boolean;
} // basiclly admin has all the properties of User interface along with its own property

function abc(obj:Admin){
// here we can get obj.admin
}
