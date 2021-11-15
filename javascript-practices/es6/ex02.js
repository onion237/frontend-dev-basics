/**
 * const : Block Scope을 가진 상수
 */

// 1. block scope 확인
try{
    if(true){
        const NUM = 10;
    }

    console.log(NUM)
}catch(e){
    console.error("error : " + e)
}

// 2. 값 변경 시도 시, 에러 확인
