let firstName = undefined;
let lastName = null;

let person = {
    name: 'Mosh',
    age: 30
};
// dot notation
person.name = 'John';
// bracket notation
let selection = 'age';
person[selection] = 15;

console.log(person['age']);

let selectedColors = ['red', 'green'];
selectedColors[2] = 5;
console.log(selectedColors);

// parameter
function greet(name) {
    console.log(`Hello ${name}`);
}

function square(number) {
    return number * number;
}

// argument
greet('Mary');

let number = square(2);
console.log(number);

let list = ["x", "y", "z"];
for (let val of list) {
    console.log(val);
}
let i;
for (i in list) {
    console.log(i);
}

let arr = [1, 2, 3, 4];
let val;
for (val of arr) {
    console.log(val);
}

// arr.forEach(function(el) {
//     console.log(el * 2);
// });
arr.forEach(v => {
    console.log(v * 2);
});

const greetB = name => `Welcome ${name}`;
console.log(greetB('Lucy'));

let a = {x:1, x:2};

var obj = {id: 42, aname: "Jack"};

let {id = 10, age = 20, aname = 'hello'} = obj;

console.log(id); // 42
console.log(age); // 20
console.log(aname);

function magic(...nums) {
    let sum = 0;
    // nums.filter(n => n % 2 == 0).map(el => sum+= el);
    
    // filter() 返回数组中满足回调函数规则的元素作为一个新数组
    // map() 对数组中每个元素执行回调函数
    let temp = nums.filter(n => n % 2 == 0);
    console.log(temp.map(el => sum+= el));
    return sum;
}
console.log(magic(1, 2, 3, 4, 5, 6));

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set.size); // 5
console.log(set);

function asyncFunc(work) {
    return new Promise(function(resolve, reject) {
        if (work === "")
            reject(Error("Nothing"));
        setTimeout(function() {
            resolve(work);
        }, 1000);
    });
}

asyncFunc("Work 1") // Task 1
.then(function(result) {
    console.log(result);
    return asyncFunc("Work 2"); // Task 2
}, function(error) {
    console.log(error);
})
.then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
console.log("End");

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
