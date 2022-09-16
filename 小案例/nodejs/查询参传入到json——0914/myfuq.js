// 引入内置nodejs模块
const http = require("http");
// 引入字符串切割文件
const s2o = require("./qgzfc.js")
// 引入内置fs模块
const fs = require("fs")
// 引入内置模块 url   代替切割字符串方法
const url = require("url");
// 通过http 构建一个nodejs服务
const server = http.createServer((req, res) => {
    // 设置编码格式
    res.setHeader("content-type", "text/html;charset=utf-8");
    // 获取查询参
    let qs = req.url;

    if (qs !== "/favicon.ico" && qs !== "/" && qs !== "") {

        let user = url.parse(qs, true).query;
        console.log(user);
        let sJN = JSON.stringify(user);
        // 异步操作----------
        // fs.writeFile("./myjson.json", sJN, err => {
        //     if (err) {
        //         return console.log(err);
        //     }
        //     console.log("写入成功");
        // })
        // res.write("写入成功");

        // 同步操作-----------
        try {
            fs.writeFileSync("./myjson.json", sJN)
            res.write("写入成功")
        } catch (err) {
            console.log(err);
            res.write(err);
        }
    }
    res.end();
})
// 设置端口号
server.listen(1220)