// awful shuffle method, use length-based iteration and random to make much better
function shuffle(array) {
  let tempArray = array.slice();
  let temp = tempArray[2];
  tempArray[2] = tempArray[7];
  tempArray[7] = temp;

  temp = tempArray[0];
  tempArray[0] = tempArray[1];
  tempArray[1] = temp;

  return tempArray;
}

function double(array) {
  return array + "," + array;
}

function half(array) {
  return (
    array.slice(0, array.length / 2) +
    " - " +
    array.slice(array.length / 2, array.length)
  );
}

function order(array) {
  return array.sort();
}

function largest(array) {
  return order(array)[array.length - 1];
}

console.log("Array Testing commencing");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log("The testing array is as follows: " + array);

console.log("Shuffled array: " + shuffle(array));

console.log(
  "Note - none of these functions chagne the array, merely \
return a modified version of it: " +
    array
);

console.log("Doubled array: " + double(array));

console.log("Halved array (prioritises right half): " + half(array));

console.log("Ordered array: " + order(array));

console.log("Largest value in array: " + largest(array));
