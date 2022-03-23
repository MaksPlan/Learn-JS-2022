// //Func Declaration
// //Func Expression
// //Arrow Func 

// // //Func Declaration 
// // function showMassage() {
// //     console.log('Hello');
// // };
// // showMassage();//такую функцию видно везеде и он загрузить в самом начале скрипта
// //писать код декаларативно, то есть понятные названия, функция выполняет одно действие

// // const user = 'Vasya'

// // function greetUser (name = 'гость') {
// //     console.log(`Hello, ${name}`)
// // };

// // greetUser(user);

// // const user = {
// //     name: 'Vasya',
// //     age: 18
// // }

// // function getExit(age) {
// // (age <= 18) ? console.log('get exit') : console.log('err')
// // };

// // getExit(user.age);

// //Func Expression
// // //Практика 
// //  function getPow(a, b = 1) {
// //      if (typeof(a) !== 'number') {
// //          return 'err';
        
// //      }
// //      return a**b;
// //  };

// // console.log(getPow('', 2));


 let myArray = [1, 3, 5, 6];
 function averageNum(array) {
     if (array.length > 0) {
     
     let sum = 0;
     for (let i = 0; i < array.length; i++) {
         sum += array[i];
     };
     const result = sum / (array.length);
     return result;
    }
     else {
         return 'err'
     }
 };

console.log(averageNum(myArray));


 


// let myString = 'dghgsgh'
// let count = 6;

// function showStringNTimes(string, n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(string);
//     }
// }

// showStringNTimes(myString, count);


// let showStringNtimesTwo = function (string, n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(string);
//     }
// };

// showStringNtimesTwo('agfadfg', 2);

// let showStringNTimesThree = (string, n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(string);
//     }
// };

// showStringNTimesThree('sdfgdg', 3);





// function isVowel(char) {
//     const vowelString= 'eyioa';
//   if (vowelString.includes(char)) {
//       return 'True';
//   } 
//       return 'False';
//   };

// isVowel(o);



