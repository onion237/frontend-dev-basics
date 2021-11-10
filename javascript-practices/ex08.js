/**
 * 자바스크립트 객체3 - 확장
 */
var o = {
    name : "name",
    age : 10
}

console.log(o)

var f = function(){
    console.log('Hello World')
}
f()

var i1 = 10
var i2 = new Number(10)

console.log("===============확장===================")
o.another = {
    name : "마이콜",
    age : 30
}
console.log(o)
f.another = {
    name : "마이콜",
    age : 30
}
console.log(f.another)

i2.another = {
    name : "마이콜",
    age : 30
}
console.log(i2)

// wrapper 타입은 객체이므로 확장 가능
var wrapper = new Number(2)
wrapper.another = {a : '10'};
console.log(wrapper.another) 

// 원시타입은 확장불가
// 메소드 호출 시에만 wrapper타입으로 임시 승격됨? OR 
// wrapper객체로 승격된 후, another속성을 추가하지만 구문이 실행된 후 wrapper객체는 사라지므로 다음 라인에서 참조할 수 없음
i1.another = {};
console.log(i1.another)
