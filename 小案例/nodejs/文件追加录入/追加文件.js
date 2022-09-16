const fs = require("fs")
const url = require('url')
const http = require('http')


const server = http.createServer((req, res) => {

    // 拿到处理过的  查询参
    let query = url.parse(req.url, true).query
    // 判断实训参里面是否有查询参  username  如果有就执行此次请求
    if (typeof query.username !== 'undefined') {
        try {
            // 判断此次有执行是否有存入数据的文件，没有就创建新的数据
            if (!fs.existsSync('./data.json')) {
                fs.writeFileSync('./data.json', JSON.stringify([]))
            }
            // 先读取json文件中的数据   读出来通过json  转为数组
            let arr = JSON.parse(fs.readFileSync('./data.json').toString());
            // 在拿到数组后面添加此次查询参
            arr.push(query);
            // 重新给json文件中传入数据
            fs.writeFileSync('./data.json', JSON.stringify(arr))

            res.write('success')
        } catch (err) {
            console.log(err);
        }
    }

    res.end();
})
server.listen(1220);
