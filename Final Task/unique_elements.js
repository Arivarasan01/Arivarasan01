const arr1 = [0, 10, 20, 40, 60, 80];
const arr2 = [10, 30, 40, 50, 70];

let unique1 = arr1.filter((n) => arr2.indexOf(n) === -1);
let unique2 = arr2.filter((n) => arr1.indexOf(n) === -1);
const unique = unique1 +"," +unique2;
console.log(unique1); 
console.log(unique2); 
console.log(unique);
