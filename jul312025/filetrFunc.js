function oddorEven(x){
    return x % 2 == 0;
}

let b = [1,2,3,4,5,6,7,8,9];

let result = b.filter(oddorEven);
console.log(result);