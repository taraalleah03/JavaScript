const nums = [];

let num = prompt("Give a number: ");
let i = 0;

while(!nums.includes(num)){
    nums[i] = num;
    i++;
    num = prompt("Give a number: ");
}

console.log('You have entered the same number. Printing all the given numbers:')

nums.sort((a,b) => a - b);

for (let j = 0; j < nums.length ; j++){
   console.log(nums[j]);
}