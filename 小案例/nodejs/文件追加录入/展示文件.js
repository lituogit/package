const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8')
    try {
        let arr = JSON.parse(fs.readFileSync('./data.json').toString());

        let str = `<ul>`
        arr.forEach(item => {
            str += `<li>用户名：${item.username}&nbsp;&nbsp;&nbsp;&nbsp;密码是：${item.pwd}`
        })
        str += `</ul>`
        res.write(str)
    } catch (err) {
        console.log(err);
    }
    res.end();
})

server.listen(1221);