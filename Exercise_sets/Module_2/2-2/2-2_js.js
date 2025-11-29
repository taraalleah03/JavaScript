const names = [];
let x = prompt('How many number of participants are there? ');

for (let i = 0; i < x ; i++){
    names[i] = prompt('Name of participant no.' + (i+1));
}

names.sort();

for (let j = 0; j < x ; j++){
    document.getElementById('names').innerHTML += names[j] + '<br>';
}