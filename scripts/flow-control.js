// let a = 'red';
// let b = 'blue';

// // let c = a;
// // a = b;
// // b = c;
// [b, a] = [a, b];

// console.log(a);
// console.log(b);

// let d = new Date();
// console.log(d.getHours());



// function max(first, second) {
//     return (first > second) ? first : second;
// }

// console.log(max(12, 10)); // first bigger
// console.log(max(3, 5)); // second bigger
// console.log(max(6, 6)); // equal



// function isLandscape(width, height) {
//     return width > height;
// }



// let w = 50;
// let h = 50;
// console.log(isLandscape(w, h));



// const output = fizzBuzz('15');
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number') {
//         return NaN;
//     }
    
//     if ((input % 3 === 0) && (input % 5 === 0))
//         return 'FizzBuzz';

//     if (!(input % 3))
//         return 'Fizz';

//     if (!(input % 5))
//         return 'Buzz';
    
//     return input;
// }



// checkSpeed(999);

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;
    
//     if (speed < speedLimit + kmPerPoint) {
//         console.log('Ok');
//         return;
//     }
    
//     const points = 
//         Math.floor((speed - speedLimit) / kmPerPoint);
    
//         if (points >= 12)
//         console.log('License suspend');
//     else
//         console.log(`Point: ${points}`);
// }



// showNumbers(10);

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         const message = (i % 2 === 0) ? "EVEN" : "ODD";
//         console.log(i, message);
//     }
// }



// const array = [undefined, null, NaN, '', 0, 1, 2, 3];

// console.log(countTruthy(array));

// function countTruthy(array) {
//     let counts = 0;
//     for (let v of array) {
//         if(v) counts++;
//     }
//     return counts;
// }




// const movie = {
//     title: 'a',
//     releaseYear: 2022,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj)
//         if (typeof obj[key] === 'string')
//             console.log(key, obj[key]);
// }



// console.log(sum(15));

// function sum(limit) {
//     let sum = 0;
//     for (let i = 1; i <= limit; i++)
//         if ((i % 3 === 0) || (i % 5 === 0))
//             sum += i;

//     return sum;
// }
// highly related code be together



// const marks = [80, 90, 100];

// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//     const average = calculateAverage(marks);
    
//     if (average < 60) return 'F';    
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A';
// }

// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array) {
//         sum += value;
//     }
//     return sum / array.length;
// }
// each function only fucoses on one thing



// showStars(10);

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let line = '';
//         for (let col = 1; col <= row; col++) {
//             line += '*';
//         }
//         console.log(line);
//     }
// }



showPrimes(2);

function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) 
        if (isPrime(i)) console.log(i);
}

function isPrime(num) {
    for (let factor = 2; factor <= Math.sqrt(num); factor++)  
        if (num % factor === 0) 
            return false;

    return true;
}