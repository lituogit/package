var str = "?name=zhangsan&psd=123"

function s2o(str) {
    // console.log("??", str);
    let arr = str.split("?");
    let str1 = arr[1];
    let arr1 = str1.split("&");
    var obj = {};
    arr1.forEach(function (item) {
        line = item.split("=");
        obj[line[0]] = line[1];
    })
    console.log(obj);
    return obj
}
module.exports = s2o;