const names = [];
let x = prompt('How many number of participants are there? ');

for (let i = 0; i < x ; i++){
    names[i] = prompt('Name of participant no.' + (i+1));
}

names.sort();
const ol =  document.getElementById('names');

for (let j = 0; j < x ; j++){
   ol.innerHTML += `<li>${names[j]}</li>` + '<br>';
}