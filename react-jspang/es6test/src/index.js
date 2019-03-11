let [a, b, c] = [0, 1, 2]
console.log(a, b, c)

let { d, e } = { d: "foo", e: "bar" }
console.log(d, e)

let arr1 = ["fa", "br"]
let arr2 = [...arr1]
arr2.push("ld")
console.log("arr1 ", arr1)
console.log("arr2 ", arr2)

function show(...arg) {
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
    console.log(arg[3])
}
show(1, 3, 5)

function showRest(first, ...arg) {
    console.log("rest arg.length ",arg.length)
    for(let val of arg){
        console.log(val)
    }
}
showRest(1, 2, 3, 4, 5)
