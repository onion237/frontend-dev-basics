var App = function(){
    console.log("Hello World")
}

exports = App;
/**
 * require는 require()의 인자로 넘겨준 모듈을 실행시키고 return module.exports을 실행한다.
 * module.exports를 가리키던 exports 객체에 App함수를 넣었으므로, module.exports는 초기화 당시 할당된 빈 객체인 채로 남아있음
 */