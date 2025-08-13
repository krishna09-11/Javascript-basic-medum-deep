console.log("start the file exec");

setTimeout (function timer1(){
    console.log("timer one exectuted in 0s ")
}, 0 );

for(i = 0 ; i <= 100000000 ; i ++){
    //some exec
}

let x = Promise.resolve("krishna is promise");

x.then(function fullfill(value){
    console.log("whose promise", value);
})

setTimeout (function timer2(){
    console.log("timer 2 is executed")
}, 0);