/**
 * Array 확장(prototype 기반의 확장) : List 메소드 추가
 */

Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        console.log(this)
        console.log('==================================')
        var _this = this;
        // error : forEach 함수 내에서의 this를 변경시킬 순 있지만,
        // forEach안에서 호출시키는 callback function내부에서의 this를 건드릴순 없음
        // value.forEach.call(_this, function(e){
        //     console.log('---------------------------------')
        //     console.log(this)
        //     this.splice(index++, 0, e)
        // })
        /*
        */

        value.forEach(e => this.splice(index++, 0, e))
    }else{
        this.splice(index, 0, value)
    }
}

Array.prototype.remove = function(index){
    this.splice(index, 1)
}

var a = [1,2,4];

console.log(a)
a.insert(2, 3)
console.log(a)

a.remove(3);
console.log(a)

console.log("====================================================")
a.insert(2, ['a','b','c'])
console.log(a)


var f = function(param){
    console.dir(this)
    console.log(this + ":" + param)
}
// f();
var o = {name : "kickscar"}
f.call(o, "asdad4")

f.apply(o, ['abada'])
