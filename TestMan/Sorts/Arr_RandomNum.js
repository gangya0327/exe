function randomArrNum(n, min, max) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        var item = Math.floor(Math.random() * max) - min + 1;
        arr.push(item);
    }
    console.log(arr)
}

randomArrNum(10,0,20)