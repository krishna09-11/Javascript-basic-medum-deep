 a = 5;
 b = 7;
 c = 5;

 if (a == b && b == c && c == a){
    console.log('its an equilateral triangle');
 } 
 else if (a == b  || b ==c || a == c){
    console.log('isolate trianle ');
 } else {
    console.log('its an scalene triangle');
 }


 // Another way 

 if (a == b && b == c && c == a){
    console.log('its an equilateral triangle');
 } 
 else if (a!= b  && b!=c || a!= c){
    console.log('scalene trianle ');
 } else {
    console.log('its an isolate  triangle');
 }


