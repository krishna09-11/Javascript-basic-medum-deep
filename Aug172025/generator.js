function* genearorFunction(){
    console.log("enetering into generator function");
    yield 1;
    yield 2;
    return 10;  // if we use return return it will stop the execution upto there 

    console.log("in the middle of yield");
    yield 3 ; 
    yield 4;
}

const iter = genearorFunction();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());