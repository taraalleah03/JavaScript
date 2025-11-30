'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const html = document.getElementById("target");

for (let i = 0 ; i < 3 ; i++){
    const names = document.createElement("option");
    names.value = student[i].id;

}