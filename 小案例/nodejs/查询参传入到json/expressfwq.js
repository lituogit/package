// 引入 express 模块
const express = require("express");
// 创建web  服务器
const app = express();
// 引入fs 内置模块
const fs = require("fs")

// get 请求拿到查询参
app.get('/', (req, res) => {
    console.log(req.query);
    let qy = JSON.stringify(req.query)
    res.send(req.query);

    if (req.query != {}) {
        fs.writeFile("./myjson.json", qy + ",", { flag: "a" }, err => {
            if (err) {
                return console.log(err);
            }
            console.log("写入成功");
        })
    }
})




// 启动服务器
app.listen(80, () => {
    console.log('123');
})
