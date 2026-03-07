let arr: [string, number] = ["Abi", 8]; // this is a tuple where we need to tell what will be order of dataypes in the array in ts

enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
} // enum is kind of similar to objects where we can in future access admin like UserRoles.ADMIN or guest like UserRoles.GUEST etc

let a: number; // assigning type to a variable

let b; // since we have not given type to varibale b hence the type that will be assigned to b will be 'any'

let c: unknown; // unknown is a type that can hold any value but we need to check the type of value before using it, it is safer than any because it forces us to do type checking before using the value
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
class software {
  fronted = "react";
  backend = "node";
  database = "mongoDB";
} // this is how we can create a class in ts, here we have created a class software with 3 properties frontend, backend and database

let s1 = new software(); // here we have created an object s1 of class software, now we can access the properties of class software using s1 like s1.frontend, s1.backend etc

//constructor in ts

class humanMaker {
  age = 0; // here we have defined a property age and initialized it with 0, now whenever we create an object of class humanMaker then age will be 0 by default, we haven't put age in constructor because we want it to be 0 by default for every object of class humanMaker, if we want to change the value of age then we can do it using the object of the class like s1.age = 25 etc
  constructor(
    public name: string,
    public ishandome: boolean,
  ) {
    // here we have created a constructor which will be called when we create an object of class humanMaker, here we have also defined the properties name and ishandome in the constructor itself, so we don't need to define them separately like we did in software class
  } // constructor always runs first when we create an object of a class, it is used to initialize the properties of the class, here we have initialized the properties name and ishandome using the constructor parameters, we have also made them public so that we can access them outside the class using the object of the class
}

let h1 = new humanMaker("john", true); // here we have created an object of class humanMaker and passed the values for name and ishandome properties, now we can access these properties using the object of the class like this:

//music player with constructor

class muscicPlayer {
  constructor(
    public name: string,
    public artist: string,
    public album: string,
    public free: boolean,
    public length: number,
    public thumbnail: string = "somethumbnail.jpg",
  ) {}
} // here we have created a class musicPlayer with a constructor that takes 6 parameters, we have also given a default value to thumbnail parameter, so if we don't pass any value for thumbnail when creating an object of musicPlayer then it will take the default value "somethumbnail.jpg"

let song1 = new muscicPlayer("song1", "artist1", "album1", true, 3.5); // here we have created an object of class musicPlayer and passed the values for name, artist, album, free and length parameters, we haven't passed any value for thumbnail parameter so it will take the default value "somethumbnail.jpg"

//this keyword in ts

class xyz {
  name = "abc";

  changename() {
    this.name = "def"; // here we are using this keyword to change the value of name property, this keyword refers to the current object of the class, so when we call changename method using an object of class xyz then it will change the value of name property for that object
  }

  changeSomething() {
    console.log("hey");
    this.changename(); // here we are calling changename method inside changeSomething method using this keyword, so when we call changeSomething method using an object of class xyz then it will first print 'hey' and then it will call changename method which will change the value of name property for that object
  }
}

// Example with constructor and this keyword

class bottleMaker {
  public name;
  constructor(name: string) {
    this.name = name; // here we are using this keyword to assign the value of name parameter to the name property of the class, this keyword refers to the current object of the class, so when we create an object of class bottleMaker and pass a value for name parameter then it will assign that value to the name property of that object
  }
} // better way to write is like this: class bottleMaker{ constructor( public name:string){} }

// better way 

class bottle {
 constructor( public name:string){}
} 

let b1 = new bottle('coke');
