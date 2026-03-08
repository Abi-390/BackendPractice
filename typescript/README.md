# TYPESCRIPT DOCS 

- Create a folder for typescript
- installation : npm i typescript -g --> This will install typescript globally
- Compiling a ts file : tsc filename or tsc --watch : This will auto compile while coding no need to compile again and again
- tsc --init : Will create the tsconfigc file which is basically setting for typescript rules

## BASIC TYPES

- TypeScript basically has two types: Premitive types and Reference types.
- Premitive type--> Number , String , Boolean
- Any where you se [],() or {} this a reference type . In reference type basically suppose let a= [1,2,3] and b=a. Now if we push 4 to b ,b becomes [1,2,3,4] but since array is reference type along it b , a will also become [1,2,3,4].
- enum is key value pair kind of similar to objects where you can in future access the properties inside the enum
- If we dont assign type ( and dont give a value to the variable also) to a variable, it will automatically get the type 'any'. In this type can set any kind of value like string,number etc to the variable.
- in case of unknown type first we need to check the type with condition {eg:if(typeof a==="string")a.toUpperCase()} after that only we use run any method
- If a function doesnt return anything then we need to put it as type void
- let e:string|number; here we are using union( '|' ),that mean value of e can either be string or number
- type inference is typescript automatically knowing type of a value with even type being set
- type annoation is basically assigning type or types

### Interface

- interface is basically face of an object, we use it tell the types of the properties inside an object.In type script if we dont use interface to tell the types of object we wont be able to access the object properties.
- interface Admin extends User--> basiclly admin has all the properties of User interface along with its own property
- If we make multiple interfaces with same name their properties get merged

### Type aliases

-  Basically we can make our own types (eg:type sentence = string; let f:sentence;)
-  Union Operator ( | )-->type value = number | string | null;let g:value; (Now g can be either number or string or null)
- type value = number | string | null;let g: value; --> Now g can be either number or string or null
- type arg = string | null; function abcde(obj: arg) {}; abcde("hello");-->here in argument we must pass object with type string or null, if we pass any other type then it will give error because we have defined type of obj as arg and arg can only be string or null

### Classes in Ts

- class software{
    fronted = "react";
    backend = "node";
    database = "mongoDB";
} --> this is how we can create a class in ts, here we have created a class software with 3 properties frontend, backend and database

- let s1 = new software();-->here we have created an object s1 of class software, now we can access the properties of class software using s1 like s1.frontend, s1.backend etc

- In case of a noraml class it has fixed properties and methods

### Constructor in Ts

- Since in case of a noraml class it has fixed properties and methods but constructor allows us to create dynamic properties and methods based on the parameters we pass while creating an object of the class, this is one of the main advantages of using constructor in a class, it allows us to create objects with different properties and methods based on the parameters we pass while creating the object.

- Eg: class humanMaker{ age = 0;
constructor(public name:string, public ishandome:boolean){}
}
let h1 = new humanMaker("john", true);

- In the above example basically : 
1. We created a class name humanMaker. 
2. we have defined a property age and initialized it with 0, now whenever we create an object of class humanMaker then age will be 0 by default, we haven't put age in constructor because we want it to be 0 by default for every object of class humanMaker, if we want to change the value of age then we can do it using the object of the class like s1.age = 25 etc.
3. We have created a constructor which will be called when we create an object of class humanMaker, here we have also defined the properties name and ishandome in the constructor itself, so we don't need to define them separately like we did in software class.
4. we have created an object of class humanMaker and passed the values for name and ishandome properties. With constructor we can have class with user defined properties and methods also we can set fixed properties and  methods for that class just by defining them outside the constructor like we made age property in humanMaker class
5. Note: constructor always runs first when we create an object of a class, it is used to initialize the properties of the class, here we have initialized the properties name and ishandome using the constructor parameters, we have also made them public so that we can access them outside the class using the object of the class
6. Also we can set constructor parameters as public, private or protected, if we set it as public then we can access it outside the class using the object of the class, if we set it as private then we can only access it inside the class and if we set it as protected then we can access it inside the class and also in the subclasses of that class.

