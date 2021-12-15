// 1. complementBot(name): A function called complementBot has been defined below. Call this function below the definition and pass in the value of your name in quotes! 
function complementBot(name) {
  return `${name} is the best!`;
}
var name1 = complementBot("Steven")
console.log(name1)

// 2. insultBot(name): Define a function called insultBot() that:
    //a. Accepts a name as a parameter
    //b. Prints out an insult when the function is called
    //c. Call the function with 3 different names

function insultBot(name){
	return `${name} is trash`
}
var name2 = insultBot("Hammy")
console.log(name2)

// 3. addTwoNumbers(num1, num2): Create a function called addTwoNumbers that accepts two parameters: num1 & num2. The function should add the two numbers and return the final sum.
function addTwoNumbers(num1, num2){
	return num1 + num2
}
console.log(addTwoNumbers(2,2))

// 4. monthToSeason: Create a function called monthToSeason that accepts a month and returns the corresponding season. For example, if a January is input, then "It is winter" should be returned.
function monthToSeason(month){
	var month = month.toLowerCase()
	if(month == "december" || month == "january" || month == "february"){
		return "winter"
	}
	else if(month == "march" || month == "april" || month == "may"){
		return "spring"
	}
	else if(month == "june" || month == "july" || month == "august"){
		return "summer"
	}
	else {
		return "fall"
	}
}
console.log(monthToSeason("March"))

// 5. averageList(numbers): Create a function called averageList that accepts an array as a parameter. The function should average all of the numbers on the list and return the average of the numbers.
let list = [ 51, 69, 47, 90, 6, 19, 36, 69, 7, 85, 65, 84, 48, 7, 57]
function averageList(numbers){
	var sum = 0
	for(let i = 0; i < numbers.length; i++){
		sum += numbers[i]
	}
	return sum/numbers.length
}
console.log(averageList(list))

// 6. randomGreeting: Create a function called randomGreeting that takes in a persons name. The function should print out a random greeting from the greetings list each time it is called. Call the function 4 times to test this out!
var greetings = ["Good day,", "Bonne journée,", "Buenos dias,", "美好的一天,", "Merhbe,", "مرحبا,", "여보세요, "];
function randomGreeting(name, list){
	var index = Math.floor(Math.random()*list.length)
	return `${list[index]} ${name}`
}
console.log(randomGreeting("Steven", greetings))


// 7. startsWithLetter(word, letter): Write a function called startsWithLetter that accepts a word and a letter. If the words starts with that letter return true. Otherwise return false.
	/* For example:
	startsWithLetter("hello", "h") returns true
	startWithLetter("another", "n") returns false
	*/

function startsWithLetter(word, letter){
	if(word.indexOf(letter) == 0){
		return true
	}
	else {
		return false
	}
}	

console.log(startsWithLetter("hello", "h"))
console.log(startsWithLetter("another", "n"))