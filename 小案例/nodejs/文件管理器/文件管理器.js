// 第一步 配置服务器
const http = require('http')

// 引入fs内置模块
const fs = require('fs')

// 引入url内置模块
const url = require('url')

// 引入封装的删除非空文件夹
function deDir(src) {
    // 读取文件夹 判断文件夹中文件类型

    let arr = fs.readdirSync(src)


    arr.forEach(item => {
        let url = `${src}/${item}`

        // 判断是否是文件
        let isf = fs.statSync(url);
        console.log(isf);
        if (isf.isFile()) {
            // 是文件

            fs.unlinkSync(url);
        } else {
            // 是文件夹
            // console.log(url);
            deDir(url);
        }
    })

    fs.rmdirSync(src)
}


















const server = http.createServer((req, res) => {
    let query = url.parse(req.url, true).query
    // 设置编码格式
    res.setHeader('content-type', 'text/html;charset=utf-8')
    let myurl;
    if (typeof query.path !== 'undefined') {
        myurl = query.path;
    } else {
        myurl = '.'
    }

    if (typeof query.d !== 'undefined') {
        if (fs.existsSync(query.UR)) {
            if (query.d == 'un') {
                // 文件
                fs.unlinkSync(query.UR)
            } else if (query.d == 're') {
                deDir(query.UR)
            }
        }
    }

    let arr = fs.readdirSync(myurl)
    let tablestr = `<table><tr><th>文件名<th><th>操作<th></tr>`
    arr.forEach(item => {
        let URL = myurl + '/' + item
        let cls = fs.statSync(URL)
        if (cls.isFile()) {
            tablestr += `<tr><td>${item}<td><td><a href="/?UR=${URL}&d=un">删除</a></td><tr>`
        } else {
            tablestr += `<tr><td><a href="/?path=${URL}">${item}</a><td><td><a href="/?UR=${URL}&d=re">删除</a></td><tr>`
        }
    })
    tablestr += `<table>`

    res.write(tablestr)
    res.end();
})

server.listen(8081)