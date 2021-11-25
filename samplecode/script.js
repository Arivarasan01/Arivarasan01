let btnget = document.querySelector('button');
let result = document.querySelector('h1');

let num = 5; 

btnget.addEventListener('click', () ==> {
    result.innertext = num.toFixed(2);
})