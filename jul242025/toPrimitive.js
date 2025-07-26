let obj = {};

console.log(10 - obj);


let obj1 = {

}

console.log(100 - obj1);

let obj2 = {x: 9, valueOf(){return "99"} }
console.log(100 - obj2);

let obj3 = {x: 9, toString(){return "98"} }
console.log(100 - obj3);

let obj4 = {x: 7, toString() {return {}} }
console.log(100 - obj4);  // type error case 


+10;
