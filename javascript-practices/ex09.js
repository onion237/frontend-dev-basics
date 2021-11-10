/*
자바스크립트 객체 4
prototype 기반의 상속과 오버라이딩(자바스크립트 객체지향 프로그래밍)
*/
var MyObject = function(name, age){
    this.name = name;
    this.age = age;
}
MyObject.prototype.school = 'BIPA';
MyObject.prototype.course = 'DOUZONE';
MyObject.prototype.info = function(){
    console.log(`${this.name} : ${this.age} : ${this.school} : ${this.course}`)
}

// MyObject 객체 생성1
var o1 = new MyObject('둘리',10)
o1.info()
// overiding
o1.school = "DONGSEO";
o1.info()

console.log('--------------------------------------------------')
// MyObject 객체 생성2
var o2 = new MyObject("마이콜", 20);
o2.info()

// overiding
o2.info = function(){
    console.log('비밀');
}
o2.info()
console.dir(o1)
console.dir(o1.__proto__)