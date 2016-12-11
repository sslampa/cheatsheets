// .slice
// .substr
// .substring

// .slice

var slicedStr = "The greatest thing since sliced bread";

var slicedOne = slicedStr.slice(8, 12),
    slicedTwo = slicedStr.slice(-29, -25),
    slicedThree = slicedStr.slice(8, -25),
    slicedFour = slicedStr.slice(8);

console.log(slicedOne); //Returns "test"
console.log(slicedTwo); //Returns "test"
console.log(slicedThree); //Returns "test"
console.log(slicedFour); //Returns "test thing since sliced bread"

// .substr

var subStrOne = slicedStr.substr(8, 4),
    subStrTwo = slicedStr.substr(-29, 4)
    subStrThree = slicedStr.substr(8);

console.log(subStrOne);
console.log(subStrTwo);
console.log(subStrThree);

//.substring
var newSubOne = slicedStr.substring(8, 12),
    newSubTwo = slicedStr.substring(12, 8),
    newSubThree = slicedStr.substring(8);

console.log(newSubOne);
console.log(newSubTwo);
console.log(newSubThree);
