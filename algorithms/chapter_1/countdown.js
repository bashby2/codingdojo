//Countdown
//Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zero’th //element) down to 0 (as the last element). How long is this array?

function countdownArray(a){
     var array = [a];
    while (a > 0) {
        a = a - 1;
        array.push(a);
    }
    console.log(array);
    }
countdownArray(6);
//array length will always be (a+1)
