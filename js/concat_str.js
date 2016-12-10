/*
 * Ways to concatenate a string
 */

/*
 * concat(); '+'; '+='
 * Purpose: To combine strings
 * String + String -> String or String.concat(String) -> String
 */

var stringOne = "Hello"
var stringTwo = "World"
var stringSpace = " "

var stringConcatOne = stringOne + stringSpace + stringTwo

var stringConcatTwo = stringOne.concat(stringSpace).concat(stringTwo)

console.log(stringConcatOne); //Should return "Hello World"
console.log(stringConcatTwo); //Should return "Hello World"

/*
 * You can concatenate strings iteratively by going through an array and using
 * '+=' to update an initialized string (in this case emptyString).
 */

var emptyString = ""
var stringArray = [stringOne, stringSpace, stringTwo]

for (var i = 0; i < stringArray.length; i++) {
  emptyString += stringArray[i];
}

console.log(emptyString); //Should return "Hello World"

/*
 * Note: According to the documentation, '+' and '+=' should be the preferred
 * method combining strings as it is apparently faster (in terms of performance).
 */

/*
 * In the previous examples, a blank space was needed to add the space between
 * two strings. If you were concatenating a longer array of strings, it would
 * be annoyingly long to put stringSpace between each string. Using the '.join'
 * method should alleviate the problem.
 */

/*
 * Purpose: Combine an array of strings into one strings
 * Array -> String
 */

var newUpdateString = ""
var newStringArray = ["He", "Who", "Must", "Not", "Be", "Named"]

newUpdateString = newStringArray.join(" ");
console.log(newUpdateString); //Should return "He Who Must Not Be Named"

/*
 * Note: When using the '.join' method, it does not need to be just a space (" ")
 * , it can be any kind of separator you like.
 */

newUpdateString = newStringArray.join(" + ");
console.log(newUpdateString); //Should return "He + Who + Must + Not + Be + Named"

newUpdateString = newStringArray.join("-");
console.log(newUpdateString); //Should return "He-Who-Must-Not-Be-Named"
