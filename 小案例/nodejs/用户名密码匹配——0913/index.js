// 初始服务器
const http = require("http");
const s2o = require("./封装转换object对象.js");
const json = require("./users.json");
const server = http.createServer((req, res) => {
    // 设置编码格式
    res.setHeader("content-type", "text/html;charset=utf-8");

    // 通过req.url 获取查询参

    if (req.url !== "/favicon.ico" && req.url !== "/") {
        let qs = s2o(req.url);
        let ansower = json.find((item) => item.username == qs.name)
        if (ansower) {
            if (ansower.pwd == qs.pwd) {
                res.write("用户名密码匹配");
            } else {
                res.write("用户名或密码错误");
            }

        } else {
            res.write("用户名或密码错误");
        }
    } else {
        res.write("请输入查询参");
    }

    res.end();
})

// 设置端口号
server.listen(1220);