// //1.program to check the number is even or odd
// let a = '6';
// if (a % 2 === 0) {
//     console.log('even');
// }
// else {
//     console.log("odd");
// }



// //2.print helloworld
// let b = 'hello world';
// console.log(b)


// //3.add two numbers
// let c = 23;
// let d = 43;
// let sum = c + d;
// console.log(sum);



// //4.find squareroot of number
// let e = 5;
// let squareroot = e * e;
// console.log(squareroot);
// function squareroot(e) {
//     let naren = e * e;
//     console.log(naren)
// }
// squareroot(5)
// let squareroot = (e, naren = e * e) => console.log(naren);
// squareroot(5)



// //5.for finding no is postive negitive zero
// let z = -23
// if (z > 0) {
//     console.log('positive number');

// }
// else if (z < 0) {
//     console.log('negitive number');
// }
// else {
//     console.log('zero');
// }


//Call Back Function
function func(x, y, z) {
    let sum = x + y;
    z();
}

function addition() {
    console.log("Hello i am a Callback Function");
}


func(10, 20, addition)

let a = 10