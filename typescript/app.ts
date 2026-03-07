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

//Access specifiers in ts

class car {
  public name: string; // public means we can access this property from anywhere, it is the default access specifier in ts
  private model: string; // private means we can only access this property within the class, we cannot access it outside the class using the object of the class
  protected year: number; // protected means we can access this property within the class and also in the subclasses that inherit from this class, but we cannot access it outside the class using the object of the class

  constructor(name: string, model: string, year: number) {
    this.name = name;
    this.model = model;
    this.year = year;
  } }

// Inheritance in ts

class vehicle {
  constructor(public name: string, public model: string, public year: number) {}}

class bike extends vehicle {
  constructor(name: string, model: string, year: number, public type: string) {
    super(name, model, year); // here we are using super keyword to call the constructor of the parent class vehicle, so that we can initialize the properties name, model and year in the parent class, super keyword is used to call the constructor of the parent class and also to access the properties and methods of the parent class
  }}


  // anther example of inheritance

  class animal{
    private animalAge :number = 0; //Now animalAge is only accessible within this class, even with inheritance we cannot access this in below class dog, if we try it will give error.

    constructor(public name:string){

    }

  }

  class dog extends animal{
    constructor(name:string){
        super(name); // here we are using super keyword to call the constructor of the parent class animal, so that we can initialize the name property in the parent class, super keyword is used to call the constructor of the parent class and also to access the properties and methods of the parent class
    }

    getValue(){
        console.log(this.name)// here we cannot access animalAge property(this.animalAge) because it is private in parent class animal, even with inheritance we cannot access private properties of parent class, if we try to access it will give error, but we can access name property because it is public in parent class animal
    }
  }

  let d1 = new dog("tommy");
  d1.getValue(); // here we are calling getValue method of dog class using the object d1, this will print the name property of the dog class which is inherited from animal class, so it will print "tommy"
  
  // Access modifiers in ts

  class person {
    constructor(public readonly name: string, private age: number, protected gender: string) {}  // here we have used readonly access modifier for name property, which means we can only assign value to name property at the time of object creation and after that we cannot change it, if we try to change it will give error, but we can change age
    changeParameters(){
        this.age = 30;
        this.gender = "male";// here we can't do this.name = "abc" because name is readonly, we can only assign value to name property at the time of object creation and after that we cannot change it, if we try to change it will give error, but we can change age and gender.
    }

} 

// Getters and Setters in ts

class userName{
    constructor(public _name:string, public age:number){ // _name here because if we put name here then in getter we wont be able to use get name() it will give duplicate identifier error because we have already used name as a parameter in constructor, so we use _name to avoid this error and then we can use get name() and set name() to access and modify the value of _name property
    }
    get name(){
        return this._name; // here we are using getter to get the value of _name property, we can access this getter using the object of the class like this: user1.name, it will return the value of _name property
    }

    set name(value : string){
        this._name = value; // here we are using setter to set the value of _name property, we can access this setter using the object of the class like this: user1.name = "new name", it will set the value of _name property to "new name"
    }
}

let user1 = new userName("john", 25);// here we have created an object of class userName and passed the values for _name and age parameters, now we can access the name getter and setter using the object user1 like this: user1.name to get the value of _name property and user1.name = "new name" to set the value of _name property to "new name"
