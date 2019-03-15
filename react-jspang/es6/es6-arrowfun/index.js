function add(a, b = 1) {
    return a + b
}
console.log(add(2, 3))
console.log(add(2))
console.log('需要的参数个数', add.length)

var arrow_add = (a, b = 3) => a + b
console.log(arrow_add(2, 3))
console.log(arrow_add(2))
console.log('需要的参数个数', arrow_add.length)

let json = {
    a: 'reven',
    b: 'peter'
}
function fun(a, b = 'xxx') {
    console.log(a, b)
}
fun(json)

let arr = ['mark', 'rola', 'jhon']
function showArr(a, b, c) {
    console.log(a, b, c)
}
showArr(...arr)

let obj1 = { name: 'peny' }
let obj2 = { name: 'peny' }
console.log(Object.is(obj1.name, obj2.name))

console.log('+0 === -0: ', +0 === -0)
console.log('NaN === NaN: ', NaN === NaN)

console.log('Object.is(+0,-0): ', Object.is(+0, -0))
console.log('Object.is(NaN,NaN): ', Object.is(NaN, NaN))
console.log('===同值相等，is严格相等')

let a = { a: 'aaa' }
let b = { b: 'bbb' }
let c = { c: 'ccc' }
let d = Object.assign(a, b, c)
console.log('assign: ', d)