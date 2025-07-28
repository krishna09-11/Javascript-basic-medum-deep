// function fun(fn){
//     console.log('how much fun..?');
//     fn();
// }

// fun(function askingAbtFun () {
//     console.log('wo so much fun');
//     console.trace()

// })

function f(){
    return "20"
}

function y (){
    return "10"
}

var i = 10;

var res = (function callIifi(i){
    if(i%2 == 0) return f();
    else return y();

})();

console.log(res);


