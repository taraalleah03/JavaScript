const a = prompt('Give a number: ');
const b = prompt('Give a number: ');
const c = prompt('Give a number: ');

//convert strings to numbers
const num1 = parseInt(a);
const num2 = parseInt(b);
const num3 = parseInt(c);

//sum, product and average
const sum = num1 + num2 + num3
const product = num1 * num2 * num3
const ave = sum/3

document.querySelector('#num').innerHTML = 'The numbers given are (' + num1 + ',' + num2 + ',' + num3 + ').';
document.querySelector('#totals').innerHTML = "Sum = " + sum+ "<br>Product = " + product + "<br>Average =" + ave;
