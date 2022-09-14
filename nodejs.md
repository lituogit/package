#### 交互式解释器

repl  类似浏览器console  直接在cmd中输入node

在前端的window  document dom结构在 nodejs中都没有

nodejs中有 进程： process  global



#### 终端基本操作

1.换行写代码  直接enter

2.可以通过  _(下划线)引用上面的结果

3.退出nodejs环境  ctrl+c 两次

#### 执行nodejs 文件

1.在终端中  node  文件路径执行(直接拖入)

2在终端中到达指定文件目录  node +  文件名（tab自动补全）

####  nodejs构建服务器

```
//引入内置nodejs 模块
const http = require("http")
//通过hhtp 构建一个nodejs服务，浏览器可以访问这个服务
const server = http.createServer((req,res)=>{
//设置编码格式  res.setHeader("content-type","text/html",charset="utf-8")
req:request 的简写 ,请求，浏览器给服务器内容
    res.write("hello world")// 给浏览器返还内容
    res.end();//告诉浏览器请求完毕
})
server.listen(8080);  设置端口号
```



地址组成：协议：//域名  ：端口

  **访问服务器**：

```
一、启动服务器 ：进入目录  node  文件名称
二、访问nodejs 服务器
     1.访问本机（自己访问自己）
        localhost：8080；
        127.0.0.1：8080
     2.访问别人的服务器
       通过ip地址  +端口号
```

**常见问题**

1修改内容后服务器需要重启；

2.中文需要设置编码格式

3.一个端口只能启动一个服务；

4.防火墙关闭 



#### nodejs模块化

**nodejs里模块化**

把js分为多个文件使用

nodejs 模块有独立的命名空间，不会造成变量污染

模块之间可以互相引入，或者导出；

nodejs模块化遵循commonjs规范，语法规则

**不使用模块化弊端：**

1.变量污染

2.各个文件的依赖关系复杂

**引入**

文件模块

```
//1.引入的关键字是 require（文件的路径）；注意一定需要加./

例子：  require("./a.js")  //引入a模块
// 每个模块有自己的独立命名空间
// 模块之间可以相互引入   在依赖的模块中 使用关键字require
// 编辑器追踪模块
//2.导出模块里指定的内容 module.exports = {}
```

目录模块

```
// 目录（文件夹）模块 ：index ---->a  ----->b  
// 导入目录模块 require("./目录")
//每个目录下 默认单入口，主入口，是index.js文件\

修改目录模块里的主入口
创建一个固定文件.package.json
通过指令修改  npm  init    简写：npm init-y
注意：不能用中文，规避关键字
```

别名导入

一般导入module.exports = {}

别名可简写为  exports.  =          (打点方式导出)   



#### nodejs 里的模块化  commonjs规范

引入文件： require（”./文件路径“）

引入目录： require（”./目录路径“）

		自动查找目录下的index.js主入口
	
		可以通过更改package.json文件修改主入口

引入特殊的目录: node_modules,require("模块名")

		node_modules会自动向上查找模块

导出

     		module.exports = {导出的内容}

导入文件,不加 **后缀** 默认查找js文件



#### querystring 参数

查询参：一种地址固定的格式参数

**格式**：   键名:键值&键名1:键值1&键名2:键值2

通过location.search  获取到地址栏？后的内容

通过location.hash  获取地址栏#的哈希值

nodejs里获取querystring 参数      req.url 来获取



#### 跨页面传参

//传参如果中有中文，被编码可以通过下面方法反编译

decodeURIComponent(location.search)



#### 包管理工具  npm: node package manager

npm : node package manager 

	第三方模块的管理工具

下载各种第三方模块的时候 从  https://registry.npmjs.org/ 服务器下载

- 可以再另外的一个网站查找包信息 `https://www.npmjs.com/`

npm 使用 	

	安装模块   1初始化 package.json文件  npm init

			   安装模块 :  npm install  模块名  简写 npm i "模块名"

					      安装指定版本:npm i 模块名称@版本号  

					       例:npm i jquery@2

	删除模块     npm uninstall   模块名    / npm  remove  模块名

 	全局安装和局部安装  

			     全局安装：一般 工具类型的模块会全局安装，  npm i  模块名  -g，

                             全局安装会装在   npm root -g, 随便在任意目录全局安装,

			     局部安装: 就是安装在命令运行的目录下面    (默认安装    )

	一次性安装所有模块 ：

			npm i  /npm install  自动在目录下查找package.json文件

			把package.json中的  **dependencies(生产依赖)**和**devDependenies(开发依赖)**

			一次性安装到node_modules中

**开发依赖和生产依赖**

开发依赖：只是在开发阶段时候使用，到项目上线的时候不需要编译，就是开发依赖

			在安装的时候   --save-dev   简写-D     放到devDependenies中

生产依赖：无论是在开发阶段还是项目上线阶段都会使用的就是生产依赖

   		     在安装的时候 --save     简写-S   (默认)     放到dependenies中

其他指令:

        -npm -h 查看帮助

        -npm   search 模块名称

        -npm   update 模块名称  ：更新模块依赖

#### 发布自己的模块

	查看npm 源地址  :  'npm  config get registry'    https://registry.npmjs.org/

	注册npm账号和密码   https://www.npmjs.com/  邮箱验证
	添加用户名和密码:  [npm adduser]   根据提示  填写用户名和密码

	

	准备自己的npm模块，推送到服务器中,npm包的名称不能和现有的名称 

	需要有package.json 文件

t	推送到线上  npm publish

	**删除自己的包 **  npm unpublish   --force  （强制删除）



####  镜像

- 修改npm仓库地址：`npm config set registry https://registry.npmmirror.com`
- 查看本地npm 源地址：`npm config get registry`


































































































































































































































	



	







