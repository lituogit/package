// 引入内置nodejs模块
const http = require("http");
// 引入json 文件
const Jso = require("./myjson.json")
// 引入字符串切割文件
const s2o = require("./qgzfc.js")
// 引入内置fs模块
const fs = require("fs")
// 通过http 构建一个nodejs服务
const server = http.createServer((req, res) => {
    // 设置编码格式
    res.setHeader("content-type", "text/html;charset=utf-8");
    // 获取查询参
    let qs = req.url;
    if (qs !== "/favicon.ico" && "/") {
        let user = s2o(qs);
        let sJN = JSON.stringify(user);
        fs.writeFile("./myjson.json", sJN, err => {
            if (err) {
                return console.log(err);
            }
            console.log("写入成功");
        })
        res.write("写入成功");


    } else {
        res.write("请输入查询参");
    }
    res.end();
})
// 设置端口号
server.listen(1220)