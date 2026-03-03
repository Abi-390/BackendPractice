### TYPESCRIPT DOCS 

- Create a folder for typescript
- installation : npm i typescript -g --> This will install typescript globally
- Compiling a ts file : tsc filename or tsc --watch : This will auto compile while coding no need to compile again and again
- tsc --init : Will create the tsconfigc file which is basically setting for typescript rules

# BASIC TYPES

- TypeScript basically has two types: Premitive types and Reference types.
- Premitive type--> Number , String , Boolean
- Any where you se [],() or {} this a reference type . In reference type basically suppose let a= [1,2,3] and b=a. Now if we push 4 to b ,b becomes [1,2,3,4] but since array is reference type along it b , a will also become [1,2,3,4].
- enum is key value pair kind of similar to objects where you can in future access the properties inside the enum
- If we dont assign type to a variable with automatically get the type 'any'. In this type can set any kind of value like string,number etc to the variable.
- in case of unknown type first we need to check the type with condition {eg:if(typeof a==="string")a.toUpperCase()} after that only we use run any method
- 