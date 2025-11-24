let name = "Shobana";
console.log("Hello, " + name + "! Welcome to JavaScript."); 
// we can also give ${Name} in place of + name +

let upperName = name.toUpperCase();
console.log("Uppercase:", upperName);

let msg = "Hello, " + name + "! Welcome to JavaScript.";
console.log("Message length > 10? ", msg.length > 10);

console.log("Contains JavaScript?", msg.includes("JavaScript"));