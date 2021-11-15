/**
 * let : Block Scope의 변수
 */

// let의 블록 범위
try {
    if(true){
        // let i = 10
        var i = 10
        let j = 20
    }
    console.log(i)

} catch (error) {
    console.log('catch')
    console.log('error:' + error)
}

try{
    let f = function(){
        var m = 20;
    }
    f();
    console.log(m)
} catch(e){
    console.error('error : ' + e)
}