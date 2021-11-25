function swap(a,b) {
    [a,b] = [b,a];

    switch(a === b){
    case true:
        return "a and b are equal";
        break;
    case false:
        console.log("a value", a);
        console.log("b value", b);
        break;    
}}
console.log(swap(6,5));
console.log(swap(5,6));