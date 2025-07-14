function EvenOrOdd(num){
    if (num % 2 == 0 ){
        return "EVEN";
    }
    else {
        return "ODD";
    }
}

//Check numbers which are evn or which is evn inbetween 1 tp 50 

for (i = 1; i <=50;  i ++){
    console.log(i,"Is", EvenOrOdd(i))
}