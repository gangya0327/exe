var f = Symbol()
console.log(f)
console.log(typeof f)

let obj = {
    name: 'peter',
    age: '31'
}
let add = Symbol()
obj[add] = 'hangzhou'
for (let item in obj) {
    console.log(obj[item])
}
console.log('symbol: ', obj[add])

let setArr = new Set(['peter', 'raven', 'holy', 'raven'])
console.log(setArr)
setArr.add('mark')
console.log(setArr)
console.log("setArr.has('holy'): ", setArr.has('holy'))
setArr.delete('holy')
console.log('delete holy: ', setArr)
setArr.clear()
console.log('clear: ', setArr)

let setArr2 = new Set(['peter', 'raven', 'holy', 'raven'])
for (let item of setArr2) {
    console.log('let...of... ', item)
}
setArr2.forEach(val => console.log('forEach ', val))
console.log(setArr2.size)