// 数组去重
var noRepeat = function (arr) {
    var hash = [];
    hash[arr[0]] = 1;
    for (var i = 0; i < arr.length; i++) {
        if (hash[arr[i]] == undefined) {
            hash[arr[i]] = 1
        }
    }
    arr = [];
    for (key in hash) {
            arr.push(key);
    }
    return arr
}
arr = [1, 2, 5, 4, 2, 2, 3];
console.log(noRepeat(arr))