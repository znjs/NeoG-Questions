// ex:1
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
arr.forEach((ele, index) => {
  arr[index] = ele % 2 ? ele : arr[index] + 1;
});

// ex:2

const family = [
  {
    name: "Tanay",
    haveCycle: true,
  },
  {
    name: "Akanksha",
    haveCycle: false,
  },
  {
    name: "Tanvi",
    haveCycle: true,
  },
  {
    name: "Kanak",
    haveCycle: false,
  },
];
// console.log(family.filter((obj) => obj.haveCycle).map((obj) => obj.name));
const whoHasCycle = (arr) => {
  arr.filter((ele) => (ele.haveCycle && true).name);
};
// console.log(whoHasCycle(arr));

const t = [
  {
    name: "Apple",
  },
  {
    name: "Mango",
  },
  {
    name: "Potato",
  },
  {
    name: "Guava",
  },
  {
    name: "Capsicum",
  },
];
// const assignType = (ele) =>
//   ele.name.length > 5
//     ? { ...ele, type: "vegetable" }
//     : { ...ele, type: "fruit" };

const assignType = (ele) => ({
  ...ele,
  type: ele.name.length > 5 ? "vegetable" : "fruit",
});
// {
//   ele.name.length > 5 ? (ele["type"] = "vegetable") : (ele["type"] = "fruit");
//   return ele;
// };

// console.log(t.map(assignType));

const vowelUppercase = (str) => {
  console.log(
    str
      .split("")
      .map((ele) =>
        ["a", "e", "i", "o", "u"].includes(ele.toLowerCase())
          ? ele.toUpperCase()
          : ele
      )
  );
};

let str = "neog";

// console.log(vowelUppercase(str));
// const addHyphen = (str, idx = 0, prevState = false) =>
//   idx < str.length
//     ? prevState
//       ? !(Number(str[idx]) % 2)
//         ? `-${str[idx]}${addHyphen(str, idx + 1, !(Number(str[idx]) % 2))}`
//         : `${str[idx]}${addHyphen(str, idx + 1, !(Number(str[idx]) % 2))}`
//       : `${str[idx]}${addHyphen(str, idx + 1, !(Number(str[idx]) % 2))}`
//     : "";

// const addHyphenReducer = (acc, ele) => {
//   if (acc.pop()) {
//     if (!(ele % 2)) {
//       acc = [...acc, "-", ele, true];
//     } else {
//       acc = [...acc, ele, false];
//     }
//   } else {
//     if (!(ele % 2)) {
//       acc = [...acc, ele, true];
//     } else {
//       acc = [...acc, ele, false];
//     }
//   }
//   return acc;
// };
// const addHyphen = (str) => {
//   let strArr = str.split("");
//   let ans = strArr.reduce(addHyphenReducer, [false]);
//   ans.pop();
//   return ans.join("");
// };
// console.log(addHyphen("24345687"));

const addHyphenReducer = (acc, ele) => {
  if (acc.pop()) {
    acc = !(ele % 2) ? [...acc, "-", ele, true] : [...acc, ele, false];
  } else {
    acc = !(ele % 2) ? [...acc, ele, true] : [...acc, ele, false];
  }
  return acc;
};
const addHyphen = (str) => {
  let strArr = str.split("");
  let ans = strArr.reduce(addHyphenReducer, [false]);
  ans.pop();
  return ans.join("");
};
console.log(addHyphen("24345687"));
