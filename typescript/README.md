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
- If we dont assign type to a variable will automatically get the type 'any'. In this type can set any kind of value like string,number etc to the variable.
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
    constructor(public name: string){
        this.name = name;
         }
}

- Here we are using this keyword to assign the value of name parameter to the name property of the class, this keyword refers to the current object of the class, so when we create an object of class bottleMaker and pass a value for name parameter then it will assign that value to the name property of that object. 

- Basically its like public name; constructor(name: string) {this.name = name;} so inside constructor it takes the parameter name and assigns it to the property name of the class using this keyword, this is a shorthand way of writing the constructor and initializing the properties of the class in one line.