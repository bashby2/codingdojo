//Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
function leapYear(a) {
    if (a % 4 == 0) {
        if (a % 100 != 0) {
            if (a % 400 == 0) {
                console.log("It's a leap year!");
            }
        }
    }
    else {
        console.log("It's not a leap year.");
    }
}
leapYear(100);
