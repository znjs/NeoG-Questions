// *FUNCTIONAL PROGRAMMING

//!QUESTION 1
//?A FIND THE SUM OF ALL ODD NUMBERS IN AN ARRAY

const sumReducer = (acc, curr) => (curr % 2 == 00 ? acc : acc + curr);
console.log([1, 2, 3, 4, 5, 6].reduce(sumReducer));

//?B FIND THE SUM OF ODD INDEX ELEMENTS
const sumOddReducer = (acc, curr, index) => (index % 2 ? acc : acc + curr);
console.log([1, 2, 3, 4, 5, 6].reduce(sumOddReducer));

//?C Find the biggest element in an array

const findLargest = (acc, curr) => (acc > curr ? acc : curr);
console.log([1, 2, 4, 2, 6, 78, 23, 0].reduce(findLargest, 0));

//?D Find the numbers divisible by 10

const multiplesOf10 = (num) => (num % 10 === 0 ? true : false);
console.log([12, 45, 124, 100, 20, 30, 53, 23, 80].filter(multiplesOf10));

//?E Return an array with odd position increment and even decrement

const addEvenSubOdd = (ele, index) => (index % 2 ? ele - 1 : ele + 1);
console.log([1, 2, 3, 4, 5, 6].map(addEvenSubOdd));

//?F Return an object with odd number and even number sum

const sumObject = (acc, curr) =>
  curr % 2
    ? { ...acc, even: acc.even + curr }
    : { ...acc, odd: acc.odd + curr };

console.log([1, 2, 34, 4, 5, 34, 9, 6].reduce(sumObject, { even: 0, odd: 0 }));

//!QUESTION 2
//?A Find the number of strings with similar number of string length

const charWordCounterReducer = (acc, curr) =>
  curr.length in acc
    ? { ...acc, [curr.length]: acc[curr.length] + 1 }
    : { ...acc, [curr.length]: 1 };

console.log(
  ["apple", "orange", "mango", "papaya", "peach", "guava", "watermelon"].reduce(
    charWordCounterReducer,
    {}
  )
);

//?B Find the array elements with strings in them

const checkVowel = (str) => {
  let isVowel = false;
  let strArr = str.toLowerCase().split("");
  strArr.forEach((element) => {
    ["a", "e", "i", "o", "u"].indexOf(element) + 1 ? (isVowel = true) : null;
  });
  return isVowel;
};
console.log(["alpha", "beta", "gama", "qwrty"].filter(checkVowel));

//?C Array of objects with key(string) and value(string char count)

const returnCharCountObj = (str) => ({ [str]: str.length });

console.log(["alpha", "beta", "gama", "qwrty"].map(returnCharCountObj));

//! THE ONE HOMEWORK

//?Q Write a function compose() which can take any number of functions and return a function which will run the given functions in order when called with argument

//* With parameter

const reducer2 = (acc, curr) => curr(acc);

const compose = (num, ...funcs) => {
  return funcs.reduce(reducer2, num);
};

console.log(compose(2, sampleFun1, sampleFun2, sampleFun3, sampleFun4));

//* Without parameter CC: Masudha Meher, Aman Dubey

const reducer = (acc, curr) => curr(acc);
const newCompose = (...fns) => (operation = (arg) => fns.reduce(reducer, arg));
const increment = (num) => num + 1;
const square = (sq) => sq * sq;
console.log(newCompose(square, square, square)(2));
const newFun = newCompose(square, square, square);
console.log(newFun(2));
