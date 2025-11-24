let totalSeats = 120;
let bookedSeats = 78;
let available = totalSeats - bookedSeats;

let status;

if(available < 20){
    status = "Almost Full";
}else if(available >= 20 && available <= 60){
    status = "Moderate Availability";
}else{
    status = "Plenty of Seats Available";
}

console.log("Seats left:", available);
console.log("Status:", status);