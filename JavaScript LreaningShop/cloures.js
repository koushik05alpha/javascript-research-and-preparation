// function outer() {
//   let a = 10;
//   function inner() {
//     let b = 20;
//     console.log(a + b);
//   }
//   a = 20;
//   return inner;
// }

// let y = outer();
// y();

// =============================================

// (function outer(x) {
//     return (function inner(y) {
//         console.log(x);
//     })(150);
// })(100);

// =============================================


// let count = 0

// (function outer() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// })();

// let count = 0;

// (function outer() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// })();

// =============================================

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}