let str1 = [1, 21, 88, 6, 13, 25, 4, 79]
console.log(str1.sort())

numberSort = (a, b) => {
    return a - b
}

console.log(str1.sort(numberSort))

console.log(str1.sort((a, b) => {
    return a - b
}))

console.log(str1.sort((a, b) => {
    return Math.random() > 0.5 ? 1 : -1
}))

//将以下英雄人物按照id进行排序
const hero = [{
        name: "东邪黄药师",
        id: "4"
    },
    {
        name: "西毒欧阳锋",
        id: "6"
    },
    {
        name: "南帝段智兴",
        id: "3"
    },
    {
        name: "北丐洪七公",
        id: "1"
    },
    {
        name: "中神通王重阳",
        id: "9"
    },
];
console.log(hero.sort((a, b) => {
    return a.id - b.id
}))