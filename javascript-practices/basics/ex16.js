/**
 * function타입의 객체(함수)
 * 
 */

// 함수를 생성하는 방법1 : function literal
function f1(a, b){
    return a + b;
}

console.log(typeof(f1), f1(10,20))

// 함수를 생성하는 방법2 : anonymous function literal
var f2 = function(a, b){
    return a + b;
}
console.log(typeof(f2), f2(10,20))

// 함수를 생성하는 방법3: new 연산자와 함께 Function() 생성자 함수를 사용하는 방법
var f3 = new Function('a','b','return a + b')
console.log(typeof(f3), f3(10,20))


setTimeout(function() {
    console.log('time out!!!')
}, 2000)

var s = (function(a, b){
    return a + b;
})(10, 20)

console.log(s)

// 가변 파라미터 함수
var sum = function(){
    var s = 0;
    Array.prototype.forEach.call(arguments, e => s += e)
    return s;
}

console.log('result : ', sum(10,20,30,40,50))
