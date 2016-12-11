/*
 * slice()
 * Purpose: Extracts a section of a string based on index
 * String.slice(begin, end) -> String
 * begin -> Start index of extraction.
 * end -> End index of extraction. Does not include the value at this index.
 */

var slicedStr = "The greatest thing since sliced bread";

var slicedOne = slicedStr.slice(8, 12),
    slicedTwo = slicedStr.slice(-29, -25),
    slicedThree = slicedStr.slice(8, -25),
    slicedFour = slicedStr.slice(8);

console.log(slicedOne); //Returns "test"
console.log(slicedTwo); //Returns "test"
console.log(slicedThree); //Returns "test"
console.log(slicedFour); //Returns "test thing since sliced bread"

/*
 * Note: There are subtle differences between 'slice()' and 'substring()'
 * 'substring()' does not accept negative indices. 'slice()' does.
 * For 'substring()', if end > start then it will swap the two. 'slice()' will not.
 * Both 'slice()' and 'substring()', if given an end larger than the string index,
 * will return until the end and not throw an index error.
 */

/*
 * substr()
 * Purpose: Extracs a section of a string based on index and the length of desired string
 * String.substr(start, length)
 * start -> Start index of extraction.
 * length -> Length of extraction string.
 */

var subStrOne = slicedStr.substr(8, 4), //Returns "test"
    subStrTwo = slicedStr.substr(-29, 4), //Returns "test"
    subStrThree = slicedStr.substr(8); //Returns "test thing since sliced bread"

console.log(subStrOne);
console.log(subStrTwo);
console.log(subStrThree);

/*
 * substring()
 * Purpose: Extracts a section of a string based on index
 * String.substring(begin, end) -> String
 * begin -> Start index of extraction.
 * end -> End index of extraction. Does not include the value at this index.
 */

var newSubOne = slicedStr.substring(8, 12), //Returns "test"
    newSubTwo = slicedStr.substring(12, 8), //Returns "test"
    newSubThree = slicedStr.substring(8); //Returns "test thing since sliced bread"

console.log(newSubOne);
console.log(newSubTwo);
console.log(newSubThree);
