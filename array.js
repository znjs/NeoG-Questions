// ?ARRAYS METHODS

const arrNum = [11, 43, 12, 56, 23, 47, 92, 1, 9];
const arrAlpha = ["a", "k", "z", "name", "city"];
const arrAlphaNum = [1, 2, 3, 4, "apple", "banana", "peas"];

// *FILTER
console.log(arrNum.filter((ele) => ele % 2)); //!Prints all odd numbers

console.log(arrAlphaNum.filter((ele) => isNaN(ele))); //!

// *MAP

console.log(arrNum.map((ele) => ele ** 2)); //!Returns a new array changed elements(return's)
console.log(arrAlpha.map((ele) => ele.length)); //!Returns an array with string sizes
console.log(arrAlpha.map((ele) => ({ [ele]: ele.length }))); //!Returns an array of objects with key(string):value(string.length)

// *REDUCE

const reducerSum = (prev, curr) => prev + curr;
console.log(arrNum.reduce(reducerSum, 0)); //!Returns sum of all elements in an array

const reducerStrObj = (acc, curr) => ({ ...acc, [curr]: curr.length });
console.log(arrAlpha.reduce(reducerStrObj, {})); //!Returns an object with key(string):value(string.length)

const reducerStrArr = (acc, curr) => [...acc, { [curr]: curr.length }];
console.log(arrAlpha.reduce(reducerStrArr, [])); //!Returns an array of objects with key(string):value(string.length)

// *SORT

console.log(arrAlpha.sort()); //!Returns an array of elements with sorted elements with positional character based
console.log(arrNum.sort()); //!Returns an array of numbers with character position sorting
console.log(arrNum.sort((a, b) => a - b)); //!Returns an array of elements with elements sorted by value

// *FIND

console.log(arrNum.find((ele) => ele === 11)); //!Returns the first element that satisfies the condition else returns undefined
console.log(arrNum.find((ele) => ele === 0)); //!Returns undefined since element is not present

// *SOME

console.log(arrNum.some((ele) => ele % 2)); //!Returns true if atleast one element satisfies the condition

// *EVERY

console.log(arrNum.every((ele) => isNaN(ele))); //!Returns true if every element satisfies the condition => here: false since all the elements are numbers

console.log(arrAlpha.every((ele) => isNaN(ele))); //!Returns true if every element satisfies the condition => here: true since all the elements are alphabets

console.log(arrAlphaNum.every((ele) => isNaN(ele))); //!Returns true if every element satisfies the condition => here: false since elements are mixture of numbers and alphabets

// *PUSH

console.log(arrNum.push(12)); //!Inserts an element at the end of the array and returns the array length

console.log(arrAlphaNum.push("example"));

// *POP

console.log(arrNum.pop()); //!Remove an element from the last and return the value
console.log([].pop()); //!Returns undefined for an empty array

// *SPLIT : can be applied on String

console.log("This is a String".split(" ")); //!Returns an array of string elements split based on the parameter passed. :passing empty string"" will give array of characters of the string

// *JOIN

console.log(arrNum.join("")); //!Joins all the elements into a string with element spacing with parameter passed

// *CONCAT

console.log(arrNum.concat(arrAlpha)); //!Returns an array with elements of both arrays

// *LENGTH

console.log(arrNum.length); //!Returns the length of the array

// *SPLICE

// console.log(arrNum.splice(1, 3)); //!Returns an array of elements with start index @param0 and removes the elements from main array also
// console.log(arrNum.splice(3, 3)); //!Returns an array with elements starting index of @param0 and count of elements as @param1, if the elements are less then the array cutoff at elements available and removes the elements from main array
// console.log(arrNum);

// *SLICE

console.log(arrNum);
console.log(arrNum.slice(0, 3)); //!Returns an array with starting index as @param0 and end index as @param1 - 1 but the elements in the main array remains
console.log(arrNum);

console.log(arrNum.slice(0, -3)); //!Returns an array with starting index as @param0 and end index as @param1 - 1

// *SHIFT and UNSHIFT

console.log(arrNum.unshift(34)); //!Add the element to start of the array and returns the array size
console.log(arrNum);
console.log(arrNum.shift()); //!Removes first element from the array and returns the element
