let string_1 = "12";
let number_1 = 1;
let string_2 = "23";
let number_2 = 2;
let user_points = 8
let is_member = false
let user_name = "name"
console.log(string_1);
console.log(number_1);
console.log(string_2);
console.log(number_2);

if (number_2 >= 1) {
    console.log("number 2 is bigger than 1");
}
if (string_2 >= 22) {
    console.log("string 23 is bigger than 22");
}
if (user_points >= 75) {
    console.log("more than 75 points!");
} else if (user_points === 69) {
    console.log("Nice");
} else {
    console.log("Not enough points :(");
}
if (is_member === true && user_points >= 90) {
    console.log("thanks for subscribing and playing");
}
if (is_member === false || user_points < 10) {
    console.log("leave and stop playing");
}
if (user_name === "Dale") {
    console.log("welcome owner");
} else {
    console.log("welcome");
}