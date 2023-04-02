# JavaScript Basics

<!--ts-->
<!--te-->

## Operators

### == 和 ===

- `==` 不严格等价，如果两边类型不同，会把右边的操作数自动转换为左边的类型，再判断值是否相等；
- `===` 严格等价，值和类型 Value 和 Type 都要相同才真。平时主要用三个等号。

### 非布尔值进行逻辑运算

- `false || 1`的结果是 `1`；
- JS 中存在 **Falsy** 类假（`false`）的值：
	- `undefined`
	- `null`
	- `0`
	- `false`
	- `''` (empty string)
	- `NaN` (Not a Number)
- 其他所有不是 **Falsy** 的值都是 **Truthy**。


### || 短路原则

`false || 1 || 2` 的结果是 `1`

```js
let userColor = undefined;
let defaultColor = 'blue';
// 如果用户没有选择颜色，那么就使用默认颜色。
let currentColor = userColor || defaultColor;
```

### Bitwise: `|` `&`

```js
let readPermission = 4; // 00000100
let writePermission = 2; // 00000010
let executePermission = 1; // 00000001
let myPermission = 
readPermission | writePermission | executePermission; // 给用户权限
let message = 
(myPermission & readPermission) ? 'yes' : 'no'; // 三元表达式：判断用户是否具有某权限
```

### 注意事项

- 变量命名要有意义；
- 函数单一性功能；
- 密切相关的代码放在一起，和别的空行。


## Flow Control

### switch

`if-else` 替代 `switch`（过时）

### do-while

`do-while` 的函数体至少会执行一次

### for...in：对象遍历

```js
for (let key in obj) {
	console.log(key, obj[key]);
}
```

### for...of：数组遍历

```js
for (let value of arr) {
	console.log(value);
}
```


## Object

### 工厂函数和构造函数

（效果一样，随便用哪个）
- Factory Function
	```js
	// Factory Function
	
	function createCircle(radius) { // Camel Notation
		// return an object
		return {
			radius, // use parameter as value
			draw() { // no need 'function' keyword
				console.log('draw');
			}
		};
	}
	
	const circle1 = createCircle(1);
	console.log(circle1);
	```
- Constructor Function
	```js
	// Constructor Function
	
	function Circle(radius) { // Pascal Notation
		this.radius = radius;
		this.draw = function() {
			console.log('draw');
		}
	}
	// 1. create an empty js object {}, 
	// 2. 'this' reference to {}
	// 3. 'this' creates propeties to obj
	//    {}.radius = radius, {}.draw = ..
	const circle1 = new Circle(1);
	```

### const 对象

`const obj = new someObj();`：
- 不能 re-assign
- 可以 **动态** 增删属性和方法。
```js
delete obj.property;
```

###  对象的构造器

`obj.constructor`

 - 使用构造函数创建的对象，构造器就是构造函数本身
 - 使用工厂函数创建的对象，构造器是 JavaScript 内置的构造函数 `Object()`，因为工厂函数使用了 `{}` （*object literal syntax*），它在内部就是调用了 `Object()`

以下的构造对象的方法是等价的：

 - `new String()` === ``' ', " ", ` ` ``
 - `new Boolean()`=== `true, false`
 - `new Number()` === `1, 2, ...`

### 函数是对象（万物是对象）

- `new Function(parameters, statements)`
```js
	const Circle1 = new Function('radius',`
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	}
	`);
```
- `const circle1 = {}; Circle.call(circle1, 1);` === `const circle1 = new Circle(1);` 
- `Circle.call(thisArg, ArgList);`
- 如果不使用 `new`，`this` 指向 `window`

### Value Type and Reference Type

- 值拷贝类型 Primitive: 
	- Number
	- String
	- Boolean
	- Symbol
	- undefined
	- null
- 引用（地址）拷贝类型 Object: 
	- Object
	- Function
	- Array
- `const` 声明的变量：
	- 如果是值拷贝，则不能修改赋值；
	- 如果是引用拷贝，则可以修改对象的属性内容，但不能 re-assign 另一个对象，因为会修改地址。

