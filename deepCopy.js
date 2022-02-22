// *SHALLOW COPY IN JS

// ?OBJECT

let sampleObj = {
  name: "sample",
  place: {
    city: "ranchi",
    state: "Jharkand",
  },
  pinCode: "56089",
};
let referenceObj = sampleObj;

let shallowCopyObj = { ...sampleObj };

let deepCopyObj = JSON.parse(JSON.stringify(sampleObj));

sampleObj.place.city = "Bangalore";

console.log(referenceObj);
console.log(sampleObj);
console.log(shallowCopyObj);
console.log(deepCopyObj);
