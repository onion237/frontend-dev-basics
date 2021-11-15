/**
 * 자바스크립트 객체2 - function 타입(함수)
 * 
 */
// 일반 함수(실행코드 블록이 있는 함수, 관례대로 소문자로 시작)
var myFunction = function(){
    var  a = 10;
    console.log("일반함수");
}
console.dir(myFunction)
console.log(myFunction.a)
myFunction()

// 생성자 함수(관례대로 대문자로 시작)
var MyObject = function(name, age){
    this.name = name;
    this.age = age;
}

var obj = new MyObject('dooly', 20)
console.log(obj)
console.dir(obj)
console.dir(obj.prototype)