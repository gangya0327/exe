console.log('----字符串----')

let key = 'peter'
let word = 'this is my name peter,hello.'
console.log('indexOf', word.indexOf(key))
console.log('includes', word.includes(key))
console.log('startsWith', word.startsWith(key))
console.log('endsWith', word.endsWith(key))

console.log(key.repeat(3));

console.log('----数字----')

let binary = 0B010101
console.log(binary)
let otacal = 0o666
console.log(otacal)
let number = 11 / 4
console.log('number是否无穷', Number.isFinite(number))
console.log('abc是否无穷', Number.isFinite('abc'))
console.log('NaN是否无穷', Number.isFinite(NaN))
console.log('undefined是否无穷', Number.isFinite(undefined))

console.log('NaN判断', Number.isNaN(NaN))

console.log('1.3是否为整数', Number.isInteger(1.3))
console.log('3是否为整数', Number.isInteger(3))

console.log('2的5次方', Math.pow(2, 5))

console.log('最大安全整数常量', Number.MAX_SAFE_INTEGER)
console.log('最小安全整数常量', Number.MIN_SAFE_INTEGER)
console.log('是否是安全整数', Number.isSafeInteger(103))

console.log('----数组----')

let json1 = {
    '0': 'yml',
    '1': 30,
    '2': 'hangzhou',
    length: 3
}
console.log(Array.from(json1))

console.log(Array.of(1, 2, 3, 4))

let arr = ['peter', 'gavin', 'rola', 'jhon']
console.log(arr.find(function (value, index, arr) {
    return value === 'rola'
}))
arr.fill('kate', 1, 2)
console.log(arr)

for (let item of arr) {
    console.log(item)
}
for (let item of arr.keys()) {
    console.log(item)
}
for (let [index, value] of arr.entries()) {
    console.log(index, ':', value)
}

let list = arr.entries()
console.log(list)
console.log(list.next().value)
console.log(list.next().value)
console.log(list.next().value)
console.log(list.next().value)
