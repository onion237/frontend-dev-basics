/**
 * URL 다루기
 */
var url = 'http://www.mysite.com/user?name=둘리&no=10'
// 1. escape : URL 전부 encoding // deprecated
console.log(escape(url))

// 2. encodeURI : parameter만 encoding
console.log(encodeURI(url))

// 3. encodeURIComponent
console.log(`http://www.mystie.com/user?name=${encodeURIComponent('둘리')}&no=${encodeURIComponent('10')}`)

// 만들어야 할 URL
// http://mysite.com/user?no=10&name=둘리&email=kickscar@gmail.com
var url = 'http://mysite.com/user?';
var params = {
    name : '둘리',
    no : 10,
    email : 'kickscar@gmail.com'
}

var qs = []
Object.keys(params).forEach((key) => {
    qs.push(`${key}=${encodeURIComponent(params[key])}`)
});

console.log(url + qs.join('&'))