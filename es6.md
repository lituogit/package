### 1let和const关键字

```
console.log(count);    //报错  在没有初始化之前不能被访问
let count = 18;
let count = 'abc'   //报错，不能声明已经具备定义过的标识
count = true;   //可以修改
log（window.count）  //undefined   不会挂载到window上
if(true){
    let count1 = 123;
}
let 声明的变量会开启块级作用域


const 同上 但是不能修改

总结：let 和const在声明之前不能被访问，只能声明一次，不能重复声明
	 let 声明的是变量可以修改 const声明的常量 不可以修改
	 let 和 const 不会自动挂载到window中，他们会开启块级作用域
	 let 和 const 在分支、循环、函数会开启块级作用域 
	 //不会发生预解析
	 /*在实际工作中，一般多数情况为了不让其他人修改，
	 会把返回的数据或者定义的内容使用const定义
	 */
```

### 2.解构赋值

```
数组的解构赋值
let arr = [1,2,3];
let [n1,n2,n3] =arr;
[n1,n2,n3] =arr;


```



### 箭头函数

箭头函数只能改造匿名函数

let func = ( ) => {

	console.log(100)

}

有且只有一个形参,形参的小括号可以省略

let func = a => {

log(a)

}

func(1);



#### 模板字符串

``  双反引号  会保留格式的模板字符串

**插值表达式**

${} ----->  插值表达式   {{}}   {}   #{}  <%= %>

插值表达式的使用：

			可以解析变量

			做一些简单的运算，接收有返回值的逻辑

  