### 对象不是可枚举 

not iterable，不能直接直接用`for..of` 遍历：

```js
for (let key in obj){};
for (let key of Object.keys(obj)){}
// each entry is [key, value]
for (let entriy of Object.entries(obj)){}; 

// key if in this object
if (key in object) return true;
```

### 对象拷贝

怎么把值拷贝过去？

- 遍历拷贝
- `const newObj = Object.assign({}, oldObj);`
- separate operator `...` ：`const another = { ...circle };`

### JS 的 GC

Garbage Collector 垃圾回收是自动进行的。


###  String Literal 和 Template Literal

```js
const message = '  hi there.  ';
const s = new String('hello then');
message.trim();
message.trimLeft();
message.trimRight();
message.split(' ');
```

### Date

```js
const now = new Date();
const date1 = new Date('May 11 2022 09:00');
const date2 = new Date(2022, 4, 11, 9);
// month from 0 to 11
now.getxx();
now.setFullYear(2017);
now.toDateString();
now.toTimeString();
now.toISOString();
```

### 用对象的眼光观察

设想，如果是你来设计某个事物，构成一个对象，会需要什么属性和方法。


## Arrays

### 增加 Adding

```js
let a = [];
// End
a.push('a', 'b'); // ['a', 'b']
// Beginning
a.unshift(1, 2); // [1, 2, 'a', 'b']
// Mid
a.splice(2, 0, 3, 4); // [1, 2, 3, 4, 'a', 'b']
// 2 means start index is 2
// 0 means delete 0 element
// index >= length，则在末尾添加新元素
```

### 查找 Finding

 - Primitive
	
	```js
	let a = [1, 2, 3, 4, 1];
	
	// find first
	a.indexOf(1); // 0
	a.indexOf('a'); // -1
	a.indexOf(1, 2); // 4 (from index 2 to find)
	
	// find last
	a.lastIndexOf(1); // 4
	
	// exist or not
	if(a.indexOf(1) !== -1) {}
	if(a.includes(1)){}
	```

-  Reference

	```js 
	const courses = [
		{id: 1, name: 'a'},
		{id: 2, name: 'b'}
	];
	
	// find first matched element
	//const course = courses.find(function(course){
	//	return course.name === 'a';
	//})
	
	// use arrow function
	const course = courses.find(course => course.name === 'a');
	
	// find(predicate or callback function)
	// findIndex()
	// 当返回值为 true，返回结果；
	// 当返回值为 false，继续在数组中向后查找。
	```


### 删除 Removing

```js
const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop(); 
// last === 4, 
// numbers [1, 2, 3]

// Beginning
const first = numbers.shift();

// Middle
numbers.splice(1, 2);
// from index 1, delete 2 elements
// return elements that be removed
```

### 清空 Emptying

```js
let numbers = [1, 2, 3, 4];
let another = numbers;

// Sol 1 单一引用时
numbers = []; // 但是 another 还指向那块内存空间

// Sol 2 多个引用时
numbers.length = 0;

// Sol 3
numbers.splice(0, numbers.length);

// Sol 4 不推荐
while (numbers.length > 0)
	numbers.pop();
```


###  合并拆分 Combining and Slicing

```js
const first = [1, 2, 3];
const second = [4, 5, 6];

// combine [1, 2, 3, 4, 5, 6]
const combined = first.concat(second);

// s
const slice = combined.slice(1); 
// from index 1 to end
// combined.slice(1, 2): from index 1 copy 2 elem
// combined.slice(): copy all
```

- 如果拷贝了引用类型，那么拷贝的是它的引用
	```js
	const a = [{id : 1}];
	const b = [2, 3, 4];
	
	const combined = a.concat(b);
	// [{id: 1}, 2, 3, 4]
	a[0].id = 10;
	// [{id: 10}, 2, 3, 4]
	// slice 同理，也是拷贝的引用
	```


### Spread Operator

`...` 拆分数组，把每个元素单独返回。

```js
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, 'a', ...second, 'b'];
const copy = [...combined];

let [a, b, c] = [...first];
// a === 1, b === 2, c === 3
```


