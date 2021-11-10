console.log('----------global------------------')
global.name = '둘리'
console.log(name, global.name)

var email = 'dooly@gmail.com'
console.log(email, global.email)
console.log(this == global) // false

var f1 = function(){
    console.log(this)
}

f1();
f1.apply(this)


//this 바꾸기
var o = {
    name : '마이콜'
}
f1.apply(o)

console.log("======function 객체 메소드 call =========================")
var f2 = function(s){
    console.log(s + " " + this.name)
}
f2('hi') // 둘리 ( in globalThis)
f2.call(o, 'hi') // 마이콜 ( in o )

