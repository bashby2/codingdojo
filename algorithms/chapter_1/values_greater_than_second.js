//Values Greater than Second
//For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

var array = [1,3,5,7,9,13];
var y = array[1];
var count = 0;
for (var i = 0; i < array.length; i++){
    if (array[i] > y) {
        count = count + 1;
        console.log(array[i]);
    }

}
return count;
