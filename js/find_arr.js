/*
 * find()
 * Purpose: Returns value of the first element to satisfy test function. Else returns undefined
 */

//Can declare a function before using 'find()'
function firstEven(element) {
  return element % 2 == 0;
}

[13, 11, 27, 19, 12, 101, 125].find(firstEven); //Returns 12

//Can also use an anonymous function which takes the element and index currently searched
['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].find(function(element, index) {
  return index == 3;
}) //Returns Thursday

/*
 * findIndex()
 * Purpose: Returns index of the first element to satisfy test function. Else returns -1
 */

//Can declare a function before using 'findIndex()'
function wheresTheBeef(element) {
  return element == 'beef';
}

['chicken', 'lamb', 'fish', 'turkey', 'beef', 'pork'].findIndex(wheresTheBeef); //Returns 4

//Can also use an anonymous function (this can also take in an index)
['red', 'green', 'orange', 'blue', 101, 'black', 'yellow'].findIndex(function(element) {
  return typeof element == 'number';
}) //Returns 4

/*
 * indexOf()
 * Purpose: Returns first index which a given element is found. Else returns -1
 */

['veil', 'nail', 'Dale', 'Christian Bale', 'veil', 'kale', 'tail'].indexOf('veil'); //Returns 0

//The second argument specifies the starting point to search for the given string.
//'veil' is at index of 0 and 4, but since it starts at 2, will return 4 instead of 0;
['veil', 'nail', 'Dale', 'Christian Bale', 'veil', 'kale', 'tail'].indexOf('veil', 2); //Returns 4

/*
 * lastIndexOf()
 * Purpose: Returns last index which a given element is found. Else returns -1
 */

['tall', 'mall', 'call', 'Saul', 'fall', 'tall', 'null'].lastIndexOf('tall'); //Returns 5

['tall', 'mall', 'call', 'Saul', 'fall', 'tall', 'null'].lastIndexOf('tall', 3); //Returns 0
