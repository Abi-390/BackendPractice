var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = ["Abi", 8]; // this is a tuple where we need to tell what will be order of dataypes in the array in ts
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {})); // enum is kind of similar to objects where we can in future access admin like UserRoles.ADMIN or guest like UserRoles.GUEST etc
var a; // assigning type to a variable
var b; // since we have not given type to varibale b hence the type that will be assigned to b will be 'any'
var c; // unknown is a type that can hold any value but we need to check the type of value before using it, it is safer than any because it forces us to do type checking before using the value
c = 12;
c = "ab";
if (typeof c === "string")
    c.toLocaleUpperCase(); // in case of unknown type first we need to check the string after that only we use run any method
function abcd() {
    console.log("hey");
} // if a function doesn't return anything then we put type void
var d; //setting  type of d as null
var e; //here we are using union,that mean value of e can either be string or number
function getDataOfUser(obj) { }
getDataOfUser({ name: "abi", email: "a@example.com", password: "123" });
function abc(obj) {
    // here we can get obj.admin
}
var f;
var g; // Now g can be either number or string or null
function abcde(obj) { }
abcde("hello"); // here in argument we must pass object with type string or null, if we pass any other type then it will give error because we have defined type of obj as arg and arg can only be string or null
// Now we will see about classes in ts
var software = /** @class */ (function () {
    function software() {
        this.fronted = "react";
        this.backend = "node";
        this.database = "mongoDB";
    }
    return software;
}()); // this is how we can create a class in ts, here we have created a class software with 3 properties frontend, backend and database
var s1 = new software(); // here we have created an object s1 of class software, now we can access the properties of class software using s1 like s1.frontend, s1.backend etc
//constructor in ts
var humanMaker = /** @class */ (function () {
    function humanMaker(name, ishandome) {
        this.name = name;
        this.ishandome = ishandome;
        this.age = 0; // here we have defined a property age and initialized it with 0, now whenever we create an object of class humanMaker then age will be 0 by default, we haven't put age in constructor because we want it to be 0 by default for every object of class humanMaker, if we want to change the value of age then we can do it using the object of the class like s1.age = 25 etc
        // here we have created a constructor which will be called when we create an object of class humanMaker, here we have also defined the properties name and ishandome in the constructor itself, so we don't need to define them separately like we did in software class
    } // constructor always runs first when we create an object of a class, it is used to initialize the properties of the class, here we have initialized the properties name and ishandome using the constructor parameters, we have also made them public so that we can access them outside the class using the object of the class
    return humanMaker;
}());
var h1 = new humanMaker("john", true); // here we have created an object of class humanMaker and passed the values for name and ishandome properties, now we can access these properties using the object of the class like this:
//music player with constructor
var muscicPlayer = /** @class */ (function () {
    function muscicPlayer(name, artist, album, free, length, thumbnail) {
        if (thumbnail === void 0) { thumbnail = "somethumbnail.jpg"; }
        this.name = name;
        this.artist = artist;
        this.album = album;
        this.free = free;
        this.length = length;
        this.thumbnail = thumbnail;
    }
    return muscicPlayer;
}()); // here we have created a class musicPlayer with a constructor that takes 6 parameters, we have also given a default value to thumbnail parameter, so if we don't pass any value for thumbnail when creating an object of musicPlayer then it will take the default value "somethumbnail.jpg"
var song1 = new muscicPlayer("song1", "artist1", "album1", true, 3.5); // here we have created an object of class musicPlayer and passed the values for name, artist, album, free and length parameters, we haven't passed any value for thumbnail parameter so it will take the default value "somethumbnail.jpg"
//this keyword in ts
var xyz = /** @class */ (function () {
    function xyz() {
        this.name = "abc";
    }
    xyz.prototype.changename = function () {
        this.name = "def"; // here we are using this keyword to change the value of name property, this keyword refers to the current object of the class, so when we call changename method using an object of class xyz then it will change the value of name property for that object
    };
    xyz.prototype.changeSomething = function () {
        console.log("hey");
        this.changename(); // here we are calling changename method inside changeSomething method using this keyword, so when we call changeSomething method using an object of class xyz then it will first print 'hey' and then it will call changename method which will change the value of name property for that object
    };
    return xyz;
}());
// Example with constructor and this keyword
var bottleMaker = /** @class */ (function () {
    function bottleMaker(name) {
        this.name = name; // here we are using this keyword to assign the value of name parameter to the name property of the class, this keyword refers to the current object of the class, so when we create an object of class bottleMaker and pass a value for name parameter then it will assign that value to the name property of that object
    }
    return bottleMaker;
}()); // better way to write is like this: class bottleMaker{ constructor( public name:string){} }
// better way 
var bottle = /** @class */ (function () {
    function bottle(name) {
        this.name = name;
    }
    return bottle;
}());
var b1 = new bottle('coke');
//Access specifiers in ts
var car = /** @class */ (function () {
    function car(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    return car;
}());
// Inheritance in ts
var vehicle = /** @class */ (function () {
    function vehicle(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    return vehicle;
}());
var bike = /** @class */ (function (_super) {
    __extends(bike, _super);
    function bike(name, model, year, type) {
        var _this = _super.call(this, name, model, year) || this; // here we are using super keyword to call the constructor of the parent class vehicle, so that we can initialize the properties name, model and year in the parent class, super keyword is used to call the constructor of the parent class and also to access the properties and methods of the parent class
        _this.type = type;
        return _this;
    }
    return bike;
}(vehicle));
// anther example of inheritance
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
        this.animalAge = 0; //Now animalAge is only accessible within this class, even with inheritance we cannot access this in below class dog, if we try it will give error.
    }
    return animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(name) {
        return _super.call(this, name) || this; // here we are using super keyword to call the constructor of the parent class animal, so that we can initialize the name property in the parent class, super keyword is used to call the constructor of the parent class and also to access the properties and methods of the parent class
    }
    dog.prototype.getValue = function () {
        console.log(this.name); // here we cannot access animalAge property(this.animalAge) because it is private in parent class animal, even with inheritance we cannot access private properties of parent class, if we try to access it will give error, but we can access name property because it is public in parent class animal
    };
    return dog;
}(animal));
var d1 = new dog("tommy");
d1.getValue(); // here we are calling getValue method of dog class using the object d1, this will print the name property of the dog class which is inherited from animal class, so it will print "tommy"
// Access modifiers in ts
var person = /** @class */ (function () {
    function person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    } // here we have used readonly access modifier for name property, which means we can only assign value to name property at the time of object creation and after that we cannot change it, if we try to change it will give error, but we can change age
    person.prototype.changeParameters = function () {
        this.age = 30;
        this.gender = "male"; // here we can't do this.name = "abc" because name is readonly, we can only assign value to name property at the time of object creation and after that we cannot change it, if we try to change it will give error, but we can change age and gender.
    };
    return person;
}());
// Getters and Setters in ts
var userName = /** @class */ (function () {
    function userName(_name, age) {
        this._name = _name;
        this.age = age;
    }
    Object.defineProperty(userName.prototype, "name", {
        get: function () {
            return this._name; // here we are using getter to get the value of _name property, we can access this getter using the object of the class like this: user1.name, it will return the value of _name property
        },
        set: function (value) {
            this._name = value; // here we are using setter to set the value of _name property, we can access this setter using the object of the class like this: user1.name = "new name", it will set the value of _name property to "new name"
        },
        enumerable: false,
        configurable: true
    });
    return userName;
}());
var user1 = new userName("john", 25); // here we have created an object of class userName and passed the values for _name and age parameters, now we can access the name getter and setter using the object user1 like this: user1.name to get the value of _name property and user1.name = "new name" to set the value of _name property to "new name"
// static memebers in ts
var project1 = /** @class */ (function () {
    function project1() {
    }
    project1.version = "1.0.0"; // here we have defined a static property version, which means we can access this property without creating an object of the class, we can access it using the class name like this: project1.version, it will return the value of version property which is "1.0.0"
    return project1;
}());
// we dont have to create let s1 = new project`() to access version property like this: s1.version, since we are using static we can directly access it like project1.version 
// Abstract classes in ts
var Cooking = /** @class */ (function () {
    function Cooking(gas, gasName) {
        this.gas = gas;
        this.gasName = gasName;
    }
    return Cooking;
}());
var Curry = /** @class */ (function (_super) {
    __extends(Curry, _super);
    function Curry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Curry.prototype.cook = function () {
        console.log("Cooking curry with " + this.gasName); // here we are implementing the cook method of Cooking class in Curry class, since cook method is abstract in Cooking class, we must implement it in Curry class, if we don't implement it then it will give error because cook method is abstract and must be implemented by the subclass that inherits from Cooking class
    };
    return Curry;
}(Cooking));
var c1 = new Curry(5, "LPG"); // here we have created an object of class Curry and passed the values for gas and gasName parameters, now we can access the cook method of Curry class using the object c1 like this: c1.cook(), it will print "Cooking curry with LPG" because we have implemented the cook method in Curry class and it is using the gasName property which is inherited from Cooking class to print the name of gas used for cooking curry
c1.cook(); // here we are calling cook method of Curry class using the object c1, this will print "Cooking curry with LPG" because we have implemented the cook method in Curry class and it is using the gasName property which is inherited from Cooking class to print the name of gas used for cooking curry
//function types in ts
function pqrs(name, callback) {
    callback('hey'); // here we are calling the callback function with the value "hey", so when we call pqrs function it will execute the callback function with the value "hey" and it will log "hey" to the console, we can change this value to anything we want, like this: callback(name) then it will log the value of name parameter which is "john" to the console
}
pqrs("john", function (value) {
    console.log(value);
});
// Rest parameters in ts
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
} // here we have defined a function sum that takes rest parameters, rest parameters are used to represent an indefinite number of arguments as an array, here we have defined rest parameters as arr:number[], which means that we can pass any number of arguments to sum function and it will treat them as an array of numbers, so when we call sum function with any number of arguments it will treat them as an array and we can perform any array operations on this arr parameter inside the sum function to calculate the sum of these numbers or do any other operations as needed.
sum(1, 2, 3, 4, 5); // here we are calling sum function and passing 5 numbers as arguments, since we have defined rest parameters in sum function as arr:number[], it means that we can pass any number of arguments to sum function and it will treat them as an array of numbers, so when we call sum function with 5 numbers it will treat them as an array [1,2,3,4,5] and we can perform any array operations on this arr parameter inside the sum function to calculate the sum of these numbers or do any other operations as needed.
function abcdef(x, y) {
    if (typeof x === "string") {
        console.log("String signature called with value: " + x);
    }
    else if (typeof x === "number" && typeof y === "string") {
        console.log("Number and String signature called with values: " + x + " and " + y);
        return x; // since this signature returns a number, we can return x which is a number
    }
    else
        throw new Error('Invalid arguments'); // here we are throwing an error if the arguments passed to abcdef function do not match any of the defined signatures, this is a good practice to handle cases where the function is called with invalid arguments, it helps to catch errors early and provide meaningful error messages to the developers who are using this function.
}
// Generics in ts 
// ---Generic functions in ts---
function acceptAnything(value) {
    return value;
}
var result1 = acceptAnything("hello"); // here we are calling acceptAnything function and specifying the type parameter T as string, so it will return a string value "hello" and we are storing it in result1 variable which is of type string.
var result2 = acceptAnything(123); // here we are calling acceptAnything function and specifying the type parameter T as number, so it will return a number value 123 and we are storing it in result2 variable which is of type number.
var result3 = acceptAnything(true); // here we are calling acceptAnything function without specifying the type parameter T, in this case TypeScript will infer the type of T based on the argument passed to the function, since we passed a boolean value true, TypeScript will infer T as boolean and it will return a boolean value true, so result3 will be of type boolean.
// ---Generic interfaces in ts---  
