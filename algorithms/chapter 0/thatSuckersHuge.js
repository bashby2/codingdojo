//Whoa, That Sucker’s Huge…
//Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
var count = 0
for (var i = -299999; i < 300000; i = i + 2) {
    count = i + i;
}
console.log(count);
