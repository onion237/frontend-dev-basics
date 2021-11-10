/*
자바스크립트 객체 1 : object 타입

1. 자바스크립트 객체는 object타입과 function 타입 두 가지가 있다.

2. 보통, function 타입 객체는 '함수'라 부른다

3. 따라서 javascript에서 우리가 흔히 객체라 부르는 것은, object타입의 객체라 할 수 있다

*/

/** 
 * 생성 방법1
 *  - 생성자 함수를 사용하는 방법
 *      - Number, String, RegExp, Date, Array - 내장 생성자 함수
 *      - 사용자 정의 생성자 함수
*/

var MyObject = function (name){
    this.name = name;
}

var myObj = new MyObject('aaaa')
console.dir(myObj)
var o = new Object()
o.name = '둘리'
o.age = 10
o.another = new Object()
o.another.name = '마이콜'
o.another.age = 30;
console.dir(o)

/**
 * 생성 방법2
 * {} 리터럴을 사용하는 방법
 */
var o = {}
o.name = '둘리'
o.age = 10
o.another = new Object()
o.another.name = '마이콜'
o.another.age = 30;
console.dir(o)

/**
 * 생성 방법3
 * JSON
 */
var o = {
    name : '둘리',
    age : 10,
    another : {
        name : '마이콜',
        age : 30
    }    
}
console.dir(o)


var response = '{"name" : "둘리", "age" : 10, "email" : "dooly@gmail.com"}'
// var userVo = eval("(" + response + ")")

var userVo = JSON.parse(response)

console.dir(userVo)
