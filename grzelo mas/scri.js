let number = 5  //1 magaliti

if (number > 0) {
    console.log("The number is positive.")
} else if (number < 0) {
    console.log("The number is negative.")
} else {
    console.log("The number is zero.")
}

//////////////////////////////////////////////////////



let age = 20 //2 magaliti

if (age >= 18) {
    console.log("You are an adult.")
} else {
    console.log("You are not an adult.")
}

///////////////////////////////



let num = 7 ///3 magaliti

if (num % 2 === 0) {
    console.log("The number is even.")
} else {
    console.log("The number is odd.")
}
  

///////////////   

let a = 10 //4 mag
let b = 20

if (a > b) {
    console.log("a is greater than b.")
} else if (a < b) {
    console.log("a is less than b.")
} else {
    console.log("a is equal to b.")
}
  


/////////////////   5mag

let str = ""

if (str === "") {
    console.log("The string is empty.")
} else {
    console.log("The string is not empty.")
}
    


///////////// 6 mag
let text = "Hello"

if (text.length > 10) {
    console.log("The string is long.")
} else {
    console.log("The string is short.")
}
 
///////////7 mag
let value = 15

if (value >= 10 && value <= 20) {
    console.log("The number is within the range.")
} else {
    console.log("The number is outside the range.")
}


/////////8 mag
let hasPermission = true

if (hasPermission) {
    console.log("Access granted.")
} else {
    console.log("Access denied.")
}
/////////////9 mag 


let year = 2020

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("The year is a leap year.")
} else {
    console.log("The year is not a leap year.")
}
/////////////// 10 mag

let hour = 14

if (hour < 12) {
    console.log("Good morning.")
} else if (hour < 18) {
    console.log("Good afternoon.")
} else {
    console.log("Good evening.")
}



/////////////////////witch case

let light = "green"

switch (light) {
    case "red":
        console.log("Stop")
        break;
    case "yellow":
        console.log("Caution")
        break;
    case "green":
        console.log("Go")
        break
    default:
        console.log("Invalid color")
}
  

////////2 mag


let animal = "dog"

switch (animal) {
    case "dog":
        console.log("Woof")
        break
    case "cat":
        console.log("Meow")
        break
    case "cow":
        console.log("Moo")
        break
    case "sheep":
        console.log("Baa")
        break
    default:
        console.log("Unknown animal")
}
