/*
 * pop()
 * Removes last element of array and returns that element
 * Array.pop() -> Element(String, Integer, Array, etc)
 */

var arrayOfNumbers= [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arrayOfNumbers.pop()); //Returns 9
console.log(arrayOfNumbers); //Returns [1, 2, 3, 4, 5, 6, 7, 8]

/*
 * push()
 * Adds element(s) to array and returns new length of array
 * Array.push(item_or_element) -> Integer
 * item_or_element -> Can be a single item or elements
 */

console.log(arrayOfNumbers.push(99)); //Returns 9 (length of array)
console.log(arrayOfNumbers); //Returns [1, 2, 3, 4, 5, 6, 7, 8, 99]
console.log(arrayOfNumbers.push(1010, 1111, 1212)); //Returns 12
console.log(arrayOfNumbers); //Returns [1, 2, 3, 4, 5, 6, 7, 8, 99, 1010, 1111, 1212]

/*
 * shift()
 * Removes first element of array and returns that element
 * Array.shift() -> Element(String, Integer, Array, etc)
 */

console.log(arrayOfNumbers.shift()); //Returns 1
console.log(arrayOfNumbers); //Returns [2, 3, 4, 5, 6, 7, 8, 99, 1010, 1111, 1212]


/*
 * unshift()
 * Adds element(s) to array and returns new length of array
 * Array.unshift(item_or_element) -> Integer
 * item_or_element -> Can be a single item or elements
 */

console.log(arrayOfNumbers.unshift(100)); //Returns 12 (length of array)
console.log(arrayOfNumbers); //Returns [100, 2, 3, 4, 5, 6, 7, 8, 99, 1010, 1111, 1212]
console.log(arrayOfNumbers.unshift(101, 102, 103)) //Returns 15
console.log(arrayOfNumbers); //Returns [101, 102, 103, 100, 2, 3, 4, 5, 6, 7, 8, 99, 1010, 1111, 1212]

/*
 * splice
 * Removes/adds new element(s) at an array and returns removed element(s)
 * Array.splice(start, num_to_delete, item_or_element) -> Array
 * start -> Index of where to start adding/deleting elements
 * num_to_delete -> Specifies the amount of elements to delete at/after start
 * item_or_element -> Can be a single item or elements
 */

console.log(arrayOfNumbers.splice(3)); //Returns [100, 2, 3, 4, 5, 6, 7, 8, 99, 1010, 1111, 1212]
console.log(arrayOfNumbers); //Returns [101, 102, 103]
console.log(arrayOfNumbers.splice(0, 1, 11, 12, 13)); //Returns [101]
console.log(arrayOfNumbers); //Returns [11, 12, 13, 102, 103]
console.log(arrayOfNumbers.splice(2, 2)); //Returns [13, 2]
console.log(arrayOfNumbers); //Returns [11, 12, 103]
