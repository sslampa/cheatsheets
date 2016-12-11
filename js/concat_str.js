/*
 * concat(); '+'; '+='
 * Purpose: To combine strings
 * String + String -> String or String.concat(String) -> String
 */

var stringOne = "Hello";
var stringTwo = "World";
var stringSpace = " ";

var stringConcatOne = stringOne + stringSpace + stringTwo;

var stringConcatTwo = stringOne.concat(stringSpace).concat(stringTwo);

console.log(stringConcatOne); //Should return "Hello World"
console.log(stringConcatTwo); //Should return "Hello World"

/*
 * You can concatenate strings iteratively by going through an array and using
 * '+=' to update an initialized string (in this case emptyString).
 */

var emptyString = "";
var stringArray = [stringOne, stringSpace, stringTwo];

for (var i = 0; i < stringArray.length; i++) {
  emptyString += stringArray[i];
}

console.log(emptyString); //Should return "Hello World"

/*
 * Note: According to the documentation, '+' and '+=' should be the preferred
 * method combining strings as it is apparently faster (in terms of performance).
 */

/*
 * join()
 * Purpose: Combine an array of strings into one strings
 * Array.join(separator) -> String
 * separator -> Takes in string that separates each joined value.
 *   Default values is ","
 */

var newUpdateString = "";
var newStringArray = ["He", "Who", "Must", "Not", "Be", "Named"];

newUpdateString = newStringArray.join(" ");
console.log(newUpdateString); //Should return "He Who Must Not Be Named"

/*
 * Note: When using the 'join()' method, it does not need to be just a space (" ")
 * , it can be any kind of separator you like.
 */

newUpdateString = newStringArray.join(" + ");
console.log(newUpdateString); //Should return "He + Who + Must + Not + Be + Named"

newUpdateString = newStringArray.join("-");
console.log(newUpdateString); //Should return "He-Who-Must-Not-Be-Named"

/*
 * split()
 * Purpose: Splits the string into an array based on a separator
 * String.split(separator, limit) -> array
 * separator -> Takes in string that separates each joined value.
 *   If empty, will place whole string into array
 * limit -> How many times to split the string
 */

var toSplitStr = "Blast from the past"
var splitArrayOne = toSplitStr.split(),
    splitArrayTwo = toSplitStr.split(""),
    splitArrayThree = toSplitStr.split(" ");

  //Returns ["Blast from the past"]
  console.log(splitArrayOne);

  /*
   * Returns ["B", "l", "a", "s", "t", " ", "f", "r", "o", "m", " ", "t", "h", "e",
   *          " ", "p", "a", "s", "t"]
   */
  console.log(splitArrayTwo);

  //Returns ["Blast", "from", "the", "past"]
  console.log(splitArrayThree);

 /*
  * repeat()
  * Purpose: Copy given string onto itself into new string
  * String.repeat(times) -> String
  * times -> number of times string is repeated
  */

var repeatString = "Repeat";

console.log(repeatString.repeat(3)); //Returns "RepeatRepeatRepeat"

// Truncates to 3
console.log(repeatString.repeat(3.5)); //Returns "RepeatRepeatRepeat"
