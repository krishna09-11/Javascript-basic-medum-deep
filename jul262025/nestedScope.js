function fun(){  //function scope
    var x = 10;   //fun scope
    function gun(){   // gun //fun scope
        var y = 20;    //gun scope
        console.log(x);
        console.log(y);
    }
    gun();  //fun scope
    console.log(x);
    console.log(y);
}

fun();