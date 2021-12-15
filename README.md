# Parameters and Returns

Previously, we studied functions as a tool that programmers use to bundle up solutions to problems so that they can be reused in our code. For example, if I wanted to write a function that always pritted "Hello!", I could write a function called `printHello()` like:

```javascript
function printHello(){
	console.log("HELLO!")
}
```

While this is nice, it's not terribly useful because the function lacks the flexability to accept different inputs. **Parameters** are a variable in a function definition. These are used as a placeholder for values that will be passed through the function. 

If we were to update our `printHello()` function so that it said hello to whomevers name we passed in, it would look like:

```javascript
function printHello(name){
	console.log(`HELLO ${name}!`)
}
```

We then can call this function by passing in arguments:
```javascript
printHello("Niya")
printHello("Abdul")
printHello("Hamadou")
```

Each time we call the function we pass in **arguments** that are then used by the funciton. While a `console.log()` is useful to see what the function is doing, it is not useful when thinking about using this information later. We can use the `return` command to *return* information to the point in the code where the function was called.

```javascript
function printHello(name){
	return `HELLO ${name}!`
}
```

Return commands are useful because we can then capture this information in a vaiable or conditional expression to be used later.

```javascript
var name1 = printHello("Niya")
var name2 = printHello("Abdul")
var name3 = printHello("Hamadou")
```

## Tasks for Today
1. `complementBot(name)`: A function called complementBot has been defined below. Call this function below the definition and pass in the value of your name in quotes! 

2. `insultBot(name)`: Define a function called insultBot() that:
	- Accepts a name as a parameter
	- Prints out an insult when the function is called
	- Call the function with 3 different names

3. `addTwoNumbers(num1, num2)`: Create a function called addTwoNumbers that accepts two parameters: num1 & num2. The function should add the two numbers and return the final sum.

4. `monthToSeason(month)`: Create a function called monthToSeason that accepts a month and returns the corresponding season. For example, if a January is input, then "It is winter" should be returned.

5. `averageList(numbers)`: Create a function called averageList that accepts an array as a parameter. The function should average all of the numbers on the list and return the average of the numbers.

6. `randomGreeting(name)`: Create a function called randomGreeting that takes in a persons name. The function should print out a random greeting from the greetings list each time it is called. Call the function 4 times to test this out!

7. `startsWithLetter(word, letter)`: Write a function called startsWithLetter that accepts a word and a letter. If the words starts with that letter return true. Otherwise return false.