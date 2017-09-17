// PART A
// create a function called howdy that will save my greeting to the console
function howdy() {
    return 'Audrey Strelzoff says hello.';
}
// invoke the howdy function to print to the console
console.log(howdy());

// PART B
// create a function expression equal to the variable numba with the parameter
// string.
var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length === 7) {
        console.log('7, what a perfect choice!');
    } else {
        console.log("I'm sorry,but that's too many to count.");
    }
};

// invoking the function by the variable name and passing it a parameter
numba('7');
numba('seventy');
numba('university');

// PART C
//create a function nestDisplay with parameter of movie
function nestDisplay(movie) {
    console.log(movie, 'is a fantastic movie.');
}
// create a function named inception and pass the function display to it
function inception(display, favMovie) {
    display(favMovie);
}
// pass the arguments nestDisplay and 'Practical Magic' to the inception function
inception(nestDisplay, 'Practical Magic');
