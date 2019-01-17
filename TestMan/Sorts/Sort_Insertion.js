var arr = [6, 5, 3, 8]
// var arr = [6, 5, 3, 8, 4, 7, 2, 1]
/**
 * 每次选择一个元素，并且将这个元素和整个数组中的所有元素进行比较，
 * 然后插入到合适的位置，图片演示如上，时间复杂度 O(n^2)
 */

var i, j
for (i = 1; i < arr.length; i++) {
    var tmp = arr[i]
    for (j = i; j > 0 && arr[j - 1] > tmp; j--) {
        arr[j] = arr[j - 1]
        arr[j - 1] = tmp
    }
}
console.log(arr)
/**
 * i{1} < 4,tmp = a1{5}
 * j=i{1} > 0 && a0{6} > 5
 * a1 = 6, a0 = 5, j--{0} > 0 no, next i
 * [5,6,3,8]
 * i{2} < 4,tmp = a2{3}
 * j=i{2} > 0 && a1{6} > tmp{3}
 * a2 = a1{6}
 * a1 = tmp{3}, j--{1} > 0 yes, next j
 * [5,3,6,8]
 * j{1} > 0 && a0{5} > tmp{3}
 * a1 = a0{5}
 * a0 = tmp{3}, j--{0} > 0 no, next i
 * [3,5,6,8]
 * i{3} < 4, tmp = a3{8}
 * j=i{3} > 0 && a2{6} > tmp{8} no, next i
 * ok
 */

var i, j
for (i = 1; i < arr.length; i++) {
    var tmp = arr[i]
    for (j = i; j > 0 && arr[j - 1] > tmp; j--) {
        arr[j] = arr[j - 1]
    }
    arr[j] = tmp
}
console.log(arr)
/**
 * i{1} < 4, tmp = a1{5}
 * j=i{1} > 0 && a0{6} > tmp{5}
 * a1 = a0{6}, j--{0} > 0 no, next i
 * a0 = tmp{5}
 * [5,6,3,8]
 * i{2} < 4, tmp = a2{3}
 * j=i{2} > 0 && a1{6} > tmp{3}
 * a2 = a1{6}, j--{1} > 0 a0{5} > tmp{3}
 * a1 = a0 = 5, j--{0} > 0 no, next i
 * a0 = tmp{3}
 * [3,5,6,8]
 * ...
 */