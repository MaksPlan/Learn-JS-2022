// 1
//const myArray = ['a', '2b', '3cc'];
// function lengthsArray(array)  {
//         const result = myArray.map((str) => str.length);
//         return result;
// };
// console.log(lengthsArray(myArray));

//2
// const numArray = [2, 3, 5, 7, 11, 13, 17, 19];
// function currentSums(numbers) {
//       const result = numbers.reduce((sum, current) => {return sum + current}, 0);
//       return result; //sum - аккум, current - текущее число, 0 - начальное значение sum
// }
// console.log(currentSums(numArray));

//3
// const numbersArray= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let result = numbersArray.filter((a, b) => {if ((a + b) === 7) {return '(a, b)'}});
// console.log(result);  //- выдает пустой массив;

//4
const myString = 'lorem ipsum dolor sit amet';
const result = myString.split(' ').map((w) => w[0]);
console.log(result);

// //6
// const myNumbersArray = [3, 3, 5, 6, 2, 6, 9];
// const result = myNumbersArray.sort((a, b) => a - b);
// console.log(result);

//7
// const arrayOne = [3, 2, 5];
// const arrayTwo = [6, 4, 3];
// const arrayThree = [8, 1, 10];

// const result = [...arrayOne, ...arrayTwo, ...arrayThree].sort((a, b) => a - b).join(' ');
// console.log(result);

//8//  - метод flat() сглаживает подмассивы в одноуровневый массив
// const myArray = [[1, 2, 3], [4, 5], [6]];
// const result = myArray.flat(1).reduce((sum, current) => {return sum + current}, 0);
// console.log(result);

//9 
// const numArray = [1, 2, 3, 4, 5, 6, 7];
// let newArray = []; 
// numArray.forEach((n) => newArray.unshift(n));
// console.log(newArray);

//10 - undefiend
// const numArray = [1, 2, 3, 4, 5, 6, 7];
// const result = numArray.forEach((n) => {
//     let counter = 0;
//     let sum = 0;
//     sum += n;
//     if (sum >= 10) {
//         return counter};
//     counter++;
// });
// console.log(result);