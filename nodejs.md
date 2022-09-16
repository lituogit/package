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



#### yarn  包管理工具

```	 
yarn 是Facebook  出品的指令，和npm功能一样
yarn使用   （常用指令）
    全局安装yarn：  npm i yarn -g;
   	通过yarn  取代  npm指令；
   	yarn --version  查看yarn 的版本类似  npm -v
   	yarn init  类似 npm init
   	yarn  add 模块名  类似npm install
   	yarn  global  add 模块名  全局安装 类似 npm 模块名 -g
   	查看 yarn 全局安装的目录 :yarn global dir
   	安装开发依赖 yarn add 模块名 --dev
   	安装生产依赖  默认安装  yarn add   --save
   	安装所有依赖  yarn  类似  npm i;
   	删除依赖  yarn remove 模块名称  类似 npm remove 模块名称
    查看下载源   yarn config get registry 
    
    
    
    // cyarn  china  yarn 使用一直  下载源为淘宝
    安装  npm i cyarn -g  

```

#### nodemon 工具

```
nodemon 工具指令类似node执行
nodemon  当nodejs文件发生改变的时候会自动重启服务器
1.全局安装nodemon  模块： npm i nodemon -g
2.使用nodemon 指令 替代 node 指令 即可使用


// 可能会出现系统进制脚本运行的问题
1,使用管理员身份打开  powershell
2.输入 ：set-executionpolicy remotesigned  输入y
```

#### buffer 数据

```
nodejs 里叫做缓冲区 是一种二进制数据
在nodejs里会把数据自动转成buffer   以16进制 表现

buffer的创建
方式1：  创建buffer的同时，会清空内存里之前的数据
Buffer.alloc(4,1)   01 01 01 01
方式2：  创建buffer  会直接使用之前的内存空间，速度块
Buffer.allocUnsafe(10);
res.fill(1)  //  给buffer数据填充内容
方式3：
Buffer.from("大家好")

把buffer数据转成字符串：
toString（）；
合并多个Buffer  
Buffer.concat([newbuffer1,newbuffer2])
```

#### 文件操作fs

```
引入内置模块   操作文件
const  fs = require("fs");
文件操作方式
文件操作（带后缀名的文件）   目录（文件夹）操作

fs.writeFile(文件写入内容)
所有的nodejs的文件操作都会分成2大类：
同步操作 
		函数后面都要加上 sync修饰符
		fs.writeFileSync(文件，写入内容)
		try{放入尝试执行的代码} catch{抓捕错误}
		
异步操作 
	    异步操作都会有回调
	    fs.writeFile()=>
	    
	    
fs.readFile  文件读取
异步读取      异步读取都是由回调函数
fs.readFile('./data.txt',()=>)
同步读取     同步读取文件没有回调
fs.readFileSync


修改文件   fs.rename
只能修改文件名
fs.rename('./data.txt','content',err=>{
    if(err){
     return   log(err)
    }
    log(sucess)
})


修改文件内容 ：没有方法   （思路） 先读取 再修改  再写入


文件删除  fs.unlink
复制文件  fs.copyFile
判断文件是否存在  fs.existsSync   判断只有同步

判断文件是目录还是文件
先获取文件详细信息  
fs.statSync
通过返回详细信息  使用  isFile 方法判断  
```

#### 目录操作

```
创建目录
fs.mkdir  ('./uploads',0777)  同步加Sync
0777 0代表八进制  第一个7：所有者  第二个7：组权限  第三个7：所有人
7 = 1+2+4  1：可执行  2：可写  3：可读

读取目录  
fs.readdir  读出的内容会返回一个数组 ，只读取一层

删除目录  只能删除空目录
fs.rmdir

修改目录   修改目录名
fs.rename

判断指定路径目录是否存在
fs.existsSync

判断是否是文件夹
先获取项目详细信息
fs.statSync
通过详细信息判断  isDirectory
```



#### url内置模块

使用url 模块 需要引入 

url.parse方法         可以处理url 字符串   参数2为true时把url 转为对象

例：url.parse(req.url).query  





#### 文件路径

进程 process

process.argv  是一个数据  **路径1** nodejs执行文件的路径  **路径二**：执行js的绝对的路径

process.exit()  退出进程

process.cwd()  获取nodejs命令执行的路径，指到目录



**全局路径**

__dirname  执行文件的上层目录的绝对路径

__filename:当前执行文件的绝对路径 指到文件





















#### Express

````
基于nodejs内置的http模块 进一步封装出来的

安装： npm  express@4.17.1

导入 express   =require("express)
创建服务器  app = express();
启动服务器  app.listen(端口号,回调执行函数)

请求方法  git  和 post     app.git("请求URL", (res,req)=>)    app.post
     可以调用 res.send方法  响应一个具体对象或字符串
req.query 获取查询参  默认是一个空对象
req.params 对象访问URL中   通过 : 来匹配动态参数
````

Express  托管静态资源

      express.static()      li:   app.use( express.static('public')  ) 通过localhost:8080/css/index.css



      托管多个静态目录，调用多次即可， 查找文件的先后循序等于托管的先后循序

   	/*  express 在指定的静态目录中查找文件，并对外提供资源的访问路径，因此，存放静态文件的**目录名不会出现在URL中**    */



**Express 中的路由**

在Express 中，路由指的是客户端的请求与服务器处理函数之间的映射关系

Express 中的路由分为3个部分组成，分别是**请求的类型**，**请求的URL地址**，**处理函数**  格式如下：

         类型              URL      处理函数

 app.METHOD（PATH,HANDLER）


























































































































































































































	



	







