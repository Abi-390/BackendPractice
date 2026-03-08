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

// static memebers in ts
 class project1{
    static version = "1.0.0"; // here we have defined a static property version, which means we can access this property without creating an object of the class, we can access it using the class name like this: project1.version, it will return the value of version property which is "1.0.0"
 }
// we dont have to create let s1 = new project`() to access version property like this: s1.version, since we are using static we can directly access it like project1.version 

// Abstract classes in ts

abstract class Cooking { // here we have defined an abstract class Cooking

  constructor(protected gas: number, public gasName: string) {}

  abstract cook(): void;// here we have defined an abstract method cook, which means any class that inherits from Cooking class must implement this cook method, if we try to create an object of a class that inherits from Cooking class without implementing cook method then it will give error because cook method is abstract and must be implemented by the subclass that inherits from Cooking class

}

class Curry extends Cooking {

  cook() {
    console.log("Cooking curry with " + this.gasName);// here we are implementing the cook method of Cooking class in Curry class, since cook method is abstract in Cooking class, we must implement it in Curry class, if we don't implement it then it will give error because cook method is abstract and must be implemented by the subclass that inherits from Cooking class
  }

}

let c1 = new Curry(5,"LPG");// here we have created an object of class Curry and passed the values for gas and gasName parameters, now we can access the cook method of Curry class using the object c1 like this: c1.cook(), it will print "Cooking curry with LPG" because we have implemented the cook method in Curry class and it is using the gasName property which is inherited from Cooking class to print the name of gas used for cooking curry
c1.cook();// here we are calling cook method of Curry class using the object c1, this will print "Cooking curry with LPG" because we have implemented the cook method in Curry class and it is using the gasName property which is inherited from Cooking class to print the name of gas used for cooking curry

//function types in ts

function pqrs(name:string,callback:(value:string)=>void){// here we have defined a function pqrs that takes two parameters, name which is of type string and callback which is a function that takes a parameter value of type string and returns void, this means that the callback function doesn't return anything, it just performs some action with the value parameter, we can call this pqrs function and pass a string value for name and a callback function that takes a string parameter and returns void, like this: pqrs("john",(value:string)=>{ console.log(value) }), here we are passing "john" as the name parameter and a callback function that takes a string parameter value and logs it to the console, when we call pqrs function it will execute the callback function with the value "john" and it will log "john" to the console
    callback('hey') // here we are calling the callback function with the value "hey", so when we call pqrs function it will execute the callback function with the value "hey" and it will log "hey" to the console, we can change this value to anything we want, like this: callback(name) then it will log the value of name parameter which is "john" to the console
}

pqrs("john",(value:string)=>{// here we are calling pqrs function and passing "john" as the name parameter and a callback function that takes a string parameter value and logs it to the console, when we call pqrs function it will execute the callback function with the value "john" and it will log "john" to the console
    console.log(value)
})


// Rest parameters in ts

function sum (...arr:number[]){}// here we have defined a function sum that takes rest parameters, rest parameters are used to represent an indefinite number of arguments as an array, here we have defined rest parameters as arr:number[], which means that we can pass any number of arguments to sum function and it will treat them as an array of numbers, so when we call sum function with any number of arguments it will treat them as an array and we can perform any array operations on this arr parameter inside the sum function to calculate the sum of these numbers or do any other operations as needed.

sum(1,2,3,4,5); // here we are calling sum function and passing 5 numbers as arguments, since we have defined rest parameters in sum function as arr:number[], it means that we can pass any number of arguments to sum function and it will treat them as an array of numbers, so when we call sum function with 5 numbers it will treat them as an array [1,2,3,4,5] and we can perform any array operations on this arr parameter inside the sum function to calculate the sum of these numbers or do any other operations as needed.


// Function overloading in ts

// ts fnc signatures


function abcdef(x:string):void; // here we have defined a function signature for abcdef function that takes a string parameter x and returns void, this means that when we call abcdef function with a string argument it will execute the function body that corresponds to this signature.

