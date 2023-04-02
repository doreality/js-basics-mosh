// // OOP(Object-oriented programming)
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true, 
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw(); 
// // call the draw 'method' of circle object


// Factory Function

// function createCircle(radius) { // Camel Notation
//     // return an object
//     return {
//         radius, // use parameter as value
//         draw() { // no need 'function' keyword
//             console.log('draw');
//         }
//     };
// }

// const circle2 = createCircle(1);
// console.log(circle2);


// // Constructor Function

// function Circle(radius) { // Pascal Notation
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// // create an empty js object, 
// // use 'this' to point to it,
// // 'this' creates propeties to this obj.
// const circle1 = new Circle(1);


// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = function() {
//     console.log('draw');
// }`);

// const circle1 = new Circle1(1);
// const obj  = {};
// Circle1.call(obj, 1);
// const obj2 = {};
// const arr = [2];
// Circle1.apply(obj2, arr);


// ex1

// factory function
// function createAddress(street, city, zipCode) {
//     return {
//         street, // street: street, key and value same name
//         city,
//         zipCode
//     };
// }
// const add = createAddress('DuShuHu', 'Suzhou', '215028')

// constructor function
// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }
// // const add = new Address('jinjihu', 'SuZhou', '215028');

// // function showAddress(address) {
// //     for (let key in address) {
// //         console.log(key + ': ' + address[key]);
// //     }
// // }

// // showAddress(add);

// ex2

// const address1 = new Address('a', 'b', 'c');
// const address2 = new Address('a', 'b', 'c');

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));

// function areEqual(address1, address2) {
//     for (let key in address1) {
//         if (address1[key] !== address2[key]) 
//             return false;
//     }
//     return true;
// }

// function areSame(address1, address2) {
//     return address1 === address2;
// }


// ex3 

// let post = {
//     title: 'How to get an internship job',
//     body: `First of all, you have to be confident.
//            Second, work hard and cacth every changce.
//            Third, if you fail, don't be disappointed.
//            Just keep going, and you will make it`,
//     author: 'Anonimity',
//     views: 1823,
//     comments:[
//         { author: 'passerby', body: 'Fighting!' },
//         { author: 'another', body: 'Nothing can stop you, young lady! '}
//     ],
//     isLive: true
// };

        
// ex4
// function Post(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }


// const post1 = new Post('aa', 'bb', 'cc');
// console.log(post1);


// ex 5

// function PriceRange(label, tooltip, minPrice, maxPrice) {
//     this.label = label;
//     this.toolrtip = tooltip;
//     this.minPice = minPrice;
//     this.maxPrice = maxPrice;
// }

// let lowPriceRange = new PriceRange('$', 'Inexpensive', 0, 10);
// let midPriceRange = new PriceRange('$$', 'Moderate', 11, 20);
// let highPriceRange = new PriceRange('$$$', 'Expensive', 21, 50);

// let priceRanges = [lowPriceRange, midPriceRange, highPriceRange];
// console.log(priceRanges);

