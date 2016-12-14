//Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
var count = 1;
for (var i = 5; i < 4096; i = i + 5) {
    count = count + 1;
    console.log(i);
}
console.log(count);
