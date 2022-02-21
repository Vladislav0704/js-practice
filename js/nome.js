// 9
// Write a function that reverse an integer number. 
// reverseNumber(12345) returns 54321

//result
//reverseNumber(-12345) returns -54321

// const a = 12345;

// function reverseNumber (a) {
//     const b = String(a);
//     const c = [...b];
//     console.log(c)
//     const d = [];
//     if (c[0] === '-') {
//         // console.log(1)
//         for (let i = c.length - 1; i > 0; i -= 1) {
//             d.push(c[i]);
            
//         // console.log(d)
//         }
// console.log(d)
//         const string = d.join("");
//         const lastN = '-' + string;
//         const resalt = Number(lastN)
//         console.log(resalt)
//     }
//     for (let i = c.length - 1; i >= 0; i -= 1) {
//             d.push(c[i]);
            
//         // console.log(d)
//         }
// console.log(d)
//     const string = d.join("");
//     const resalt = Number(string)
//     console.log(resalt)
// }

// reverseNumber(a);

// Write a function that converts 
// the argument values.If it will be a string,
// convert it to number and wise versa.
// // It should return an array of converted values.
// console.log(convert('1', 2, 3, '4')) 

// // result [1, '2', '3', 4]

// function convert(...args) {
//     const a = [];
//     for (let arg of args) {
//         if (typeof(arg) === 'string') {
//             arg = Number(arg);
//             a.push(arg);
//         } 
//         else {
//             arg = String(arg);
//             a.push(arg);
//         }
//     } 
        
//     return a;
// }

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// numbers.forEach(function (number, index) {
//     console.log(`Индекс ${index}, значение ${number}`)
// })