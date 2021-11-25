function result(a,b) {
    var c = a + b;
    var d = a - b;
if (c === 15 || d === 15) {
    return true;
}    
return false;
}
console.log(result(7,8));
console.log(result(25,10));