var math = math || {};

// IIFE (즉시실행함수) 함수 선언
// 선언과 동시에 실행이 되며, 이름이 있으므로 나중에 호출 할수도 있다.
// (function() {
//     function sum(a,b) {
//         return a + b;
//     }
//     math.sum = sum;
// })()

// ES2015 모듈시스템 사용
export function sum(a,b) {
    return a+b;
}