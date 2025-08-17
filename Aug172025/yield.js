function* yieldingFunction(){
    console.log("starting  the function");
    const x  = 10; 
    yield 11;
    console.log("Enetering into the yield func");
    const y = x + (yield 30);
    console.log("value of y", y);

}
console.log("start")
const assign = yieldingFunction();
console.log("enter")
console.log(assign.next());
console.log(assign.next());
console.log(assign.next());
console.log(assign.next());