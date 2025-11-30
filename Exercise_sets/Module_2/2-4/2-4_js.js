const nums = [];

let num = prompt("Give a number, type 0 to exit: ");
let i = 0;

while(num !== "0"){
    nums[i] = num;
    i++;
    num = prompt("Give a number, type 0 to exit: ");
}

nums.sort((a,b) => b - a);

for (let j = 0; j < nums.length ; j++){
   console.log(nums[j]);
}