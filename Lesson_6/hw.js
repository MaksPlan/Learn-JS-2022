 'use strict'
// // //1 
// // const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
// // const stringToArray = (str) => {
// //     let arrayFromStringWithNoComma = str.replace(', ', ' ');
// //     let stringToArray = arrayFromStringWithNoComma[0];
// //     arrayFromStringWithNoComma.forEach((i) => i.split(' '))
// //     if (arrayFromStringWithNoComma.length > 0) {
// //     for (let i = 1; i < arrayFromStringWithNoComma.length; i++) {

// //         stringToArray = stringToArray.concat(arrayFromStringWithNoComma[i]);
// //     }}
// //     stringToArray = stringToArray.split(' ');
// //         return stringToArray;
// // }
// // console.log(stringToArray(str));


// //2
// // const deleteCharacters = (str, length) => str.substr(0, length);
// // console.log(deleteCharacters('aaap', 3))


// //3
// // function insertDash(str) {
// //   let string =  str.split(' ');
// //    let newString =  string.map(word => word.toUpperCase()).join('-')
// //             return newString;
// // }
// // console.log(insertDash('a b c d'));


// // //4
// function firstCharToUpperCase(str) {
//     return str.replace(str[0], str[0].toUpperCase());
// };
// //console.log(firstCharToUpperCase('dshfip'));

// function capitalize(str) {
//     let newStr = str.split(' ');
//   return  newStr.map(word => firstCharToUpperCase(word)).join(' ');
// }

// console.log(capitalize('папа мама я дружная семья'));

//6
// function isUpperRegister(word) {
//    let changeChar = word.split('').map(char => {
//        return (char >= 'А' && char <= 'Я') ? char.toLowerCase() : char.toUpperCase();
//     }).join('');
//     return changeChar;
// }
// console.log(isUpperRegister('КаЖдЫй'));

// function changeRegister(str) {
//     let changeCase = str.split(' ').map(w => isUpperRegister(w)).join(' ');
//         return changeCase;
// }
// console.log(changeRegister('КаЖдЫй ОхОтНиК'));

//7

// function removeChar(str) {
//   return str.split(' ').map((words) => words.split('').filter((char) => (char >= 'А' && char <= 'я')).join('')).join(' ');
// }
 
// console.log(removeChar('мой почтовый ящик 899147948@почта.ру'));

//8


//9
//  function comparison(strOne, strTwo) {
//      return strTwo.match(RegExp(`${strOne}`));
//  };

//  console.log(comparison('gggh', 'hguggggh'));

// function comparison(strOne, strTwo) {
//     return strOne.toLowerCase === strTwo.toLowerCase ? true : false;
// };
// console.log(comparison('gggh', 'gggh'));

//10


//11
// function initCap(str) {
//     let newStr =  str.split(' ').map((w) => w.replace(w[0], w[0].toUpperCase())).join('');
//     return newStr.replace(newStr[0], newStr[0].toLowerCase());
// };
// console.log(initCap('прыг скок'));

//12
// function initSnake(str) {
//     str.split('').map((char) => {
//         let result = if (char >= 'А' && char <= 'Я')  {char.toLowerCase()}
//         return result
//     })
// }

//13
// function reapetStr(str, n) {
//     for (let i = 0; i < n; i++) {
//         console.log(str);
//     }
// };

// reapetStr('hi', 5);

//14
// function path(pathname) {
//     let keyword = pathname.split('/');
//     return keyword[3]
// };
// console.log(path('fdgd/dfg/key'));

//15


// //16
// function getSubstr(str, char, pos) {
//     let index = str.indexOf(char);
//     let result = '';
//     if (pos === 'before') {
//         result = str.substring(0, index);
//     } else if (pos === 'after') {
//       result = str.substring(index, str.length)
//     } else {result = 'err'};
// };
// console.log(getSubstr('ghhhQdfg', 'Q', 'before'));



