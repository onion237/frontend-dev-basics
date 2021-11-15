/**
 * Arrow Function
 */

const pow = (num) => num * num

let numbers = [1,2,3,4,5]
numbers.forEach(n => process.stdout.write(`${n} : ${pow(n)}\n`))


// this this binding
console.log('\n-------\n')
const dooly = {
    name : '둘리',
    friends: ['또치','마이콜','도우너','길동'],
    printFriends: function(){
        console.log(this) // dooly
        // this.friends.forEach(function(f){
        //     console.log(this) //global
        //     // console.log(this, `${this.name}의 친구 ${f}, in forEach`)
        // })
        this.friends.forEach((f) => console.log(`${this.name}의 친구 ${f}, in forEach`))
    },
}
dooly.printFriends()

let a, b, c = {
    a : 1,
    b : 2,
    c : 3
}
console.log(a)
console.log(b)
console.log(c)