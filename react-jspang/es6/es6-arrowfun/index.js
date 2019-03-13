function add(a, b = 1) {
    return a + b
}
console.log(add(2, 3))
console.log(add(2))
console.log('需要的参数个数', add.length)

var arrow_add = (a, b=3) => a + b
console.log(arrow_add(2, 3))
console.log(arrow_add(2))
console.log('需要的参数个数', arrow_add.length)