### 遍历 Iterating

```js
const numbers = [1, 2, 3];

// for of / for in
for (let number of numbers) 
	console.log(number);

// forEach
numbers.forEach((number, index) => 
			   console.log(index, number));
```


### 连接 Joining Arrays

```js
const numbers = [1, 2, 3]

// join 
const joined = numbers.join(','); // 1,2,3
// numbers.join() === '1,2,3' 默认用逗号

// change space' ' to  hyphen'-' in url
const message = "This is my first message";
const parts = message.split(' '); // word array
const combined = parts.join('-'); // a string
```


### 排序 Sorting

- 原地修改，不返回新的数组。
- 不指定回调函数，会按照元素转换为字符串的 Unicode 顺序
	- ASC `numbers.sort()`
	- DESC `numbers.reverse()`
- Reference
	```js
	const courses = [
	{id: 1, name: 'Node.js'},
	{id: 2, name: 'javascript'}
	];
	
	// 按升序
	courses.sort(function(a, b) {
	// a < b => -1 负数表示 a 前 b 后
	// a > b => 1  正数表示 a 后 b 前
	// a === b => 0 0 表示不交换顺序
	// 消除大小写敏感
	const nameA = a.name.toUpperCase();
	const nameB = b.name.toUpperCase();
	
	if (nameA < nameB) return -1;
	if (nameA > nameB) return 1;
	return 0;
	});
	```

- 简单的排序：
	```js
	// a - b < 0 不交换
	// a - b > 0 交换
	// a - b === 0 不动
	// 从小到大
	arr.sort((a, b) => a.value - b.value); 
	```

### 测试 Testing Elements

新特性，旧浏览器可能不兼容。

```js
// 依次搜索每个元素，如果出现了负数就直接返回 false，不向后继续测试
const allPositive = numbers.every(function(value){
	return value >= 0;
});

// 只要出现了符合条件的一个，就返回
const atLeastOnePositive = numbers.some(function(value){
	return value >= 0;
});

```


### 筛选 Filtering

```js
const numbers = [1, 2, -1, -3];
const filtered = numbers.filter(n => n >= 0);
// [1, 2]
// 返回符合条件的元素组合成的数组
// 还可以传index等参数
```

同样可以筛选符合条件的对象。

### 映射 Mapping

把每个元素映射为其他的东西。

- 映射成字符串：
	```js
	const items = filtered.map(n => '<li>' + n + '<\n>');
	const html = '<ul>' + items.join('') + '<\ul>';
	```
- 映射成对象：
	```js
	// obj 的 {} 会被默认识别为函数体的{}
	// 所以如果直接返回对象的话，要加一层 ()
	const items = filtered.map(n => ({value: n}));
	```

Chaining methods： 链式调用

```js
// 依次对前面生成的数组进行处理
const items = numbers
	.filter(n => n >= 0)
	.map(n => ({ value: n }))
	.filter(obj => obj.value > 1)
	.map(obj => obj.value);
```


### 缩减 Reducing

把整个数组缩减成一个单一的值：数字、字符串、对象……

```js
const numbers = [1, 2, -3, 4];

const sum = numbers.reduce(
	(accumulator, currentValue) => accumulator + currentValue
);
// a = 1, c = 2 => a = 3
// a = 3, c = -3 => a = 0
// a = 0, c = 4 => a = 4
// sum = 4

// 默认时 a 是第一个元素，c 是第二个元素
// 给 reduce() 传入第二个参数初始化 a，但是会多一次运算

```


## Function

### Hoisting

Function declaration will be moved to the top of the file by JavaScript engine when executing. But function expression will not.

- 函数声明
	```js
	walk();
	// funtion declaration
	function walk() {
	    console.log('walk');
	}
	```

- 函数表达式
	```js
	// Uncaught ReferenceError:
	// Cannot access 'run' before initialization
	// run();
	
	// named / anonymous function expression
	const run = function() {
	    console.log('run');
	};
	let move = run; // reference to the same af
	run();
	move();
	```


### arguments

