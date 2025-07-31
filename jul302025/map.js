 function square(ele){
    return ele*ele;
 }

 function cube(x){
    return x*x*x;
 }

 function evenOrOdd(x){
    if(x%2 == 0){
        return "Even"
    } else{
        return "Odd"
    }
 }

const arr = [2,5,7,8];
const result = arr.map(square);
 console.log(result);

 const cubeResult = arr.map(cube);
 console.log(cubeResult);

 const evenOrOddResult = arr.map(evenOrOdd);
 console.log(evenOrOddResult);


 