function abcdef(x:number, y:string):number; // here we have defined another function signature for abcdef function that takes a number parameter x and a string parameter y and returns a number, this means that when we call abcdef function with a number and a string argument it will execute the function body that corresponds to this signature, we can define as many signatures as we want for the same function to allow different types of arguments and return types, but we must implement the function body that corresponds to all these signatures.

function abcdef(x: any, y?: any): any { // here we have implemented the function body for abcdef function that corresponds to all the signatures we have defined above, since we have defined multiple signatures for abcdef function, we must implement a function body that can handle all these signatures, so we have defined the parameters as x:any and y?:any, which means that x can be of any type and y is an optional parameter that can also be of any type, now inside the function body we can check the types of x and y to determine which signature is being called and execute the corresponding logic for that signature.
    if(typeof x === "string"){
        console.log("String signature called with value: " + x);
    } else if(typeof x === "number" && typeof y === "string"){
        console.log("Number and String signature called with values: " + x + " and " + y);
        return x; // since this signature returns a number, we can return x which is a number
    }
    else  throw new Error('Invalid arguments');// here we are throwing an error if the arguments passed to abcdef function do not match any of the defined signatures, this is a good practice to handle cases where the function is called with invalid arguments, it helps to catch errors early and provide meaningful error messages to the developers who are using this function.
  }


  // Generics in ts 

// ---Generic functions in ts---

  function acceptAnything<T>(value:T):T{ // here we have defined a generic function acceptAnything that takes a type parameter T ( we can put it anything like A, B, C.... but T is a common convention ), this means that when we call acceptAnything function we can specify the type of T and it will return a value of that type, for example if we call acceptAnything<string>("hello") then T will be string and it will return a string value "hello", if we call acceptAnything<number>(123) then T will be number and it will return a number value 123, this way we can create a reusable function that can work with any data type while still providing type safety.
    return value;
  } 

  let result1 = acceptAnything<string>("hello"); // here we are calling acceptAnything function and specifying the type parameter T as string, so it will return a string value "hello" and we are storing it in result1 variable which is of type string.

  let result2 = acceptAnything<number>(123); // here we are calling acceptAnything function and specifying the type parameter T as number, so it will return a number value 123 and we are storing it in result2 variable which is of type number.

  let result3 = acceptAnything(true); // here we are calling acceptAnything function without specifying the type parameter T, in this case TypeScript will infer the type of T based on the argument passed to the function, since we passed a boolean value true, TypeScript will infer T as boolean and it will return a boolean value true, so result3 will be of type boolean.

// ---Generic interfaces in ts---  

interface Data<T>{
  name : string,
  age : number,
  key : T //since we dont know key type like key can be number also string also boolean etc, so we are using generic type parameter T to represent the type of key property, this way we can create a reusable interface that can work with any data type for key property while still providing type safety.
}

function processData(obj : Data<string | number>){}// here we have defined a function processData that takes an object of type Data<string | number>, this means that the key property of the object passed to processData function can be either a string or a number, so when we call processData function we need to pass an object that conforms to the Data<string | number> interface, which means that the key property of that object must be either a string or a number, if we try to pass an object that does not conform to this interface then it will give an error because it does not match the expected type for the key property.

processData({ name: "john", age: 25, key: "abc" }); // here we are calling processData function and passing an object that conforms to the Data interface with T specified as string, so the key property must be of type string, if we try to pass a value of a different type for key property it will give an error because it does not conform to the Data<string> interface.

processData({ name: "john", age: 25, key: 123 }); // here we are trying to call processData function and passing an object that does not conform to the Data<string | number> interface because the key property is of type boolean instead of string or number, this will give an error because it does not conform to the Data<string | number> interface, if we want to use a boolean for key property then we should specify T as boolean in the Data interface like this: Data<boolean> and then we can pass a boolean value for key property without any error.

