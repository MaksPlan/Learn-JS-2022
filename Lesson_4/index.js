//1 задача
let a = [1, 0, -3];
let answerArray = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] === 0) {
        console.log('Верно');
        answerArray.push('Верно');
    } else {
        console.log('Неверно');
        answerArray.push('Неверно');
    };
};

console.log(answerArray);


//2 Задача
 let a = [1, 0, -3];
for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    };
};

//3 Задача 
let a = [1, 0, -3];
for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    };
};

//4 Задача 
let a = [1, 0, -3];
for (let i = 0; i < a.length; i++) {
    if (a[i] >= 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    };
};

//5 Задача 
let a = [1, 0, -3];
for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    };
};

//6 Задача 
let a = [1, 0, -3];
for (let i = 0; i < a.length; i++) {
    if (a[i] != 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    };
};

//7 Задача 
let a = ['test', 'тест', 3];
for (let i = 0; i < a.length; i++) {
    if (a[i] === 'test') {
        console.log('Верно');
    } else {
        console.log('Неверно');
    };
};

//8 Задача 
let a = ['1', 1, 3];
for (let i = 0; i < a.length; i++) {
    if (a[i] === '1') {
        console.log('Верно');
    } else {
        console.log('Неверно');
    };
};

//Задача на логические переменные 
//1 Задача 
let test = [true, false];

for (let i = 0; i < test.length; i++) {
    (test[i] === true) ? console.log('Верно') : console.log('Неверно');
    if (test[i] === true) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    };
};

// 2 Задача 
let test = [true, false];

for (let i = 0; i < test.length; i++) {
    (test[i] != true) ? console.log('Верно') : console.log('Неверно');
    if (test[i] != true) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    };
};

// Работа с && (и) и || (или)
//1 задача
let a = [5, 0, -3, 2];
for (let i = 0; i < a.length; i++) {
    (a[i] > 0 && a[i] < 5) ? console.log('Верно') : console.log('Неверно');
};

//2 задача 
let a = [5, 0, -3, 2];
for (let i = 0; i < a.length; i++) {
    (a[i] === 0 || a[i] === 2) ? console.log(a[i] + 7) : console.log(a[i] / 10);
};

//3 задача 
let a = [1, 3, 0];
let b = [6, 3, 5];
for (let i = 0; i < a.length; i++) {
    (a[i] <= 1 && b[i] >= 3) ? console.log(a[i] + b[i]) : console.log(a[i] - b[i]);
};

//4 Задача
let a = [1, 3, 0];
let b = [6, 3, 5];
for (let i = 0; i < a.length; i++) {
    (a[i] > 2 && a[i] < 11 || b[i] >= 6 && b[i] < 14) ? console.log('Верно') : console.log('Неверно');
};

//На switch-case
//1 Задача
let num  = [1, 2, 3, 4];
let result = '';
for (let i = 0; i < num.length; i++) {
    switch (num[i]) {
        case 1: result = 'Зима'
        console.log(result);
        break;
     case 2: result = 'Весна';
        console.log(result);
        break;
    
        case 3: result = 'Лето';
        console.log(result);
        break;
    
        case 4: result = 'Осень';
        console.log(result);
        break;
 };
 
};
 
//Общие задачи
let day = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 15, 20, 21, 22, 24, 27, 30, 31];


for (let i = 0; i < day.length; i++) {
    if (day[i] <= 10) {
        console.log('Первая декада');
    } else if (day[i] > 10 && day[i] <= 20) {
        console.log('Вторая декада');
    } else {
        console.log('Третья декада');
    }
};

//2 Задача
let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < month.length; i++) {
    if (month[i] < 3 || month[i] === 12) {
        console.log('Зима');
    } else if (month[i] >= 3 && month[i] < 6) {
        console.log('Весна');
    } else if (month[i] >= 6 && month[i] < 9) {
        console.log('Лето');
    } else if (month[i] >= 9 && month[i] != 12) {
        console.log('Осень');
    }
};

//3 Задача 
let string = 'abcde';
(string[0] === 'a') ? console.log('да') : console.log('нет');

//4 Задача
let number = '12345';
number[0] === '1' || number[0] === '2' || number[0] === '3' ? console.log('да') : console.log('нет');

//5 Задача 
let num = '123';
console.log(+num[0] + +num[1] + +num[2]);

//6 Задача
let num = '168932';
numOne  = +num[0] + +num[1] + +num[2];
numTwo = +num[3] + +num[4] + +num[5];
numOne === numTwo ? console.log('да') : console.log('нет');

//Циклы 
//1 задача
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
};

for (let i = 1; i <= 100; i++) {
    console.log(i);
};

//2 задача
let i = 11;
while (i <= 33) {
    console.log(i);
    i++;
};

for (let i = 11; i <= 33; i++) {
    console.log(i);
};

//3 задача
let i = 1;
while (i <= 100) {
if ((i % 2) === 0) {
    console.log(i);
};
    i++;
};

for (let i = 1; i <= 100; i++) {
    if ((i % 2) === 0) {
        console.log(i);
    };  
};

//4 Задача
let i = 1;
let sum = 0;
while (i <= 100) {
sum += i;
i++;
};
console.log(sum);

let sumNew = 0;
for (let i = 1; i <= 100; i++) {
    sumNew += i;
}
console.log(sumNew);

//Работа с массивами 

let numArray = [1, 2, 3, 4, 5];
for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i])
};

let numArrayNew = [1, 2, 3, 4, 5];
let sumArrayNew = 0;
for (let i = 0; i < numArrayNew.length; i++) {
    sumArrayNew += numArrayNew[i]
};
console.log(sumArrayNew);