/*
변수와 데이터 타입
1. 기본타입(primitive type, 유사객체)
    - undefined
    - number
    - string
    - boolean

2. 객체 타입1 - typeof의 결과가 object
    2-1. (new 생성자함수()를 사용해서 만든)
        - Number()
        - Boolean()
        - String()
        - Object()
        - Array()
    2-2. null
    2-3. {} 객체 리터럴
    2-4. [] 배열 리터럴    

3. 객체 타입2 - typeof의 결과가 function
    3-1. new 생성자함수()를 사용해서 만든 함수
    3-2. var f = function(){} 함수 리터럴
    3-3. function f(){} 함수 리터럴
*/
/*

자바스크립트의 객체 분류2
1. 내장(Built-In, Native, Engine) 객체
    - 자바스크립트 엔진안에 미리 내장되어 있는 객체
    - Number, Boolean, String, Date, RegExp, ... : 생성자 함수
    - parseInt, setTimeout, ...                  : 일반함수
2. 호스트 객체
    - 자바스크립트 엔진이 임베디드된 환경(호스트)이 제공해주는 객체
    - 브라우저 : document, location, XmlHttpRequest, window
    - Node.js : os, http, fs, path
3. 사용자 객체
    - 사용자가 직접 정의한 객체

*/

console.log("=== 원시 타입(Primitive Type) ==========")
var u; // == var v = undefined; -> 변수 선언과 동시에 정의(값 명시하지 않을 시, undefined로 정의)가 일어남
var i = 10;
var s = "text";
var b = true;

console.log("u : " + typeof(u))
console.log("i : " + typeof(i))
console.log("s : " + typeof(s))
console.log("b : " + typeof(b))

console.log("=== 객체 타입1(Object Type) ==========")

var i2 = new Number(1)
var b2 = new Boolean(false)
var s2 = new String("text")
var o = new Object();
var arr = new Array();

var o2 = {}
var arr2 = []
var n = null;

console.log("i2 : " + typeof(i2))
console.log("b2 : " + typeof(b2))
console.log("s2 : " + typeof(s2))
console.log("o : " + typeof(o))
console.log("arr : " + typeof(arr))
console.log("o2 : " + typeof(o2))
console.log("arr2 : " + typeof(arr2))
console.log("n : " + typeof(n))

console.log("==== 객체 타입 2(Object Type2)==============")

var f = new Function("a", "b", "return a + b");

var f2 = function (){
    console.log("function called()")
}

console.log("f : " + typeof(f))
console.log("f2 : " + typeof(f2))

console.log("==== 원시타입과 Wrapper 객체는 구분없이 사용할 수 있다. ====")
console.log(i + i2);
console.log(s + s2);
// console.log(i + s);

// 기본타입으로 메소드 호출시, 임시로 Wrapper객체를만들고 메소드를 호출한 뒤 해제 
console.log("==== 원시타입도 메소드 호출이 가능하다.===================")
console.log(b.valueOf())
console.log(b2.valueOf())
