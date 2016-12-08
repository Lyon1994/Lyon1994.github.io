

##转自：[腾讯Bugly(http://bugly.qq.com)](http://mp.weixin.qq.com/s/2nQzsuqq7Avgs8wsRizUhw)
作者：龚澄
发布日期：2016-12-01


## 打造“微信小程序”组件化开发框架
![](http://mmbiz.qpic.cn/mmbiz_jpg/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibYFH1wvEmia81H150z7ES2N5anCmwIpicqRapFQTIIE4mYgRcP95KO8MQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5)

# 导语

Bugly 之前发了一篇关于[微信小程序的开发经验分享（点击阅读）](http://mp.weixin.qq.com/s?__biz=MzA3NTYzODYzMg==&amp;mid=2653578147&amp;idx=1&amp;sn=dc8ed8974bd7086389155eecc82e524d&amp;chksm=84b3b1a4b3c438b275dc04bc454b1177fce1e3175841bd09a3be23ca8bf17679e3be90556d68&amp;scene=21#wechat_redirect)，小伙伴们在公众账号后台问了很多关于小程序开发方面的问题，精神哥在查阅相关内容的时候，发现了龚澄同学自己写了一个小程序开发框架，真的怒赞，赶紧安利给大家。

同时，如果大家有关于小程序的相关问题，可以在评论区留言，我们整理一下，看看后续为大家出一篇关于大家开发的问题解答。

千万不要问小程序的入口在哪里，精神哥也不知道，哈哈哈

# 正文

作为第一批小程序内测用户，我很有幸见证了小程序的成长，小程序上手十分简单，容易理解。但同时，因为运行环境的原因导致小程序无法使用市面上的流行框架。小程序本身提供一此特性如：模块化，模板，数据绑定等，能极大的方便了使用惯MVVM框架的用户。

在几个月的开发历程里，我一直希望能有一套方案更大可能的让小程序开发更贴近于当下开发习惯，因此才会有`wepy`。通过`wepy`开发的代码经过编译后，能生成一份完美运行在小程序端的代码，而且`wepy`的目的就是让小程序开发更贴近于传统H5框架开发，让小程序能像开发H5一样支持引入NPM包，支持组件化开发以及支持JS新特性等等。

# 小程序框架wepy文档

## 成品DEMO展示

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibYIL9TpBUyY9Pt1zQ3ICia21jg72383Yn31yJVbIgmria5taofvYX7l3Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

*   一个是使用`wepy new demo`命令生成的标准demo

*   一个是基于wepy开发的手机充值的完整demo。

*   一个是基于wepy开发的开源的仿微信的聊天界面

以上三个demo均在安卓机和IOS机上运行过通。
> 附上DEMO下载地址
> https://github.com/wepyjs/wepy-wechat-demo

## 快速入门

### 代码规范：

1.  变量与方法使用尽量使用驼峰式命名，避免使用`$`开头。
以`$`开头的方法或者属性为框架内建方法或者属性，可以被使用，使用前请参考文中提供的API文档。

2.  入口，页面，组件的命名后缀为`.wpy`。外链的文件可以是其它后缀。
请参考文中的wpy文件说明

3.  使用ES6语法开发。
框架在ES6下开发，因此也需要使用ES6开发小程序，ES6中有大量的语法糖可以让我们的代码更加简洁高效。

4.  使用Promise
框架默认对小程序提供的API全都进行了 Promise 处理，甚至可以直接使用`async/await`等新特性进行开发。

### 项目创建与使用

#### 安装wepy

以下安装都通过`npm`安装

1.  安装 wepy 命令行工具

    `npm install wepy-cli -g`
2.  在开发目录生成开发DEMO

    `wepy new myproject`
3.  开发实时编译

    `wepy build --watch`

#### 项目目录结构

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibjmacwqfocHHvElhSWWYMzTaadNDC4oc6PbSiasNIIxNULvM03H7pK9g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

#### 开发使用说明

1. 使用`微信开发者工具`新建项目，本地开发选择`dist`目录。

2. `微信开发者工具` → 项目 → 关闭ES6转ES5。

3. 本地项目根目录运行`wepy build --watch`，开启实时编译。

## 主要解决问题：

### 1. 开发模式转换

在原有的小程序的开发模式下进行再次封装，更贴近于现有MVVM框架开发模式。框架在开发过程中参考了一些现在框架的一些特性，并且融入其中，以下是使用wepy前后的代码对比图。

官方DEMO代码：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibic1jMK4gicby8qFU7U4tNSjtH4z4VlnBM9W9KSFMSOqd4aaY9lzguwpw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

基于wepy的实现：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibGyeUZHkFj3oIJhWaVIKWLD9ib7XtDAUSmKibGMqQmoKF0qS2KpKMFnuw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

### 2. 支持组件化开发。

参见文中章节：组件
示例代码：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibFMdgMwG1ENURic9CicDU6WpdzuntmJwI0SInINKKoZXqNEQjpegnt1NA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

### 3. 支持加载外部NPM包。

在编译过程当中，会递归遍历代码中的`require`然后将对应依赖文件从node_modules当中拷贝出来，并且修改`require`为相对路径，从而实现对外部NPM包的支持。如下图：
![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibznKLpayLu7RSu5Uml2HRWN13ibVO1u3n6a3zlWvmFm6ibS44ZNtQv63w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

### 4. 单文件模式，使得目录结构更加清晰。

官方目录结构要求app必须有三个文件`app.json`，`app.js`，`app.wxss`，页面有4个文件 `index.json`，`index.js`，`index.wxml`，`index.wxss`。而且文件必须同名。
所以使用wepy开发前后开发目录对比如下：
官方DEMO：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibwic2wNhmlhucUo8v249ASQyjLBCKo6jj1rdibcbbKZl1f9kGwHicTpP9A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

使用wepy框架后目录结构：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibu5KgbSy6HGL76axkeOmISRfIviaibPphWNqXQ5LDVnWeV08B6V0P47Gw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

### 5. 默认使用babel编译，支持ES6/7的一些新特性。

用户可以通过修改`.wepyrc`配置文件，配置自己熟悉的babel环境进行开发。默认开启使用了一些新的特性如`promise`，`async/await`等等。

示例代码：
![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibSyYXvN1hTX5YteldjciaJia1qYgOwAah97Id0KM25fcQxbRia1WFy5QeQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

### 6. 针对原生API进行优化。

对现在API进行promise处理，同时修复一些现有API的缺陷，比如：wx.request并发问题等。
原有代码：
![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibD2WKSKj8a52rtA1ZP5e5JF7I7WlXnThQ2MOH9c4ibiaRqDdQ8QyVeGjQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)
基于wepy实现代码：
![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibxK55pqLGZxT9RDUwlfJAeib1u5So9ts6SgjZnqn5azPdZNm2P71snIg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

在同时并发10个request请求测试时：
不使用wepy:
![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibGibGGqHDQDYsjibbnibH3OxV3ibnFpV1BQoQqrO9ibbgialrHluQoYhQvhbw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibTfszcjJXpzIu1jwiaDzOfJG2IKRA8vc5DJTX9EM6OD3VpuNqeFRVHPA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

使用wepy后：
![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDib3vwPew1qibeNeWGFRMGzwqKsHaiaggmLNXtlkZqI89GoibfzfsicZoCicHw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

## 进阶说明

### .wepyrc 配置文件说明

执行`wepy new demo`后，会生成类似配置文件。

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDiblJZdia7dmgdemFsNVVia8lQ9sY3RiaN9KrkRDPTjUhlO9xmDNrLDS7vxg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)
    **wpyExt：**缺省值为’.wpy’，IDE默认情况下不会对此文件类型高亮，此时可以修改所有文件为`.vue`后缀(因为与vue高亮规则一样)，然后将此选项修改为`.vue`，就能解决部分IDE代码高亮问题。
    **sass：**sass编译配置，参见(https://github.com/sass/node-sass)
    **less：**less编译配置，参见(http://lesscss.org/#using-less-usage-in-code)
    **babel：**babel编译配置，参见(http://babeljs.io/docs/usage/options/)

### wpy文件说明

`wpy`文件的编译过程过下：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibedcicNnYXe0LUsbkYSYmYHDlmOzQGISkaphccI4wd3kWVQnVn4s0k7A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

一个`.wpy`文件分为三个部分：

1.  样式`&lt;style&gt;&lt;/style&gt;`对应原有`wxss`。
2.  模板`&lt;template&gt;&lt;/template&gt;`对应原有`wxml`。
3.  代码`&lt;script&gt;&lt;/script&gt;`对应原有`js`。

    其中入口文件`app.wpy`不需要`template`，所以编译时会被忽略。这三个标签都支持`type`和`src`属性，`type`决定了其代码编译过程，`src`决定是否外联代码，存在`src`属性且有效时，忽略内联代码，示例如下：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibmRK4jUSu2AQCoanKRWl9cyc2Zd9tYmicv93iaDv0xUWodAqleObCnc1g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)
    标签对应`type`值如下表所示：
![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4ddQAAh4wO6XreHZwUqs4lNoK6lkp6GMfS404fFrKCb5tEq6hsTuzKb3AD8qDg5qaqog5ABqY4cOuA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)
### Script说明

#### 程序入口app.wpy

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibIYNeUkrFWjPezsYO8L8YEGLtslNr8bCCDiazicvpjNcgNRcnyMe8ok2g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

入口`app.wpy`继承自`wepy.app`，包含一个`config`属性和其全局属性、方法、事件。其中`config`属性对应原有的`app.json`，编译时会根据`config`生成`app.json`文件，如果需要修改`config`中的内容，请使用系统提供API。

#### 页面index.wpy

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibrBTPFs9Oo0dIGEAVCfUdUQ6alvk4OPBTicr0g11xMSQT5eXUdEzjyrA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

页面入口继承自`wepy.page`，主要属性说明如下：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4ddQAAh4wO6XreHZwUqs4lNoJ81mZoFxoo0HsENJuF8c94549dupTRTDphqk6Iq4mCNUvvBPZlCNWw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

#### 组件com.wpy

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDib0g5nNETWjTGJaAC9syZV1MRyJzicia19lsaYFQ94HgyU0PAkh1cEqnCw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

页面入口继承自`wepy.component`，属性与页面属性一样，除了不需要`config`以及页面特有的一些小程序事件等等。

### 组件

在小程序中，可以利用 JS模块化 和wxml模板 ，对业务模块进行划分，实现如下效果：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibzoMs92Gia0mLTGWerQgcxk0fWOOH8W99Eqy0OcqpasD3eaMr2ibLpArQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

但实际上不同的模块代码与事件交互都是在同一个页面空间处理的，比如说 `moduleA` 和 `moduleB` 中同时存在一个 add 响应事件时，就需要在 html 和 js 中分别定义为 `moduleA_add`，`moduleB_add`。业务模块复杂之后就不利于开发和维护。

在wepy中，利用组件化的特性可以解决此类问题，如下图：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibDQwuMlIeveUqxr6uiaRnqPvNY12TDeldUB5sZXXhVT9U1gFyaW1xibhA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

`ComA` 和 `ComB`中间的数据与事件相互隔离，可以分别拥有自己的`add`事件。

#### 组件引用

当页面或者组件需要引入子组件时，需要在页面或者`script`中的`components`给组件分配唯一id，并且在`template`中添加`&lt;component&gt;`标签，如`index.wpy`。

页面和组件都可以引入子组件，引入若干组件后，如下图：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibiciaACQr85rolHPqHhVtbLhTLZxsHoK2sJdib3GJXWZc8aKdPNKsDdr7g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

Index页面引入A，B，C三个组件，同时组件A和B又有自己的子组件D，E，F，G，H。

#### 组件通信与交互

`wepy.component`基类提供三个方法`$broadcast`，`$emit`，`$invoke`，因此任一页面或任一组件都可以调用上述三种方法实现通信与交互，如：

`$this.$emit('some-event', 1, 2, 3, 4);`

组件的事件监听需要写在`events`属性下，如：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDib7EXShwQ6RVfHe6FVibcPAxQTzzsRdvrYugHxSYX4icKiaEic2Ok3XaXDQA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

1.  **$broadcast**
`$broadcast`事件是由父组件发起，所有子组件都会收到此广播事件，除非事件被手动取消。事件广播的顺序为广度优先搜索顺序，如上图，如果`Page_Index`发起一个`$broadcast`事件，那么接收到事件的先后顺序为：A, B, C, D, E, F, G, H。如下图：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibiaYwIeHhlqB1nrXouibezGa8XDXhVLw7nkrSEc8ac9kYiaUR5ezSv3Tkw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

2.  **$emit**
`$emit`与`$broadcast`正好相反，事件发起组件的父组件会依次接收到`$emit`事件，如上图，如果E发起一个`$emit`事件，那么接收到事件的先后顺序为：A, Page_Index。如下图：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibkiaVyXFThjYNjU9PfY0EcwgUiaOHIN5Wus0THwGsVoYzbLY5VQjrTXQw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

3.  **$invoke**
`$invoke`是一个组件对另一个组件的直接调用，通过传入的组件路径找到相应组件，然后再调用其方法。
如果想在`Page_Index`中调用组件A的某个方法：
`this.$invoke('ComA', 'someMethod', 'someArgs');`
如果想在组件A中调用组件G的某个方法：
`this.$invoke('./../ComB/ComG', 'someMethod', 'someArgs');`

### 数据绑定

#### 小程序数据绑定方式

小程序通过`Page`提供的`setData`方法去绑定数据，如：

`this.setData({title: 'this is title'});`


因为小程序架构本身原因，页面渲染层和JS逻辑层分开的，setData操作实际就是JS逻辑层与页面渲染层之间的通信，那么如果在同一次运行周期内多次执行`setData`操作时，那么通信的次数是一次还是多次呢？在经过与开发小程序的同事求证后得知，确实会通信多次。

#### wepy数据绑定方式

wepy使用脏数据检查对setData进行封装，在函数运行周期结束时执行脏数据检查，一来可以不用关心页面多次setData是否会有性能上的问题，二来可以更加简洁去修改数据实现绑定，不用重复去写setData方法。代码如下：

`this.title = 'this is title';`

但需注意，在函数运行周期之外的函数里去修改数据需要手动调用`$apply`方法。如：
![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibcwIIq763bNS1cAPPyyt8ZR9SmLm1x7ODMs9aib8EZiayKjSU7fYeGmuw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

#### wepy脏数据检查流程

在执行脏数据检查是，会通过`this.$$phase`标识当前检查状态，并且会保证在并发的流程当中，只会有一个脏数据检查流程在运行，以下是执行脏数据检查的流程图：

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibpLT7F4ibHeSzcAoib8H77qE5NYQJs6BttIAh6701ByUicNJVosMGDeQbg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

### 其它优化细节

#### 1. wx.request 接收参数修改

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibK8XqtDClhqbqWptj9G6woemDxpGAP6DE06v9d57ZUzgKg2aJc7p35w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

#### 2. 优化事件参数传递

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibl1nWBgXXbxKa4hYNS6DKkibJ2W13UicrclFib4oWiaeDhfLqvYuIzKL45g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

#### 3. 改变数据绑定方式

保留setData方法，但不建议使用setData执行绑定，修复传入`undefined`的bug，并且修改入参支持：

`this.setData(target, value)`

`this.setData(object)`

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibmtLfugKooEOwwDnLYAW2KmJU8sWsqnaia4bsg3nb4Zku8S0wIuBPtfA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

#### 4. 组件代替模板和模块

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deejEGDcr8vpoYeibmXyiceDibehsFFd6u6RicAwwCviaxKylbZkUs29xFHcmeskFZMkrhDjl6VCo690bA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

## API

### wepy.event

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4ddQAAh4wO6XreHZwUqs4lNoNzEseR7NxvlE2kGTDc66VeajWAkRlxJ26YbQvkJElT6PN8qgJwicmKg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

### wepy.component

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4ddQAAh4wO6XreHZwUqs4lNoFBw94TvCECTzXs6iaFdAChkKD5u1aGgjeTcpJs5zluicd9jNQYWUGcyg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

### wepy.page

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4ddQAAh4wO6XreHZwUqs4lNoeN17M9RmBJibicqicFvYTRp6d7dgrzDGU6edCWS8lBt2GQm44f7Ah0pHQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

### wepy.app

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4ddQAAh4wO6XreHZwUqs4lNouh0K76VMf2vWcjkKD3GaiaHTkZZLyIdic57G87KfHJl21LZDDUtZmboQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

**如果您觉得我们的内容还不错，就请扫描二维码赞赏作者并转发到朋友圈，和小伙伴一起分享吧~**

![](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4ddQAAh4wO6XreHZwUqs4lNo0osjlL9NN6XxVn3ITOFicNH2RzgpLCawtTQgSjaAvfL6j1NcJVewfWg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

* * *

**本文系腾讯Bugly独家内容，转载请在文章开头显眼处**
**注明作者和出处“腾讯Bugly(http://bugly.qq.com)”**

![](http://mmbiz.qpic.cn/mmbiz/tnZGrhTk4dfnJPg1t9fUnoJlGoJlMTu2ia4sQO8K5b7KLe68UQmNWKLTkc8EywuR8hf55wfXv8f4p5RKH4zAicZA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)
