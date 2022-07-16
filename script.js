function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}


function multiply(x, y) {
    return x * y;
}


function divide(x, y) {
    return x / y;
}


const mathFuncs = [add, subtract, multiply, divide];



// function doAllMath(a,b,mathFuncs) {
//     for(let i = 0; i < mathFuncs.length; i++)
//     console.log(mathFuncs[i](a, b));
// }

// //  these two scripts deliver the same results


// function doAllMath(a,b,mathFuncs) {
//     for(let func of mathFuncs) {
//         console.log(func(a,b));
//     }
// }

const colors = ['teal', 'cyan', 'peach', 'purple'];

function yell(val, i) {
    const caps = val.toUpperCase();
    console.log(`${caps} is at index ${i}`);
}

colors.forEach(yell)


// const prices = [30.99, 19.99, 2.5, 99.0];
// let total = 0;
// prices.forEach(function(price) {
//     total += price;
// });
// console.log(total);


// forEach is same as for...of

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;
for(let price of prices) {
    total += price;
}
console.log(total);

function forEach(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

// forEach(colors);

