/*Define a function logBetween(lowNum, highNum) 
that will print every number from lowNum to 
highNum, inclusive. Inclusive means that the 
range includes lowNum and highNum. 
*/

function logBetweenStepper(min, max, step) {
  for (let i = min; i < max; i += step) {
    console.log(i);
  }
}

logBetweenStepper(5, 9, 2);

function threeOrSeven(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(threeOrSeven(3)); // => true
console.log(threeOrSeven(42)); // => true
console.log(threeOrSeven(8)); //

function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length - 1; i++) {
    let arrayPosition = array[i];
    sum += arrayPosition;
  }
  return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

const combineArray = (array1, array2) => {
  return array1.concat(array2);
};

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7])); // => [17, 5, 6, 7]

const doubler = (nums) => {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    doubledindex = nums[i] * 2;
    newArray.push(doubledindex);
  }
  return newArray;
};

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]

const countVowels = (word) => {
  let numVowels = 0;
  for (let i = 0; i < word.length; i++) {
    let charindex = word[i];
    if (
      charindex === "a" ||
      charindex === "e" ||
      charindex === "i" ||
      charindex === "o" ||
      charindex === "u"
    ) {
      numVowels += 1;
    }
  }
  return numVowels;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pazzaa")); // => 2



