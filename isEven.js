// even
// console.log(4 / 2);
// console.log(98 / 2);
// console.log(144 / 2);

// odd
// console.log(7 / 2);
// console.log(83 / 2);
// console.log(145 / 2);

// bagshes
// console.log(4 % 2);
// console.log(98 % 2);
// console.log(144 % 2);

// console.log(7 % 2);
// console.log(83 % 2);
// console.log(145 % 2);

// function isEven(number) {
//     const remainder = number % 2;
//     console.log(remainder);
// }
// isEven(48);
// isEven(49);

// function isEven(number) {
//     const remainder = number % 2;
//     if (remainder === 0) {
//         console.log('number is even');
//     }
//     else {
//         console.log('number is odd');
//     }
// }
// isEven(48);
// isEven(49);

function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myNumberIsEven = isEven(48);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(49);
console.log(herNumberIsEven);