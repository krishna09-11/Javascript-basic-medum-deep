"use strict"
let teacher = "A.L.N Reddy";  // Global scope

function fun(){
     var teacher = "G.V Adhinarayana";  // functional Scope
     console.log(teacher);
     context = "JS";
     console.log(context);

}

function gun(){
    var student = "Krishna";
    console.log(student);

}
// console.log(context); // throws error
fun();
gun();
console.log(teacher);
console.log(context); // compiles without error and return o/p
