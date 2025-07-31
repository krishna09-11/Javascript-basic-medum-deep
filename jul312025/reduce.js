const arr = [1,2,3,4,5, 6];
function add(previousValue, currentvalue){
    return previousValue + currentvalue;

}

const result = arr.reduce(add);
console.log(result);