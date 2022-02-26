// //Экранирование
// const isMe = {
//     name: 'Alex',
//     citizenship: 'Russian',
//     age: 23

// };
// console.log(isMe.name);
// let myVar = 1;
// console.log(!!myVar); //! приводит к булеву типу  и  сразу отрицает (переводит на противоположное), 
//по этому для правильного перевода нужно !!


//Сравнение строк

//unicode
// const userTypes = {
//     user: 'user',
//     admin: 'admin',
//     teacher: 'teacher',

// }; 
//  const serverUserDataTypes = 'user';
// console.log('g' - 1 + 0);
//  (userTypes.users == serverUserDataTypes) 
const myArray = [1, 2, 3, 4, 5]

const newArray = []
 myArray.forEach((keyValue) =>  newArray.push(keyValue + '1'))

const filteredArray = myArray.filter((value) => value % 2 === 1)

console.log(newArray)