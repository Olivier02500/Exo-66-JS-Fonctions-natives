
let operande = 10 ;
console.log(operande)

let entier = document.getElementById('entier');
entier.innerHTML = parseInt(entier.innerHTML) * operande;

let float = document.getElementById('flottant');
float.innerHTML = parseFloat(float.innerHTML) * operande + parseInt(entier.innerHTML);

let par3 = document.getElementById('non-numerique');
let result;
if (isNaN(par3)) {
    par3.innerHTML = 0;
}

let random = document.getElementById('random');
random.innerHTML = Math.random();

let trunc = document.getElementById('trunc');
trunc.innerHTML = Math.trunc(trunc.innerHTML);

let rep = document.getElementById('replace');
rep.innerHTML = rep.innerHTML.replace('world', 'Olvier');




