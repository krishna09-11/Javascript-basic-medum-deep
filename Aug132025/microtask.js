function createPromise() {
    return new Promise(function exec(resolve, reject) {
        setTimeout(function t() {
            console.log("Promise is starting");
            resolve("Done");
        }, 1000);
        
    });
    
}

setTimeout(function process() {
    console.log("Timer executed with 0s");
}, 0);


let p = createPromise();

p.then(
    function fulfillHandler1(value) {
        console.log("We fulfilled 1 with value:", value);
    },
    function rejectionhandler1(error) {
        console.log("Promise rejected 1:", error);
    }
);
p.then(
    function fulfillHandler2(value) {
        console.log("We fulfilled with value 2:", value);
    },
    function rejectionhandler2(error) {
        console.log("Promise rejected 2:", error);
    }
);


for (i= 0 ; i <= 1000000; i ++){}

console.log("ending ")
