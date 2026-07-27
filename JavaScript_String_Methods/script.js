let username = "      Ahmed_Khan99      ";
let city = "Karachi,Lahore,Islamabad,Multan";
let cnic = "42101-1234567-1";
let bio = "I am a MERN stack student learning JavaScript at Saylani.";



console.log(`User Name = ${username.trim()} \nand User Name Length = ${username.length}`)


console.log(`\nCnic last digit = ${cnic.slice(-2)}`)



let cityArray = city.split(",");

console.log("\n-----city in arry-----")
console.log(cityArray);

console.log("\n-----city in string-----")
console.log(cityArray.join(" | "));

console.log("\n-----JavaScript in bio-----")
console.log(bio.includes("JavaScript"))

console.log("\n-----Bio in uppercase-----")
console.log(bio.toUpperCase())

console.log("\n-----Bio in lowercase-----")
console.log(bio.toLowerCase())

console.log("\n-----Bio in words-----")
console.log(bio)
bioarry = bio.split(" ")
console.log(`Bio in words = ${bioarry.length}`)