### this key word in ts

- Basically this keyword is used to access the properties which are not defined inside the method but are defined in the class
- A function inside a class is called method
- Eg: class xyz {
    name = "abc";
     changename(){
        this.name = "def";
        }

    changeSomething(){
        console.log('hey');
        this.changename();
         }
}

* Example with constructor and this keyword :

- class bottleMaker{
     public name;
    constructor(name: string){
        this.name = name;
         }
}

- Here we are using this keyword to assign the value of name parameter to the name property of the class, this keyword refers to the current object of the class, so when we create an object of class bottleMaker and pass a value for name parameter then it will assign that value to the name property of that object. 

-  Better way to write is like this: class bottleMaker{constructor( public name:string){}}

### Access Specifiers in ts

-  In short public ,private and protected are access specifiers in ts that determine the accessibility of the properties and methods of a class, public means accessible from anywhere, private means accessible only within the class and protected means accessible within the class and also in the subclasses that inherit from this class.

- But if we access private or protected outisde the class then it will give error in ts but in browser it will still change the value of private or protected property because in js there is no concept of private or protected properties, it is just a convention to use _ before the name of private properties to indicate that they are private, but in ts we have actual access specifiers that enforce the accessibility of the properties and methods of a class.

- Access Specifiers

public
- Accessible from anywhere
- Default modifier

private
- Accessible only within the class

protected
- Accessible within the class
- Accessible in subclasses (classes that extend it)
- Not accessible outside

- Eg : Class car {
    constructor ( public name:string,private model:string, protected year:number)
}

- public means we can access this property from anywhere, it is the default access specifier in ts
- private means we can only access this property within the class, we cannot access it outside the class using the object of the class
- protected means we can access this property within the class and also in the subclasses that inherit from this class, but we cannot access it outside the class using the object of the class

### Inheritane in Ts

-  class dog extends animal{
    constructor(name:string){
        super(name); 
    }

    getValue(){
        console.log(this.name)
    }
  }

  let d1 = new dog("tommy");
  d1.getValue(); 

- 1. private animalAge :number = 0; //Now animalAge is only accessible within this class, even with inheritance we cannot access this in below class dog, if we try it will give error.
- 2. super(name); // here we are using super keyword to call the constructor of the parent class animal, so that we can initialize the name property in the parent class, super keyword is used to call the constructor of the parent class and also to access the properties and methods of the parent class.
- 3.  console.log(this.name)// here we cannot access animalAge property(this.animalAge) because it is private in parent class animal, even with inheritance we cannot access private properties of parent class, if we try to access it will give error, but we can access name property because it is public in parent class animal
- 4.  d1.getValue(); // here we are calling getValue method of dog class using the object d1, this will print the name property of the dog class which is inherited from animal class, so it will print "tommy"
  

-  Overall explaination the inheritance example given above is that we have a parent class animal with a private property animalAge and a public property name, then we have a child class dog that extends the parent class animal, in the child class dog we have a constructor that calls the constructor of the parent class using super keyword to initialize the name property, we also have a method getValue that tries to access both name and animalAge properties, since animalAge is private in the parent class we cannot access it in the child class even with inheritance, but we can access name property because it is public in the parent class, when we create an object of class dog and call getValue method it will print the name and animalAge properties of the dog object, since we haven't changed the value of animalAge it will print 0 by default.


### Access Modifiers

-  Access modifiers are used to control the accessibility of properties and methods of a class, public means we can access it from anywhere, private means we can only access it within the class, protected means we can access it within the class and also in the subclasses that inherit from this class, readonly means we can only assign value to it at the time of object creation and after that we cannot change it.

- Eg :  class person {
    constructor(public readonly name: string, private age: number, protected gender: string) {} 
    changeParameters(){
        this.age = 30;
        this.gender = "male";
         }

} 

