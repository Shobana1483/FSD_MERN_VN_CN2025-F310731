let marks = 85;
let grade;

if(marks >= 80){
    grade = "A";
}else if(marks >= 60){
    grade = "B";
}else if(marks >= 40){
    grade = "C";
}else{
    grade = "F";
}

console.log("Grade: " + grade);

let age = 17;
let person = age >= 18 ? "Adult" : "Minor";
console.log(person);
