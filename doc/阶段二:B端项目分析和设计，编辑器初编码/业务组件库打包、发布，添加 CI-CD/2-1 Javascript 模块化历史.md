##### Javascript 模块发展历史

**模块 (modules) 是什以？**

*模块就是一段可以重用代码块*

```python
from package import function
```

```go
package main
import ("fmt")
```

#### 模块化的优点

* 可维护性
* 可服用性

#### ES6 之前没有模块的 年代

```javascript
// 使用 backbone.js 方法
<script src="spec/support/jquery.js"></script>
<script src="spec/support/underscore.js"></script>
<script src="spec/support/backbone.js"></script>
<script src="backone.localStoreage.js"></script>
<script src="todos.js"></script>
```

##### 全局变量 + 命名空间（namespace）

```javascript
// IIFE 自执行函数，创建一个封闭的作用域，赋值给一个变全局变量
var nameCollection = (function() {
	// private members
	var objects = [];
	// Public Method
	function addObject(object) {
		objects.push(object)
		printMessage(object)
	}
	// private Method
	function printMessage(object) {
		console.log("Object successfully added:", object);
	}
	// public members, exposed with return statement
	return {
		addName: addObject,
	};
})()
namesCollection.addName('H.B Zeng')
```

**缺点**

* 依赖全局变量，污染全局作用域，不安全
* 依赖约定命名空间来避免冲突，可靠性不高
* 需要手动管理依赖并控制执行顺序，容易出错
* 需要在最终上线前手动合并所有用到的模块

#### Common.js

```javascript
  const bar = requre(./bar)
  module.exports = function() {

  }
```

* 没法在浏览器里直接运行

#### AMD - （Asynchornous module definition）

* 采用异步方式加载模块
* 仅仅需要在全局环境定义require 与 define, 不需要其他的全局变量
* 通过文件路径或模块名定位模块
* 提供了打包工具自动分析依赖并合并
* 配合特定的AMD加载器使用，ReuqireJS
* 同时还诞生了很多类似的模块标准CMD

```javascript
define(function(require){
	// 通过相对路径获取依赖模块
	const bar = require('./bar')
	// 模块产出
	return function() {

	}
})
```

### ES6
```javascript
// 通过相路径获取依赖
import bar from './bar'
// 模块产出
export default function() {

}
```
* 引入和爆露的方式更加多样
* 支持复杂的静态分析