- 1. constructor(public readonly name: string, private age: number, protected gender: string) {}--> here we have used readonly access modifier for name property, which means we can only assign value to name property at the time of object creation and after that we cannot change it, if we try to change it will give error, but we can change age
- 2.   this.gender = "male";-->here we can't do this.name = "abc" because name is readonly, we can only assign value to name property at the time of object creation and after that we cannot change it, if we try to change it will give error, but we can change age and gender.

### Getters and Setters in ts

- getters and setters are used to get and set the values of properties in a class, they provide a way to control the access to the properties of a class, we can use

- Eg : class userName{
    constructor(public _name:string, public age:number){
    }
    get name(){
        return this._name;
        }

    set name(value : string){
        this._name = value; 
        }
}

let user1 = new userName("john", 25);

- 1.  return this._name; --> here we are using getter to get the value of _name property, we can access this getter using the object of the class like this: user1.name, it will return the value of _name property.
- 2.  this._name = value; --> here we are using setter to set the value of _name property, we can access this setter using the object of the class like this: user1.name = "new name", it will set the value of _name property to "new name".
- 3. let user1 = new userName("john", 25);--> here we have created an object of class userName and passed the values for _name and age parameters, now we can access the name getter and setter using the object user1 like this: user1.name to get the value of _name property and user1.name = "new name" to set the value of _name property to "new name".
- 4. Note : constructor(public _name:string, public age:number) --> _name here because if we put name here then in getter we wont be able to use get name() it will give duplicate identifier error because we have already used name as a parameter in constructor, so we use _name to avoid this error and then we can use get name() and set name() to access and modify the value of _name property

### Static members

- static memebers definition is like this: static propertyName = value; and we can access it using className.propertyName without creating an object of the class.

- Eg: class project1{
    static version = "1.0.0";
    }

