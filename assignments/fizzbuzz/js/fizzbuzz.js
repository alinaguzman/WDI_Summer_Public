// Your code goes here

for (var i = 1; i < 101; i++) {
    if (i%5 === 0 && i%3 === 0){
        console.log("Fizz Buzz")
    } else if (i%3 === 0) {
        console.log("Fizz")
    } else if (i%5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}


var list = _.range(1,101);
var fizzBuzzList = _.map(list, function(number) {
    if (i%5 === 0 && i%3 === 0){
        return ("Fizz Buzz")
    } else if (i%3 === 0) {
        return ("Fizz")
    } else if (i%5 === 0) {
        return ("Buzz")
    } else {
        return i
    }
});
fizzBuzzList();