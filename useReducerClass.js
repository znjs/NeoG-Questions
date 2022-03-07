/**
 * CLASS 16
 */

// ?Challange 1

const arrSum = (acc, curr) =>
  curr % 2
    ? { ...acc, odd: acc.odd + curr }
    : { ...acc, even: acc.even + curr };
console.log([1, 2, 3, 4].reduce(arrSum, { odd: 0, even: 0 }));

// ?Challange 2

const numList = [
  { type: "odd", payload: 1 },
  { type: "odd", payload: 3 },
  { type: "odd", payload: 55 },
  { type: "even", payload: 22 },
  { type: "even", payload: 44 },
];

const arrSumList = (acc, curr) => {
  switch (curr.type) {
    case "odd":
      return { ...acc, odd: acc.odd + curr.payload };
    case "even":
      return { ...acc, even: acc.even + curr.payload };
    default:
      return acc;
  }
};

console.log(numList.reduce(arrSumList, { odd: 0, even: 0 }));
