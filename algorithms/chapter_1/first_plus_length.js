//First Plus Length
//Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a //number, but a string (like "what?") or a boolean (like false).

function f() {
  var ar = Array.from(arguments);
  var first_plus_length = ar[0] + ar.length;
 // console.log(ar[0] + ar.length);
  return first_plus_length;
}
// if the functions values are not numbers, it will cause an error.
f(5, 6, 3, 3);
