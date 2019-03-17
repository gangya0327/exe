let pro = new Proxy({
    add: function (val) {
        console.log(val + 100)
    },
    name: 'peter'
}, {
        get: function (target, key, property) {
            console.log('get')
            return target[key]
        },
        set: function (target, key, value, property) {
            console.log('set')
            console.log(value)
            console.log(key)
            return target[key] = value
        }
    })

console.log(pro.name)
pro.name = 'raven'
console.log(pro)
console.log('-------------')

let target = function () {
    return 'abcd'
}
let handler = {
    apply(target, ctx, args) {
        console.log('apply')
        return Reflect.apply(...arguments)
    }
}
let pro1 = new Proxy(target, handler)
console.log(pro1())