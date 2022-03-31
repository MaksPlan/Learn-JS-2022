// 1
//const myArray: Array<string> = ['a', '2b', '3cc'];
// function lengthsArray(array: Array<string>)  {
//         const result = myArray.map((str: string) => str.length);
//         return result;
// };
// console.log(lengthsArray(myArray));

//2
const numArray: Array<number> = [2, 3, 5, 7, 11, 13, 17, 19];
function currentSums(numbers: Array<number>) {
      const result = numbers.reduce((sum: number, current: number) => {return sum + current}, 0);
      return result; //sum - аккум, current - текущее число, 0 - начальное значение sum
}
console.log(currentSums(numArray));