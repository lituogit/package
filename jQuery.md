### jQuery

使用方式：

script 导入本地，script导入在线

使用方法：

要使用jQuery对象，一定要变成jQuery对象

选择标签元素

$(#btn)

jQuery基本上都是方法调用

this.textContent = ${this}.text

把jQuer对象变成原生DOM方式，从伪数组中提取出来

$(this)[0].textContent =  ''



###  入口和加载函数

dom 0 :   document.onload =  

dom 2:  document.addEventListener('DOMContentLoaded')

```jQ
jQuery: $(document).ready(function(){	
	console.log($(#box));
})
精简写法:
$(function(){
    console.log($(#box));                                                               
})
```

### 选择器

使用jQuery 基本选择器

```
$('#cur,.class,p').css('color','red')
```



 层级选择器

```
$('#cur li').css('color','red')]
```



### 筛选器

```
$('li:first')

$('li:odd')  （奇）                 js中索引0开始  

$('li:even')  （偶） 

通过下标选择

$('li:eq(2)')         下标为2的属性

$('li:gt(2)')        下标大于2选择器

$('li:lt(5)')           小标小于5选择器
```



#### 内容选择器

```
$('li:contains("内容")')

$('li:empty')   选择标签内容为空的

$('li:has("span")')  选择包含的元素

$('[属性]')   属性选择   [attr=value],[attr!= ] ^$*

$('input:radio') 表单属性选择
```



会装到一个伪数组中，不用遍历就可以进行操作。

### 过滤和查找

```
$('li').eq(2)   下标 （动态）

$('li').children ()  找子元素(只能找一层)

$('li').find('em')   查找

 gt 大于   lt 小于 first第一个 

排他

siblings  同级所有   prev(all)上一个   next（all）下一个

$(this).css(自己样式).siblings().css('兄弟样式')
```



##### 链式编程

jQuery对象可以不限次数调用方法，操作自己，前提是这个方法返回值是当前自身

前提是一直有对象参与使用

当元素操作dom时候，由于过渡到其他元素上，一定要调用end（）方法补链；



### 操作DOM

##### 操作内容

```
$(this).text ('设置的内容')  ,   html (),      val()（表单value）
```



##### 操作类名

```javascript
addClass        添加类名（可以添加多个）

removeClass 移除类名

toggleClass   切换类名

hasClass        是否包含类名
```

#####  操作属性

 一个参数是获取，两个参数是添加

获取对象的标签上属性   

``` 
.attr('要获取的属性')    .removeAttr()
```

//  自定义属性是不会映射到标签上

操作对象上面的属性    

``` javascript
.prop()   .removeProp()     
```

##### 操作样式

.css  行内样式

添加类样式

##### 操作节点

```
node.appendTo($('.box'))  //把节点追加到div中
$('.box').append  //在div后面追加
node.prependTo($('.box'))  //把节点追加到div中
$('ul').prepend  在ul前面追加
//只能子元素主动调用   不能使用父元素调用
insertBefore($('参考元素')) 在参考元素之前追加
insertAfter($('参考元素')) 在参考元素之后追加

after()   before()  remove()  clone()克隆


```

##### 事件

批量注册事件不需要遍历 就可以批量注册

```
$('botton').click(function(){
	console.log(100)
})

//使用on的方式注册事件
$('button').on('click',function(){
    console.log(100)
})

//解绑事件  
.off()  解绑所有的事件
.off('事件'，指定事件)   解绑指定事件

//触发事件
元素.trigger('指定事件')

//事件委派
$('ul').on('参数1：事件','参数2：真正触发的节点',function(){
    console.log(100)
})
```

##### 获取元素尺寸

```
.width() .height 获取宽高
.offset()   获取偏移  left  top
scrollTop    scrollLeft  获取滚动距离
innnerwidth  height  带border 
outer width	 height  不带border

```



### 动画的操作

```
show()  hide()  toggle()
toggle('时间')    



sideUp()  滑上隐藏  sideDown() 滑下显示
sideToggle(' 时间') 切换 

淡入淡出
fadeIn()  fadeOut()  fadeToggle()

stop()阻止多次执行  delay延迟

动画  传入的内容，必须是对象
参数1: 样式表
参数2：执行时间
参数3：回调函数，在动画结束后才执行
animate（参数1：{
	// 只能是数值发生变化
    'width':300
}，参数2：1000，参数3：function(){log(100)}）
```

### 其他方法

```
each  手动遍历  参数1：索引   参数2：值
//遍历出来后 会变成dom元素

extend 扩展方法，一般用于制作插件
```

















 





