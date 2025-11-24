let numbers = [4, 12, 8, 20, 6];
let sum = 0;
let largest = numbers[0];

for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}

console.log("Sum =", sum);
console.log("Largest number =", largest);
