let arr1 = [2, 5, 48, 33, 2, 5, 5, 1, 2, 16, 5, 9]
console.log(Array.from(new Set(arr1)))

let arr2 = [2, 4, 6, 7, 11]
console.log(arr2.map(i => i * 2))

let arr3 = [1, 3, 4, 8, 11, 51, 21, 33, 17, 26, 2]
console.log(arr3.filter(i => i > 20))

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr4.reduce((pre, cur) => pre + cur))

let arr5 = [{
        name: 'zhang san',
        score: 60
    },
    {
        name: 'li si',
        score: 80
    },
    {
        name: 'wang wu',
        score: 90
    },
]
console.log(arr5.reduce((total, cur) => total + cur.score, 0))

let arr6 = [{
        id: 1,
        name: 'zhang san'
    },
    {
        id: 2,
        name: 'li si'
    }
]
console.log(arr6.find(i => i.id === 2).name)

let arr7 = ['aaa', 'bbb', 'ccc']
console.log(arr7.indexOf('ccc'))

let arr8 = ['aaa', 'bbb', 'ccc']
console.log(arr8.includes('ccc'))

let arr9 = ['aaa', 'bbb', 'ccc']
console.log([...arr9, 'ddd'])

let data12 = {
    name: 'peter'
}
console.log({ ...data12,
    age: 26
})

let data13 = [{
        id: 1,
        name: 'zhang san'
    },
    {
        id: 2,
        name: 'li si'
    },
    {
        id: 3,
        name: 'wang wu'
    }
]
let data13_new = data13.map(p => p.id === 2 ? { ...p,
    name: 'li er'
} : p)
console.log(data13_new)

let data14 = {id: 1, name: 'zhang san', age: '20'}
let data14_new = ( ({id,name}) => ({id, name}) )(data14) 
console.log(data14_new)

let data15 = {id: 1, name: 'zhang san', age: '20'}
let data15_new = '?' + Object.keys(data15).map(k => {
    return encodeURIComponent(k) + '=' + encodeURIComponent(data15[k])
}).join('&')
console.log(data15_new)


let data16 = [{
    id: 1,
    name: 'zhang san'
},
{
    id: 2,
    name: 'li si'
},
{
    id: 3,
    name: 'wang wu'
}
]
let data16_new = data16.findIndex(p => p.name === 'wang wu')
console.log(data16_new)