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
//constructor in ts
class humanMaker {
    name;
    ishandome;
    age = 0; // here we have defined a property age and initialized it with 0, now whenever we create an object of class humanMaker then age will be 0 by default, we haven't put age in constructor because we want it to be 0 by default for every object of class humanMaker, if we want to change the value of age then we can do it using the object of the class like s1.age = 25 etc
    constructor(name, ishandome) {
        this.name = name;
        this.ishandome = ishandome;
        // here we have created a constructor which will be called when we create an object of class humanMaker, here we have also defined the properties name and ishandome in the constructor itself, so we don't need to define them separately like we did in software class
    } // constructor always runs first when we create an object of a class, it is used to initialize the properties of the class, here we have initialized the properties name and ishandome using the constructor parameters, we have also made them public so that we can access them outside the class using the object of the class
}
let h1 = new humanMaker("john", true); // here we have created an object of class humanMaker and passed the values for name and ishandome properties, now we can access these properties using the object of the class like this:
//music player with constructor
class muscicPlayer {
    name;
    artist;
    album;
    free;
    length;
    thumbnail;
    constructor(name, artist, album, free, length, thumbnail = "somethumbnail.jpg") {
        this.name = name;
        this.artist = artist;
        this.album = album;
        this.free = free;
        this.length = length;
        this.thumbnail = thumbnail;
    }
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
    name;
    constructor(name) {
        this.name = name; // here we are using this keyword to assign the value of name parameter to the name property of the class, this keyword refers to the current object of the class, so when we create an object of class bottleMaker and pass a value for name parameter then it will assign that value to the name property of that object
    }
} // better way to write is like this: class bottleMaker{ constructor( public name:string){} }
// better way 
class bottle {
    name;
    constructor(name) {
        this.name = name;
    }
}
let b1 = new bottle('coke');
//Access specifiers in ts
class car {
    name; // public means we can access this property from anywhere, it is the default access specifier in ts
    model; // private means we can only access this property within the class, we cannot access it outside the class using the object of the class
    year; // protected means we can access this property within the class and also in the subclasses that inherit from this class, but we cannot access it outside the class using the object of the class
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
}
// Inheritance in ts
class vehicle {
    name;
    model;
    year;
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
}
class bike extends vehicle {
    type;
    constructor(name, model, year, type) {
        super(name, model, year); // here we are using super keyword to call the constructor of the parent class vehicle, so that we can initialize the properties name, model and year in the parent class, super keyword is used to call the constructor of the parent class and also to access the properties and methods of the parent class
        this.type = type;
    }
}
// anther example of inheritance
class animal {
    name;
    animalAge = 0; //Now animalAge is only accessible within this class, even with inheritance we cannot access this in below class dog, if we try it will give error.
    constructor(name) {
        this.name = name;
    }
}
class dog extends animal {
    constructor(name) {
        super(name); // here we are using super keyword to call the constructor of the parent class animal, so that we can initialize the name property in the parent class, super keyword is used to call the constructor of the parent class and also to access the properties and methods of the parent class
    }
    getValue() {
        console.log(this.name); // here we cannot access animalAge property(this.animalAge) because it is private in parent class animal, even with inheritance we cannot access private properties of parent class, if we try to access it will give error, but we can access name property because it is public in parent class animal
    }
}
let d1 = new dog("tommy");
d1.getValue(); // here we are calling getValue method of dog class using the object d1, this will print the name property of the dog class which is inherited from animal class, so it will print "tommy"
// Access modifiers in ts
class person {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    } // here we have used readonly access modifier for name property, which means we can only assign value to name property at the time of object creation and after that we cannot change it, if we try to change it will give error, but we can change age
    changeParameters() {
        this.age = 30;
        this.gender = "male"; // here we can't do this.name = "abc" because name is readonly, we can only assign value to name property at the time of object creation and after that we cannot change it, if we try to change it will give error, but we can change age and gender.
    }
}
// Getters and Setters in ts
class userName {
    _name;
    age;
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name; // here we are using getter to get the value of _name property, we can access this getter using the object of the class like this: user1.name, it will return the value of _name property
    }
    set name(value) {
        this._name = value; // here we are using setter to set the value of _name property, we can access this setter using the object of the class like this: user1.name = "new name", it will set the value of _name property to "new name"
    }
}
let user1 = new userName("john", 25); // here we have created an object of class userName and passed the values for _name and age parameters, now we can access the name getter and setter using the object user1 like this: user1.name to get the value of _name property and user1.name = "new name" to set the value of _name property to "new name"
// static memebers in ts
class project1 {
    static version = "1.0.0"; // here we have defined a static property version, which means we can access this property without creating an object of the class, we can access it using the class name like this: project1.version, it will return the value of version property which is "1.0.0"
}
// we dont have to create let s1 = new project`() to access version property like this: s1.version, since we are using static we can directly access it like project1.version 
// Abstract classes in ts
class Cooking {
    gas;
    gasName;
    constructor(gas, gasName) {
        this.gas = gas;
        this.gasName = gasName;
    }
}
class Curry extends Cooking {
    cook() {
        console.log("Cooking curry with " + this.gasName); // here we are implementing the cook method of Cooking class in Curry class, since cook method is abstract in Cooking class, we must implement it in Curry class, if we don't implement it then it will give error because cook method is abstract and must be implemented by the subclass that inherits from Cooking class
    }
}
let c1 = new Curry(5, "LPG"); // here we have created an object of class Curry and passed the values for gas and gasName parameters, now we can access the cook method of Curry class using the object c1 like this: c1.cook(), it will print "Cooking curry with LPG" because we have implemented the cook method in Curry class and it is using the gasName property which is inherited from Cooking class to print the name of gas used for cooking curry
c1.cook(); // here we are calling cook method of Curry class using the object c1, this will print "Cooking curry with LPG" because we have implemented the cook method in Curry class and it is using the gasName property which is inherited from Cooking class to print the name of gas used for cooking curry
// So basically abstract class is a class that cannot be instantiated, it is used as a base class for other classes to inherit from, it can have abstract methods which must be implemented by the subclasses that inherit from it, but in this example we haven't defined any abstract method in Cooking class, we can still create an object of Curry class and pass the values for gas and gasName parameters because Curry class is inheriting from Cooking class and Cooking class has a constructor that takes gas and gasName parameters, so we can create an object of Curry class like this: let c1 = new Curry(5, "LPG"), now we can access the properties gas and gasName using the object c1 like this: c1.gas and c1.gasName.
// definition of abstract class: abstract class is a class that cannot be instantiated, it is used as a base class for other classes to inherit from, it can have abstract methods which must be implemented by the subclasses that inherit from it, but it can also have regular methods and properties that can be accessed by the subclasses that inherit from it.
//# sourceMappingURL=app.js.map