var someStr = "   stringTObeMANIPULATED     ";

// Changes string to all lowercase
console.log(someStr.toLowerCase()); //"   stringtobemanipulated     "

// Changes string to all uppercase
console.log(someStr.toUpperCase()); //"   STRINGTOBEMANIPULATED     "

// Removes whitespace on both sides
console.log(someStr.trim()); //"stringTObeMANIPULATED"

// Removes whitespace to the left of string
console.log(someStr.trimLeft()); //"stringTObeMANIPULATED     "

// Removes whitespace to the right of string
console.log(someStr.trimRight()); //"   stringTObeMANIPULATED"
