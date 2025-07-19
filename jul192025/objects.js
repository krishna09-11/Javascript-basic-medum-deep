let x = { name: "krishna" , age : 25};
let y = {
    name : "Muddu",
    age : 25
}
// access any value using the key 
// from a value cant access a key 
// objects are mutable
console.log(x["name"]);
console.log(y.name);

//updating object 
y.name = "jsdev"
console.log(y.name);

// add a key value pair 
x.marks = 25;
console.log(x);

// delete akey value pair 
delete x.marks;
console.log(x);