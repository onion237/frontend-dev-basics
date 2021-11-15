/**
 * String
 */

// 배열처럼 index접근 가능(length property가 있으므로 유사 배열로 볼 수 있다)
var str1 = 'Hello World'

// for(var i = 0; i < str1.length; i++){
//     console.log(str1[i])
// }

Array.prototype.forEach.call(str1, element => {
    console.log(element)
});

var str2 = 'Hello'
var str3 = 'World'
var str4 = str2 + ' ' + str3
console.log(str4)

var str5 = 5 + "5";
console.log(str5)

var str5 = 'boolean : ' + true;
console.log(str5)

// 메소드
var str7 = 'string1 string2 string3 string4'
var index = str7.indexOf('string2') // 찾지 못하면 -1 리턴
console.log(index)

console.log(str7.substr(10, 11 /*count*/)); 
console.log(str7.substring(10, 11 /*end*/));

var a = str7.split(" ");
console.log(a)
