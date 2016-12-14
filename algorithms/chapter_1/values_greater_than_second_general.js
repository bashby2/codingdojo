//Values Greater than Second, Generalized
//Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many //values this is. What will you do if the array is only one element long?

function func_junc() {

var array = Array.from(arguments);
var y = array[1];
var new_array = [];
var count = 0;
for (var i = 0; i < array.length; i++){
    if (array[i] > y) {
        new_array.push(array[i]);
        }
    }
console.log(new_array.length);
return new_array;
}
func_junc(1,3,4,5,2,6);
