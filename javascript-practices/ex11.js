/**
 * Array 메소드
 */

var colors = ['black', 'white', 'yellow']
var fruits = ['apple', 'mango', 'banana']

// concat
console.log("=================concat=======================")
var a1 = fruits.concat(colors)
console.log(a1)

// push, pop : stack 연산
console.log("=================push / pop=======================")
var color = colors.pop()
console.log(color)
console.log(colors)

colors.push('red')
console.log(colors)


// join
console.log("=================join=======================")
var str = fruits.join(":")
console.log(str)

// reverse
console.log("=================reverse=======================")
console.log(fruits)
fruits.reverse();
console.log(fruits)

// shift
console.log("=================shift=======================")
var numbers = [4000, 3000, 2000, 5000, 1000]
var shiftedNumbers = numbers.shift();
console.log("shiftedNumbers : ", shiftedNumbers)
console.log("numburs : ", numbers)

console.log("=================sort=======================")
// sort
numbers.sort()
console.log(numbers)

// slice
console.log("=================slice=======================")
var slicedNumbers = numbers.slice(1,3);
console.log(slicedNumbers);

// splice
// index부터 count개를 삭제 후 삭제된 요소를 반환
console.log("=================splice=======================")
console.log(fruits)
var splicedFruits = fruits.splice(0 /*index */, 2 /*count */)
console.log(fruits, splicedFruits)

var a1 = [0,1,2,3,4]
var a2 = a1.splice(1,3,10)
console.log(a2,a1)

