const name = prompt('Type your name.');

let classes = Math.floor(Math.random() * 4) + 1;

if (classes === 1 ) {
    document.querySelector('#hogwarts').innerHTML = name + ', you are Gryffindor!';
} else if (classes === 2){
    document.querySelector('#hogwarts').innerHTML = name + ', you are Slytherin!';
} else if (classes === 3){
    document.querySelector('#hogwarts').innerHTML = name + ', you are Hufflepuff!';
} else {
    document.querySelector('#hogwarts').innerHTML = name + ', you are Ravenclaw!';
}