// const a = [1, 2, 3];

// console.log(a);
// console.log(a.slice(1,2));

// const a = [{id : 1}];
// const b = [2, 3, 4];

// const combined = a.concat(b);
// // [{id: 1}, 2, 3, 4]
// // [{id: 10}, 2, 3, 4]
// // slice 同理，也是拷贝的引用
// const copy = [...combined];
// console.log(copy);
// a[0].id = 10;
// console.log(copy);

// const courses = [
//     {id: 1, name: 'Node.js'},
//     {id: 2, name: 'javascript'},
//     {id: 3, name: 'Angular'},
//     {id: 4, name: 'HTML&CSS'},
// ];

// console.log(courses);


// courses.sort(function(a, b) {
// // a < b => -1
// // a > b => 1
// // a === b => 0
// // 消除大小写敏感
// const nameA = a.name.toUpperCase();
// const nameB = b.name.toUpperCase();

// if (nameA < nameB) return -1;
// if (nameA > nameB) return 1;
// return 0;
// });

// console.log(courses);


// const numbers = [1, 2, 3, 4]
// const allPositive = numbers.every(function(value){
// 	return value >= 0;
// });
// console.log(allPositive);

// ex1

// const numbers = arrayFromRange(1, 3);
// console.log(numbers);
// function arrayFromRange(min, max){
//     const arr = [];
//     for (let i = min; i <= max; i++)
//         arr.push(i);
//     return arr;
// }


// ex2

// if exist, return true; otherwise, return false
// function includes(array, searchElement) {
//     return array.indexOf(searchElement) >= 0;
// }


// ex3
// const array = [1, 2, 3, 4, 2, 1, 1, 2];
// const output = except(array, [1, 2, 3]);
// console.log(output);

// function except(array, excluded) {
//     return array.filter(n => !excluded.includes(n));
// }


// ex4

// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 3, -3); // 1, 3, 2, 4

// console.log(output);

// function move(array, index, offset) {
//     const output = [...array];
//     const newIndex = index + offset;
//     if (index < 0 ||
//         index > output.length||
//         newIndex < 0 || 
//         newIndex >= output.length) {
//         console.error('Invalid index.')
//         return;
//     }
//     // 删除再插入
//     const n = output.splice(index, 1)[0];
//     output.splice(newIndex, 0, n);
//     return output;
// }


// ex5

// const numbers = [1, 2, 3, 3, 4, 5, 1, 1, 1];
// const count = countOccurrences(numbers, 4);
// console.log(count);

// for
// function countOccurrences(array, searchElement) {
//     let count = 0;
//     for (let n of array) {
//         if (n === searchElement)
//             count++;
//     }
//     return count;
// }

// filter
// function countOccurrences(array, searchElement) {
//     return array.filter(n => n === searchElement).length;
// }

// reduce
// function countOccurrences(array, searchElement) {

//     return array.reduce((accumulator, currentElement) =>
//         (currentElement === searchElement) ? ++accumulator : accumulator,
//         0);
// }

// ex6

// const numbers = [1, 2, 3, 3, 4, 11,5, 1, 1, 1];
// const max = getMax([1,2, 44,2,2]);
// console.log(max);
// for
// function getMax(array) {
//     if (array.length <= 0) return;
//     let max = array[0];
//     for (let n of array) {
//         if (n > max) max = n;
//     }
//     return max;
// }


// sort
// function getMax(array) {
//     if (array.length <= 0) return;
//     array.sort((a, b) => {
//         if (a < b) return -1;
//         if (a > b) return 1;
//         return 0;
//     });
//     return array[array.length - 1];
// }

// reduce
// function getMax(array) {
//     if (array.length <= 0) 
//         return undefined;
//     // return array.reduce((accumulator, current) =>
//     //     (accumulator >= current) ? accumulator : current
//     // );
//     return array.reduce((a, b) => a > b ? a : b);
// }

// ex 7

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
];

const titles = movies
                .filter(movie => (movie.year === 2018 && movie.rating > 4))
                .sort((a, b) => a.rating - b.rating)
                .reverse()
                .map(movie => movie.title);
console.log(titles);