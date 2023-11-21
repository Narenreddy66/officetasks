// lengthof the Array
let city = ["California", "Barcelona", "Paris", "Kathmandu"];
let length = city.length;
console.log(length);
// Concat
let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]
let Concat = primeNumbers.concat(evenNumbers);
console.log(Concat);
// pop method

let cities = ["California", "Barcelona", "Paris", "Kathmandu"];
let pop = cities.pop();
console.log(cities);
console.log(pop);
// push method
let naren = ["New York", "Madrid", "Kathmandu"];
let push = naren.push("aaaaaa");
console.log(naren);

// filter mtethod
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkeven(numbers) {
    if (numbers % 2 == 0)
        return true;
    else
        return false;

}
let result = numbers.filter(checkeven);
console.log(result);
//   for each method
let sai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sqaureof(element) {
    if (element * element)
        return true;
    else
        return false;

}
let square = sai.forEach(sqaureof);
console.log(square);