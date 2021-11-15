/*
변수의 범위(Scope)
- 자바스크립트는 어휘에서 변수의 범위를 알 수 있는 정적 범위이다. (Lexical Scope)
1. ES6 이전
    - 자바와 같은 블록 범위를 지원하지 못했다.
    - 함수 범위만 지원했음 function scope
    - function() {... } 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가지게 된다
    - 만일, var 키워드 없이 함수 안에서 변수를 정의하게 되면 전역 범위를 가지게 된다. (Hoisting)
2. ES6 이후
    - block scope 지원
    - let, const 키워드 사용 시, block scope variable 선언 가능
*/

var i = 10

var f = function() {
    console.log(i)
    i = 30;
    console.log(i)

    var i = 20;
    j = 100;
    console.log(i)
    i = j - 1;
    console.log(i)
}

//block scope
{
    let x = 1000000;
    const PI = 3.14;
    x = 100
    // PI = 0; //error

    var vx = 'var variable';
}
// console.log(x) // block이 끝난시점에 x에 접근할 수 없음
console.log(vx) // vx는 var로 선언했기때문에 함수의 가장 위로 hoisting된다

// console.log(j) // f함수가 호출된 시점에서 j에 대한 hoisting이 일어나기 때문에, f함수가 한번 실행되기 전에 j에 접근할 시 error
f()
console.log(i)
console.log("j : ", j)