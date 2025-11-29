const numbers = [];

for (let i = 0; i < 5 ; i++){
    numbers[i] = prompt('Give a number: ');
}

//Do not use array.reverse() function.3
for (let j = 5 ; j >= 0 ; j--){
    console.log(numbers[j]);
}