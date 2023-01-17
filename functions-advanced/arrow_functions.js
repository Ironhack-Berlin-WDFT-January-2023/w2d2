// Arrow functions
const nums3 = [1, 2, 3, 4, 5]
// if you have exactly one parameter you can remove the ()

const doubled = nums3.map(function (num) {
	return num * 2
})
// the callback as an arrow function
// const doubled = nums3.map(num => num * 2)

const greet = () => {
	return "hello"
}
// as an arrow function: 

// const greet = () => "hello"

// console.log(doubled)
