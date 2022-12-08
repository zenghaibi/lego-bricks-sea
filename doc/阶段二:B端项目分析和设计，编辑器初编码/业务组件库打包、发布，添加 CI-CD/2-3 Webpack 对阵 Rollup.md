#### Webpack vs Rollup

## **Webpack**

大型SPA项目的构建化，也就我们常说的Web应用。

* 通过各种Loader处理各种各样的静态资源
* 通各过种插件Plugins对整文件进行一些处理。
* Code splitting将公共模块进行提取。
* 提供一个webpack-dev-server,进行本开发。
* 支持HMR模块热替换。

## **Rollup**

Rollup设计之初就是需向ES module 的，构建出**结构扁平，性能出从**的类库。

**ES module 的规则**

* import只能作为模块顶层的语句出现，不能出现在function里面，或if里面
* ES import的模块名只能是字符串常量。
* 不管import的语句出现的位置在哪里，在模块初始化的时候所有import必须已
  经导入完成

**使用工具静态分析过程**

![图片描述](https://img.mukewang.com/wiki/603b0ad409f1d39407150680.jpg)

* Three shaking 机制 - 摇树！让死了的叶子掉下来。
* 目的就是将es modules打包生产特定的JS 模块文件，并减小它的体积。

## **Webpack vs Rollup**

通过以上的对比可以得出，构建App应用时，webpack比较合适，如果是类库（纯JS 项目）rollup更加适合。

**Webpack的优势**

* 强大的生态插件
* 面向开发应用的特性支持HMR，按需加载，公共模块提取
* 简化Web开发的环节，图片自动base64,资源的缓存（添加chunkld）

**Rollup的优势**

* 构建高性能的模块文件，这正是类库所需要的。
* 编译出来的代码可读性好，内容更小，执行效率更高
* 配置比较简单。
