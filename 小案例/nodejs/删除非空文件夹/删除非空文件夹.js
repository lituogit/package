const fs = require('fs');


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

deDir("./img")