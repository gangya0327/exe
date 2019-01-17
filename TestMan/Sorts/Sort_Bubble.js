var arr = [13, 8, 2, 2, 16, 20, 18, 2, 5, 14]

// for (var i = 0; i < arr.length; i++) {
//     for (var j = i; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             var tmp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = tmp
//         }
//     }
// }

// console.log(arr)

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            var tmp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = tmp
        }
    }
}

console.log(arr)