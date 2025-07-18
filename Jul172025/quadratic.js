function quadratic (a, b, c){
    let squareRoot = Math.sqrt(b*b - 4*a*c);
    let root1 = (-b + squareRoot) / (2* a);
    let root2 = (-b - squareRoot)/ (2 * a);

    console.log("root 1", root1 , " root 2 ", root2);

}

quadratic(2,5,3);

