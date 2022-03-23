// 'use strict'
// //1 
// const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
// const stringToArray = (str) => {
//     let arrayFromStringWithNoComma = str.replace(', ', ' ');
//     let stringToArray = arrayFromStringWithNoComma[0];
//     arrayFromStringWithNoComma.forEach((i) => i.split(' '))
//     if (arrayFromStringWithNoComma.length > 0) {
//     for (let i = 1; i < arrayFromStringWithNoComma.length; i++) {

//         stringToArray = stringToArray.concat(arrayFromStringWithNoComma[i]);
//     }}
//     stringToArray = stringToArray.split(' ');
//         return stringToArray;
// }
// console.log(stringToArray(str));


//2
// const deleteCharacters = (str, length) => str.substr(0, length);
// console.log(deleteCharacters('aaap', 3))


//3
// function insertDash(str) {
//   let string =  str.split(' ');
//    let newString =  string.map(word => word.toUpperCase()).join('-')
//             return newString;
// }
// console.log(insertDash('a b c d'));


// //4
function firstCharToUpperCase(str) {
    return str.replace(str[0], str[0].toUpperCase());
};
//console.log(firstCharToUpperCase('dshfip'));

function capitalize(str) {
    let newStr = str.split(' ');
  return  newStr.map(word => firstCharToUpperCase(word)).join(' ');
}

console.log(capitalize('папа мама я дружная семья'));

//6
function 