- 1. static version = "1.0.0"; --> here we have defined a static property version, which means we can access this property without creating an object of the class, we can access it using the class name like this: project1.version, it will return the value of version property which is "1.0.0".
- 2. we dont have to create let s1 = new project`() to access version property like this: s1.version, since we are using static we can directly access it like project1.version 

### Abstract class

- So basically abstract class is a class that cannot be instantiated, it is used as a base class for other classes to inherit from, it can have abstract methods which must be implemented by the subclasses that inherit from it.

-  definition of abstract class: abstract class is a class that cannot be instantiated, it is used as a base class for other classes to inherit from, it can have abstract methods which must be implemented by the subclasses that inherit from it, but it can also have regular methods and properties that can be accessed by the subclasses that inherit from it.

- Eg: abstract class Cooking {
    constructor(protected gas: number, public gasName: string) {}
    abstract cook(): void;
    }
    class Curry extends Cooking {

  cook() {
    console.log("Cooking curry with " + this.gasName);
    }

}

let c1 = new Curry(5,"LPG");
c1.cook();

- 1. abstract class Cooking { --> here we have defined an abstract class Cooking
- 2.  abstract cook(): void;--> here we have defined an abstract method cook, which means any class that inherits from Cooking class must implement this cook method, if we try to create an object of a class that inherits from Cooking class without implementing cook method then it will give error because cook method is abstract and must be implemented by the subclass that inherits from Cooking class
- 3. console.log("Cooking curry with " + this.gasName);--> here we are implementing the cook method of Cooking class in Curry class, since cook method is abstract in Cooking class, we must implement it in Curry class, if we don't implement it then it will give error because cook method is abstract and must be implemented by the subclass that inherits from Cooking class
- 4. let c1 = new Curry(5,"LPG");--> here we have created an object of class Curry and passed the values for gas and gasName parameters, now we can access the cook method of Curry class using the object c1 like this: c1.cook(), it will print "Cooking curry with LPG" because we have implemented the cook method in Curry class and it is using the gasName property which is inherited from Cooking class to print the name of gas used for cooking curry
- 5. c1.cook();--> here we are calling cook method of Curry class using the object c1, this will print "Cooking curry with LPG" because we have implemented the cook method in Curry class and it is using the gasName property which is inherited from Cooking class to print the name of gas used for cooking curry


# Function types in ts

- Eg: function pqrs(name:string,callback:(value:string)=>void){
    callback('hey')
    }

pqrs("john",(value:string)=>{
     console.log(value)
})

- 1. function pqrs(name:string,callback:(value:string)=>void)--> here we have defined a function pqrs that takes two parameters, name which is of type string and callback which is a function that takes a parameter value of type string and returns void, this means that the callback function doesn't return anything, it just performs some action with the value parameter, we can call this pqrs function and pass a string value for name and a callback function that takes a string parameter and returns void, like this: pqrs("john",(value:string)=>{ console.log(value) }), here we are passing "john" as the name parameter and a callback function that takes a string parameter value and logs it to the console, when we call pqrs function it will execute the callback function with the value "john" and it will log "john" to the console .
- 2.  callback('hey') // here we are calling the callback function with the value "hey", so when we call pqrs function it will execute the callback function with the value "hey" and it will log "hey" to the console, we can change this value to anything we want, like this: callback(name) then it will log the value of name parameter which is "john" to the console.
- 3. pqrs("john",(value:string)=>{})--> here we are calling pqrs function and passing "john" as the name parameter and a callback function that takes a string parameter value and logs it to the console, when we call pqrs function it will execute the callback function with the value "john" and it will log "john" to the console 


### Rest parameters in ts

-  Rest parameters basically used when we don't know how many arguments will be passed to the function, it allows us to pass any number of arguments to the function and it will treat them as an array, so we can perform any array operations on this rest parameter inside the function to calculate the sum of these numbers or do any other operations as needed.

- Eg: function sum (...arr:number[]){};sum(1,2,3,4,5);

- 1.  function sum (...arr:number[]){} --> here we have defined a function sum that takes rest parameters, rest parameters are used to represent an indefinite number of arguments as an array, here we have defined rest parameters as arr:number[], which means that we can pass any number of arguments to sum function and it will treat them as an array of numbers, so when we call sum function with any number of arguments it will treat them as an array and we can perform any array operations on this arr parameter inside the sum function to calculate the sum of these numbers or do any other operations as needed.
- 2. sum(1,2,3,4,5); --> here we are calling sum function and passing 5 numbers as arguments, since we have defined rest parameters in sum function as arr:number[], it means that we can pass any number of arguments to sum function and it will treat them as an array of numbers, so when we call sum function with 5 numbers it will treat them as an array [1,2,3,4,5] and we can perform any array operations on this arr parameter inside the sum function to calculate the sum of these numbers or do any other operations as needed.

- So basically all the numbers that are sent as arguments to the sum function will be treated as an array of numbers and we can perform any array operations on this arr parameter inside the sum function to calculate the sum of these numbers or do any other operations as needed.


### Function overloading

- For other programming languages fnc overloading is basically function with same name but different parameters or different return type or both, but in ts we need to make function signatures first and then we need to implement the function body that corresponds to all these signatures, this is how we can achieve function overloading in ts, it allows us to create functions that can handle different types of arguments and return types while still maintaining type safety and providing meaningful error messages when the function is called with invalid arguments.

- Eg : function abcdef(x:string):void;
function abcdef(x:number, y:string):number;
function abcdef(x: any, y?: any): any {
     if(typeof x === "string"){
        console.log("String signature called with value: " + x);
    } else if(typeof x === "number" && typeof y === "string"){
        console.log("Number and String signature called with values: " + x + " and " + y);
        return x;
        }
    else  throw new Error('Invalid arguments');
}

- 1. function abcdef(x:string):void; --> here we have defined a function signature for abcdef function that takes a string parameter x and returns void, this means that when we call abcdef function with a string argument it will execute the function body that corresponds to this signature.
- 2. function abcdef(x:number, y:string):number; --> here we have defined another function signature for abcdef function that takes a number parameter x and a string parameter y and returns a number, this means that when we call abcdef function with a number and a string argument it will execute the function body that corresponds to this signature, we can define as many signatures as we want for the same function to allow different types of arguments and return types, but we must implement the function body that corresponds to all these signatures.
- 3. function abcdef(x: any, y?: any): any {} --> here we have implemented the function body for abcdef function that corresponds to all the signatures we have defined above, since we have defined multiple signatures for abcdef function, we must implement a function body that can handle all these signatures, so we have defined the parameters as x:any and y?:any, which means that x can be of any type and y is an optional parameter that can also be of any type, now inside the function body we can check the types of x and y to determine which signature is being called and execute the corresponding logic for that signature.
- 4. return x; --> since this signature returns a number, we can return x which is a number
- 5. else  throw new Error('Invalid arguments');--> here we are throwing an error if the arguments passed to abcdef function do not match any of the defined signatures, this is a good practice to handle cases where the function is called with invalid arguments, it helps to catch errors early and provide meaningful error messages to the developers who are using this function.



## Generics in ts

### Generic Functions:

- So basically suppose we want to have a function that accepts anything as parameter or argument and returns the same type value as output, for that we can use 'any' type in ts but it is not a good practice because it doesn't provide type safety, so instead of using any we can use generics to achieve this, generics allow us to create resuable components that can work with any data type while still providing type safety.

- Eg : function acceptAnything<T>(value:T):T{
         return value;
  }
  let result1 = acceptAnything<string>("hello");
  let result2 = acceptAnything<number>(123);
  let result3 = acceptAnything(true);

- 1.   function acceptAnything<T>(value:T):T{} --> here we have defined a generic function acceptAnything that takes a type parameter T ( we can put it anything like A, B, C.... but T is a common convention ), this means that when we call acceptAnything function we can specify the type of T and it will return a value of that type, for example if we call acceptAnything<string>("hello") then T will be string and it will return a string value "hello", if we call acceptAnything<number>(123) then T will be number and it will return a number value 123, this way we can create a reusable function that can work with any data type while still providing type safety.
- 2.   let result1 = acceptAnything<string>("hello"); --> here we are calling acceptAnything function and specifying the type parameter T as string, so it will return a string value "hello" and we are storing it in result1 variable which is of type string.
- 3.   let result2 = acceptAnything<number>(123); --> here we are calling acceptAnything function and specifying the type parameter T as number, so it will return a number value 123 and we are storing it in result2 variable which is of type number.
- 4.   let result3 = acceptAnything(true); --> here we are calling acceptAnything function without specifying the type parameter T, in this case TypeScript will infer the type of T based on the argument passed to the function, since we passed a boolean value true, TypeScript will infer T as boolean and it will return a boolean value true, so result3 will be of type boolean.


### Generic interfaces

- So generics in interface also similar to generics in functions, it allows us to create reusable interfaces that can work with any data type while still providing type safety, we can specify the type parameter when we use the interface to create objects that conform to that interface with the specified type.

- Eg: interface Data<T>{
  name : string,
  age : number,
  key : T
}

- 1. key : T -->since we dont know key type like key can be number also string also boolean etc, so we are using generic type parameter T to represent the type of key property, this way we can create a reusable interface that can work with any data type for key property while still providing type safety.
- 2. function processData(obj : Data<string | number>){}--> here we have defined a function processData that takes an object of type Data<string | number>, this means that the key property of the object passed to processData function can be either a string or a number, so when we call processData function we need to pass an object that conforms to the Data<string | number> interface, which means that the key property of that object must be either a string or a number, if we try to pass an object that does not conform to this interface then it will give an error because it does not match the expected type for the key property.
- 3. processData({ name: "john", age: 25, key: "abc" }); --> here we are calling processData function and passing an object that conforms to the Data interface with T specified as string, so the key property must be of type string, if we try to pass a value of a different type for key property it will give an error because it does not conform to the Data<string> interface.
- 4. processData({ name: "john", age: 25, key: 123 }); --> here we are trying to call processData function and passing an object that does not conform to the Data<string | number> interface because the key property is of type boolean instead of string or number, this will give an error because it does not conform to the Data<string | number> interface, if we want to use a boolean for key property then we should specify T as boolean in the Data interface like this: Data<boolean> and then we can pass a boolean value for key property without any error.


### Generic classes

- Classes are used to create reusable classes that can work with any data type while still providing type safety, we can specify the type parameter when creating an object of the generic class and it will ensure that the properties and methods of that object are of the specified type, this way we can avoid code duplication and make our code more flexible and maintainable.

- Eg : class foodMaker<T>{
  constructor(public key:T){}
}

let f1 = new foodMaker<string>("abc");
let f2 = new foodMaker<number>(123);

- 1.   constructor(public key:T){} --> here we have defined a generic class foodMaker that takes a type parameter T, this means that when we create an object of foodMaker class we can specify the type of T and it will determine the type of key property for that object, for example if we create an object like this: let f1 = new foodMaker<string>("abc") then T will be string and the key property of f1 will be of type string and it will be initialized with the value "abc", if we create another object like this: let f2 = new foodMaker<number>(123) then T will be number and the key property of f2 will be of type number and it will be initialized with the value 123, this way we can create a reusable class that can work with any data type for key property while still providing type safety.
- 2. let f1 = new foodMaker<string>("abc"); --> here we are creating an object of class foodMaker and specifying the type parameter T as string, so the key property of this object will be of type string and we are passing a string value "abc" for key property.
- 3.let f2 = new foodMaker<number>(123); --> here we are creating an object of class foodMaker and specifying the type parameter T as number, so the key property of this object will be of type number and we are passing a number value 123 for key property.
 

#### Exception 

- Eg : function Exception<T>(a:T,b:T):T{
  return 'hey' as T;
  }

 Exception<string>('hello','world');

- 1.   return 'hey' as T;--> here we have defined a function Exception that takes two parameters a and b of type T and returns a value of type T, but in the function body we are returning a string value "hey" and using type assertion to assert that it is of type T, this is an exception in TypeScript where we can use type assertions to override the type checking and tell the compiler to treat a value as a different type, but we should use this feature with caution because it can lead to runtime errors if we assert a value to be of a type that it is not actually compatible with.
 - 2.  Exception<string>('hello','world'); --> here we are calling Exception function and specifying the type parameter T as string, so it will return a string value 'hey', but since we are using a type assertion to assert that 'hey' is of type T (which is string in this case), it will not give an error even though 'hey' is not actually of type string, this is an exception in TypeScript where we can use type assertions to override the type checking and tell the compiler to treat a value as a different type, but we should use this feature with caution because it can lead to runtime errors if we assert a value to be of a type that it is not actually compatible with.
 - 3.  Exception<string>('hello','world'); --> here we are calling Exception function and specifying the type parameter T as string, so it will return a string value 'hey', but since we are using a type assertion to assert that 'hey' is of type T (which is string in this case), it will not give an error even though 'hey' is not actually of type string, this is an exception in TypeScript where we can use type assertions to override the type checking and tell the compiler to treat a value as a different type, but we should use this feature with caution because it can lead to runtime errors if we assert a value to be of a type that it is not actually compatible with.
- 4.  Basically in typescript "hey" is not a string its a string literal type,so when we assert 'hey' as string we are telling the compiler to treat this string literal type as a string type.


## Type Gaurds

-  Basically type guards is type narrowing technique and type narrowing is if we are not sure about the type of a variable and we want to perform some operations on that variable based on its type, then we can use 'typeof' operator or 'instanceof' operator to check the type of that variable and then perform the operations accordingly, this is called type guards or type narrowing in TypeScript.

 

