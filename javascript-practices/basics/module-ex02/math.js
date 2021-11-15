/**
 * exports 뒤에 꼭 이름을 사용해서 export하는 것이 best practice
 */
exports.PI = 3.14

exports.max = function(){
    var max = Number.MIN_SAFE_INTEGER
    Array.from(arguments).forEach((e) => max < e? max = e: false)
    return max
}

exports.sum = function () {
    var sum = 0;
    Array.from(arguments).forEach((e) => sum += e)
    return sum
}

exports.min = function(){
    var min = Number.MAX_SAFE_INTEGER
    Array.from(arguments).forEach((e) => min > e? min = e: false)
    return min
}