每个函数内，有一个内置的对象：`arguments`，因为有迭代器 `Symbol.iterator`，所以可以使用 `for...of` 遍历：

```js
function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}
console.log(sum(1, 2, 3, 4));
```


### Rest Parameter

`...` Rest Operator 和 Spread Operator 区分：

1. `let [a, b, c] = [...numbers]` 是把 numbers 数组的每个元素单独拿出来
2. `function fn(a, b, ...args)` 是将多余的parameters 放到一个数组 args 里

```js
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));
```
- 使用 Rest Operator 的参数叫做 Rest Parameter，必须是参数列表的最后一个参数。

### Default Parameter

函数的参数列表中，有默认值的参数，在调用函数时，可以不显式赋值。

最佳实践是把有默认值的参数都放在最后，这样调用传参时不用 `undefined` 占位跳过（很丑）


### Getters & Setters

```js
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
// setter => change(mutate) properties
person.fullName = 'John Smith';
// getter => access properties
console.log(person.fullName);
```


### try & catch

```js
try {
	// some codes, then
	throw new Error('An error.')
} catch(e) {
	// deal with the error
	// or give some feedback to user
}
```


### Scope (Local vs Global)

```js
const color = 'red'; // global

function start() {
	const color = 'blue'; // local
	if (true) {
		console.log(color); // blue
	}
}
```

- 局部变量会覆盖掉同名的全局变量。
- 全局变量可以在任意地方访问，所以要避免声明和使用全局变量，因为可能在某个位置就把需要的值改变了。


### Let vs Var

1. 在函数内部，作用域范围：
	- `var` 声明的变量是 function-scoped，在函数内部任意位置都能访问
	- ES6（ES2015）开始使用 `let` 和 `const` 声明变量是 block-scoped，在代码块（for 循环 或者 if 语句）之外都无法访问，但是在内部的代码块中可以访问。

2. 全局作用域：
	- `var` 声明的全局变量，会添加到 `window` 对象的属性中，而 `window` 对象是唯一的，可能会覆盖其本身的同名属性。所以应该避免给 `window` 对象添加成员。
	- `let` 不会添加到全局对象。

在 Global 作用域定义的函数，也会添加到 `window`对象的成员，也应该避免（使用 module）。

另外，`var` 声明的变量，可以重复声明。

### 'this'

The `this` keyword references "the **object** that is executing the current function". 

`this` in: 
- method -> obj
- function -> global (`window` in browser, `global` in node)

```js
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach((tag)=>{
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();
```

- `forEach` 的第一个参数是一个回调函数 callbackfn，执行回调函数的是 `window` 对象，而不是 `video` 对象，所以这个回调函数不是 method，回调函数中使用的 `this` 就是 `window`
- 增加第二个参数 `thisArg` 传入一个对象，那么回调函数中 `this` 指代的就是传入的对象。

但是，并不是所有函数都可以传入 `thisArg`。


### Change 'this' 

1. 中继变量 `self`
2. `bind` 方法
3. 箭头函数，继承 `this`

（不好的办法）在 `this` 被修改之前，给一个别名 `const self = this`
```js
showTags() {
	const self = this;
	this.tags.forEach(function(tag) {
		console.log(self.title, tag);
	});
}
```

函数对象的内置方法：`call, apply, bind`

```js
function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name:'apple' }, 1, 2);
playVideo.apply({ name:'apple' }, [1, 2]);
playVideo.bind({ name:'apple' }, [1, 2])();

playVideo(); // window
```
- `call()` 把第一个参数绑定 `this`，单独传入参数，调用；
- `apply()` 把第一个参数绑定 `this`，用数组方式传入参数，调用；
- `bind()` 把第一个参数绑定 `this`，不调用。

（旧办法）`bind` 匿名函数
```js
showTags() {
	this.tags.forEach(function(tag) {
		console.log(this.title, tag);
	}.bind(this));
}
```

（ES6 新办法）箭头函数会继承容器函数的 `this`：
```js
showTags() {
	this.tags.forEach(tag => {
		console.log(this.title, tag);
	});
}
```
