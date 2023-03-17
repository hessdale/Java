
let user_points = 8
let is_member = false
let user_name = "name"


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