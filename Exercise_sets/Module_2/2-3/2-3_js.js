const dogs = [];

for (let i = 0; i < 6 ; i++){
    dogs[i] = prompt('What is the name of doggy no.' + (i+1) + '?');
}

dogs.sort();
dogs.reverse();

const ul =  document.getElementById('woof');

for (let j = 0; j < 6 ; j++){
   ul.innerHTML += `<li>${dogs[j]}</li>` + '<br>';
}