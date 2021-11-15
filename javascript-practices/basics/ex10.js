/**
 * 배열
 */

// 1. 내장객체(생성자 함수)
console.log("==생성1 : 내장객체(생성자 함수)================")

var a1 = new Array();
console.log(typeof(a1))
console.log(a1 instanceof Object)
console.log(a1 instanceof Array)
console.log(a1.length)

// 배열을 정의할 때 크기 지정은 별 의미가 없다.
// 동적으로 배열은 늘어난다.
var a2 = new Array(10)
a2[0] = 0
a2[5] = 5
a2[10] = 10;
console.log(a2)

// 초기값을 지정할 수 있다.
var a3 = new Array(0,2,4,6,8)
console.log(a3)


// 2. 리터럴
console.log("==생성2 : 리터럴 ======================")
var a4 = [
    function(){
        console.log('Hello')
    }, 20, "JavaScript", true, {
        name: "마이콜",
        email: "michol@gamil.com"
    }
]

console.log(a4.length)
console.log(a4)
for(var e of a4){
    console.log(e)
}
a4[0]()


console.log("===Array vs Object=================")
a5 = []
a5[0] = 0;
a5["1"] = 1;
a5["a"] = 2;
console.log(a5.length) // 원소가 3개 있지만, 숫자 형태의 키가 아닌 'a'는 배열의 원소로 카운트하지 않음
console.log(a5 instanceof Array)
console.log(a5['0'], a5[1], a5.a)
console.log('=========for in==============')
for(prop in a5){
    console.log(prop)
}

console.log('-------------object------------------')
var o5 = {}
o5[0] = 0;
o5["1"] = 1;
o5["a"] = '둘리';
console.log(o5.length)
console.log(o5 instanceof Array)
console.log(o5['0'], o5[1], o5.a)
console.log('=========for in==============')
for(prop in o5){
    console.log(prop)
}

console.log('=========================for each==================================')
a5.forEach((element, index) => {
    console.log(index + " : " +element) 
});


o5.length = 1; // length 프로퍼티를 추가하면 유사배열로 동작함(forEach 사용 가능)
Array.prototype.forEach.call(o5, function(el, index){
    console.log(el, ":", index)
})

