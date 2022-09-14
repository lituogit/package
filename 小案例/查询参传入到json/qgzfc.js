
function s2o(str) {
    var obj = {}
    let arr = str.split("?");
    let str1 = arr[1];
    let arr1 = str1.split("&");
    arr1.forEach(function (item) {

        let line = item.split("=");
        obj[line[0]] = line[1];
    })
    console.log(obj);
    return obj;
}
module.exports = s2o;
