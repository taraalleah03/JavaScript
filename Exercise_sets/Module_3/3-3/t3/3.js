'use strict';
const names = ['John', 'Paul', 'Jones'];

let name = "";

for (let i = 0; i < 3 ; i++){
    name += `<li>${names[i]}<br></li>`;
}

document.getElementById("target").innerHTML = name;
