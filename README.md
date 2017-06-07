# jsLibary
> 一些js的实现 | 包括一些练习

1. promise简单实现 /static/js/MyPromise.js
> [引用地址1：彻底理解Promise对象——用es5语法实现一个自己的Promise(上篇)](http://www.cnblogs.com/malingyang/p/6535805.html)

> [引用地址2：大白话讲解Promise（一）](http://www.cnblogs.com/lvdabao/p/es6-promise-1.html)

2. Django做服务端，JavaScript跨域访问的实现（window.name iframe实现）源文件见crossDomainDemo

> 原理如下：window.name 传输技术，原本是 Thomas Frank 用于解决 cookie 的一些劣势（每个域名 4 x 20 Kb 的限制、数据只能是字符串、设置和获取 cookie 语法的复杂等等）而发明的（详细见原文：《Session variables without cookies》），后来 Kris Zyp 在此方法的基础上强化了 window.name 传输 ，并引入到了 Dojo （dojox.io.windowName），用来解决跨域数据传输问题。
首先，我们要知道关于window.name的这样一个特性：name 值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）。换句话说，name属性不会因为页面的url变化而变化，这就给跨域提供了机会。
我们可以在源页面中利用iframe标签嵌套要请求的目标页面，在目标页面设置window.name属性，即把要请求的信息赋给window.name。但是问题来了，两个页面处于不同域，源页面并不能获得目标页面的name值，因为name值只对位于同一域中的页面是可见的。此时，我们需要将iframe导航回与源页面处于同一域中air.html页面（即一个空页面，在这里充当一个中转的角色），上面说了这时候的name值依旧保持不变，那么我们就可以获取到它了。

> 分别启动 crossDomainDemo 和 crossDomainDemoAnother ,然后如下图访问 crossDomainDemo的/index
![屏幕截图](https://github.com/blff122620/jsLibary/blob/master/crossDomainDemo/screenshot.png?raw=true)

3. 破解前端面试（80% 应聘者不及格系列）：从闭包 说起 /static/js/closure.js

> [引用地址:从闭包说起](https://zhuanlan.zhihu.com/p/25855075)

4. 增加自定义原生js进度条组件 jsLibary/static/js/

> [下载地址](https://github.com/blff122620/jsLibary/blob/master/static/js/progress.js)

> [可以去我的找个网站看效果，顶部的进度条就是用的这个](http://www.bx1987.com/edu)

> 使用方法如下

```html
    <div class="top-progress" id="js-top-progress"></div> <!--结构只有一句话即可-->
    <script src="./static/js/progress.js"></script>
    <script type="text/javascript">
    var p = myProgress.create(document.getElementById("#js-top-progress"), "#21a557", false); //第一个参数必须为原生dom对象
    //第三个参数默认为true，表示进度条走完是否还显示
    p.start(); //进度条开始走
    
    window.onload = function() {
        p.over(); //页面加载完毕，调用，让进度条走完到100%
    }
    </script>
```
