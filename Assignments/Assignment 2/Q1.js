let num = 15;
if(num % 2 == 0){
    console.log(num + " is Even");
}else{
    console.log(num + " is Odd");
}

if(num > 0){
    console.log("Number is Positive");
}else if(num < 0){
    console.log("Number is Negative");
}else{
    console.log("Number is Zero");
}

if(num % 3 == 0 && num % 5 == 0){
    console.log("Divisible by both 3 and 5");
}else{
    console.log("Not divisible by both 3 and 5");
}