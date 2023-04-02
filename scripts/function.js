// walk();
// // funtion declaration
// function walk() {
//     console.log('walk');
// }
// // Hoisting: the process of moving the function
// //           declaration to the top of the file
// // by js engine while executing codes

// // Uncaught ReferenceError:
// // Cannot access 'run' before initialization
// // run();

// // named / anonymous funtion expression
// const run = function() {
//     console.log('run');
// };
// let move = run; // reference to the same af
// run();
// move();

// function sum(...args) {
//     return args.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7));

// const person = {
//     firstName: 'Mosh',
//     lastName: 'Hamedani',
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(value) {
//         if (typeof value !== 'string')
//             throw new Error('Value is not a string.');
//         const parts = value.split(' ');
//         if (parts.length !== 2)
//             throw new Error('Enter a first and last name.')
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// try {
//     person.fullName = '';
// } catch(e) {
//     alert(e);
// }

// console.log(person.fullName);

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(tag => {
//             console.log(this.title, tag);
//         });
//     }
// };

// video.showTags();

// function playVideo(a, b) {
//     console.log(this);
// }

// playVideo.call({ name:'apple' }, 1, 2);
// playVideo.apply({ name:'apple' }, [1, 2]);
// playVideo.bind({ name:'apple' })();

// playVideo(); // window

// function sum(...arr) {
//     if (arr.length === 1 && Array.isArray(arr[0]))
//         arr = [...arr[0]];
//     if (!Array.isArray(arr))
//         throw new Error("Please enter an array");
//     return arr.reduce((a, b) => a + b);
// }

// try {
//     console.log(sum([1, 2]));
// } catch(e) {
//     alert(e);
// }

// const circle = {
//     radius: 10,
//     get area() {
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };

// console.log(circle);
// circle.radius = 2;
// console.log(circle);
// console.log(Math.round(circle.area));

try {
  const numbers = [1, 2, 3];
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (e) {
  console.log(e);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Not an array.");
  return array.reduce(
    (accumulator, currentElement) =>
      currentElement === searchElement ? ++accumulator : accumulator,
    0
  );
}
