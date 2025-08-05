function timeConsumingByLoop(){
    console.log("Loop starts ")
    for(i = 0; i <= 1000000000; i++){
    }
    console.log("Loop ends ")

}

function timeConsukmedByRunTime0(){
    console.log("Starting Timer")
    setTimeout(function exec0(){
        console.log("Completed the Timer0");
        for(i = 0; i <= 100000000; i ++){
            //some task exec
        }
    },5000) // 5 seconds

}

function timeConsukmedByRunTime1(){
    console.log("Starting Timer1")
    setTimeout(function exec1(){
    console.log("Completed the Timer1");     
    }, 0) //0 seconds

}

function timeConsukmedByRunTime2(){
    console.log("Starting Timer2")
    setTimeout(function exec2(){
    console.log("Completed the Timer2");     

    }, 200)  // 2 milli seconds

}

console.log("hii");
timeConsumingByLoop();
timeConsukmedByRunTime0();
timeConsukmedByRunTime1();
timeConsukmedByRunTime2();
timeConsumingByLoop();
console.log("byy")





// setTimeout (function callfunc(){
//     console.log("calling function");

// },4000);
