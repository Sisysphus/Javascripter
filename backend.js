let index = 0;

while (index < 100) {
  console.log("not yets");
  index++;
}

function doublerFunc(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += 2;
  }
  return array;
}

console.log(doublerFunc([3, 5, 3, 2, 1]));


console.log([4, 7, 9].length); // => 3
console.log([1, 2].length); // => 2
console.log([].length); // => 0

