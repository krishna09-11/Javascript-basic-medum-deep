
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function createPromiseWithoutTimeout(){
    return new Promise (function exec(resolve, reject) {
        console.log(" enterig into the promise constructor")
        setTimeout(function (){
            let num = getRandomInt(10);
            if (num % 2 == 0){
                resolve(num);
                console.log(" promise after resolve", p);

            }
            else{
                reject(num);
                console.log(" promise after reject", p);

            }
        },1000)
        console.log("exiting the executor call back")
       
    })
}

console.log(" executing ..")
const p = createPromiseWithoutTimeout();
console.log("we are now waiting promise to complete");
console.log("currently my promise object is ....like", p);
console.log("Executing promises");


p.
    then(function fullfillhandelr1(value){
        console.log(" inside fullfill handler 1 with value", value);
        setTimeout(function t(){console.log("ended o 's timer")}, 0 );
            console.log("exitting the fullfill handler")
    },
        (function rejectionhandler1(value){
            console.log("inside rejected handler  1 with value", value);
            setTimeout(function t(){console.log("ended o 's timer")}, 0 );
            console.log("exitting the rejected handler")
        })
)

p.
    then(function fullfillhandelr2(value){
        console.log(" inside fullfill handler 2 with value", value)
    },
        (function rejectionhandler2(value){
            console.log("inside rejected handler 2 with value", value);
        })
)

for(i = 0; i <=1000; i ++){

}

console.log("ending");