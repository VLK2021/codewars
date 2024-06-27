//---------------------------1--------------
//Write a function which converts the input string to uppercase.
// function makeUpperCase(str) {
//     return str.toUpperCase();
// }
//
// let w = makeUpperCase('wwwww');
// console.log(w);

//-----------------2---------------------------------------------------------------------
//The goal is to create a function 'numberToPower(number, power)' that "raises"
// the number up to power (ie multiplies number by itself power times).

// function numberToPower(number, power) {
//     let result = 1;
//
//     for (let i = 1; i <= power; i++) {
//         result *= number;
//     }
//     return result;
// }
// console.log(numberToPower(10, 6));

//---------------3-------------------------------------------------------------------------------------------
//Write a function which calculates the average of the numbers in a given list.
// function findAverage(array) {
//     let result = 0;
//     for (const element of array) {
//         result = result + element;
//     }
//     return result/array.length;
// }
// console.log(findAverage([2,2,2]));

//-------------4-------------------------------------------------------------------------------------------
//Create a function called _if which takes 3 arguments:
// a boolean value bool and 2 functions (which do not take any parameters): func1 and func2
// When bool is truth-ish, func1 should be called, otherwise call the func2

// function _if(bool, func1, func2) {
//    if(bool === true){
//        func1();
//    }else {
//        func2();
//    }
// }
// _if(true,function(){console.log("True")}, function(){console.log("false")})

//-----------5-------------------------------------------------------------------------------------------------
//Code as fast as you can! You need to double the integer and return it.
// function doubleInteger(i) {
//     i = i * 2;
//     return i;
// }
// console.log(doubleInteger(2));

//-----------6--------------------------------------------------------------------------------------------------
//You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//     let sum = 0;
//     for (const element of arr) {
//         if (element > 0){
//             sum = sum + element;
//         }
//     }
//     return sum;
// }
// console.log(positiveSum([1,-4,7,12]));

//-------------7------------------------------------------------------------------------------------------------
//Return an array, where the first element is the count of positives numbers and the second element
// is sum of negative numbers.0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//     let arr = [];
//     let countPositive = 0;
//     let sumNegative = 0;
//     for (const element of input) {
//         if (element > 0) {
//             countPositive = countPositive + 1;
//         }
//         if (element < 0) {
//             sumNegative = sumNegative + element;
//         }
//     }
//     arr.push(countPositive, sumNegative);
//     return arr;
// }
//
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

//-------------8-------------------------------------------------------------------------------------
//Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.

// function repeatStr (n, s) {
//
//    return s.repeat(n);
// }
// console.log(repeatStr(10, 'Hello'));

//-----------------------------------------------------------------------------------------------------
// Повернути усі ключі з обєкта

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };
//
// Object.keys(object1).map(w=> console.log(w));

//------------------------------------------------------------------------------------------------------
// Повернути усі значення з обєкта

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };
//
// Object.values(object1).map(w=> console.log(w));

//---------------------------------------------------------------------------------------------------

// Числа Фібоначчі - це числова послідовність, в якій кожне число, починаючи з третього, дорівнює сумі
// двох попередніх чисел. Перші два числа в послідовності завжди дорівнюють 1. Тобто, числа Фібоначчі
// починаються з 1, 1, 2, 3, 5, 8, 13, і так далі.Формально, n-те число Фібоначчі позначається як F(n) і обчислюється
// наступним чином: F(1) = 1, F(2) = 1, і F(n) = F(n-1) + F(n-2) для n > 2.
// Напишіть програмну функцію, яка приймає ціле число n як вхідний аргумент і повертає n-те число Фібоначчі.
//     Результат обчислення повинен бути виведений або повернутий користувачу.Реалізація може використовувати алгоритм
// за допомогою рекурсії, ітерації або будь-якого іншого підходу.

// const getNumber=n=>{
//     if (!n | typeof n !=="number"){
//         return "enter valid number"
//     }
//
//     const array=[1,1];
//
//     for (let i = 3; i <= n; i++){
//         const number=array[i-3]+array[i-2];
//         array.push(number);
//     }
//
//     return array[n-1];
// }
// console.log(getNumber(300));
//-----------------------------------------------------------------------------------------------------------
// Вам надається масив об'єктів, що представляють співробітників з їхніми іменами та зарплатами.
// const coworkers = [{name: 'Andy', salary: 750}, {name: 'Bernard', salary: 500}, {name: 'Pam', salary: 900}]
// Реалізуйте методи що приймають масив такого типу і реалізують:
//     визначення загальних витрат на зарплати для компанії на основі даних про співробітників.
//     визначення співробітника(ів) з найвищою зарплатою.
//     визначення середньої зарплати всіх співробітників.
//     визначити всіх працівників, які заробляють більше заданого параметром рівня зарплати.

// const coworkers = [
//     { name: 'Andy', salary: 750 },
//     { name: 'Bernard', salary: 500 },
//     { name: 'Pam', salary: 900 }
// ];
//
// const company = {
//     calculateTotalSalary: function () {
//         return coworkers.reduce((total, coworker) => total + coworker.salary, 0);
//     },
//
//     findHighestPaid: function () {
//         const highestPaid = coworkers.reduce((max, coworker) =>
//             coworker.salary > max.salary ? coworker : max
//         );
//         return highestPaid;
//     },
//
//     calculateAverageSalary: function () {
//         const totalSalary = this.calculateTotalSalary();
//         return totalSalary / coworkers.length;
//     },
//
//     findEmployeesAboveSalary: function (thresholdSalary) {
//         return coworkers.filter(coworker => coworker.salary > thresholdSalary);
//     }
// };
//
// console.log("Загальні витрати на зарплати:", company.calculateTotalSalary());
// console.log("Співробітник з найвищою зарплатою:", company.findHighestPaid());
// console.log("Середня зарплата всіх співробітників:", company.calculateAverageSalary());
// console.log("Співробітники з зарплатою більше 600:", company.findEmployeesAboveSalary(600));

//----------------------------------------------------------------------------------------------------
// Необхідно реалізувати функцію revertCase, яка приймає в якості аргументу стрічку, а повертає нову стрічку в якій
// кожна літера змінила регістр.
//     Приклад:
// revertCase('Hello World'); // hELLO wORLD


// function func(string = '') {
//     let str ='';
//     for (const element of string) {
//         if (element === element.toUpperCase()){
//             str += element.toLowerCase()
//         }
//         if (element === element.toLowerCase()){
//             str += element.toUpperCase()
//         }
//     }
//     return str;
// }
//
// console.log(func('qqqq'));

//  const revertCase = (string = '') => {
//     let str = '';
//     for (const element of string) {
//         if (element === element.toUpperCase()) {
//             str += element.toLowerCase();
//         } else if (element === element.toLowerCase()) {
//             str += element.toUpperCase();
//         } else {
//             str += element;
//         }
//     }
//     console.log(str);
//     return str;
// };
//
// revertCase('wwwwwwww');

// export const revertCase = (string = '') => {
//     let result = '';
//
//     for (const char of string) {
//         if (char === char.toUpperCase()) {
//             result += char.toLowerCase();
//         } else {
//             result += char.toUpperCase();
//         }
//     }
//
//     return result;
// }
//-----------------------------------------------------------------------------------------------------

// Необхідно реалізувати функцію arrToString, яка приймає в якості аргументу масив, а повертає всі елементи масиву
// об'єднані в стрічку.
// Приклад:
//     arrToString(['apple', 'orange', 'banana'], '-'); // 'apple-orange-banana

// function arrToString(arr = [], delimiter = '') {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//             str = str + element + delimiter;
//     }
//
//     return str.slice(0, -1);
// }
// console.log(arrToString(['ddd', 'www', 'rrr', 'uuu'], '-'));

// const arrToString = (arr = [], delimiter = '') => {
//     return arr.join(delimiter);
// };
//-----------------------------------------------------------------------------------------------------

// Необхідно реалізувати функцію stringToArray, яка приймає в якості першого аргументу стрічку, а повертає масив,
//     елементами якого стануть частини стрічки розділені пробілом.
//     Приклад:
// stringToArray('Hello, World!'); // ['Hello,', 'World!']

// function stringToArray(string = ''){
//     return string.split(' ');
// }
//
// console.log(stringToArray('Hello, World!'));

//-------------------------------------------------------------------------------------------------------

// Необхідно реалізувати функцію toCamelCase, яка приймає в якості першого аргументу стрічку, слова в якій розділені
// пробілами, а повертає слово у camelCase форматі:
//     Приклад:
//         toCamelCase('Hello World!'); // helloWorld!


// function toCamelCase(someString = '') {
//     let str = '';
//     let arr = someString.split(' ');
//     for (const string of arr) {
//         str = str + string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
//     }
//     return str.charAt(0).toLowerCase() + str.slice(1);
// }
//
// console.log(toCamelCase('HellO WorLd!'));


// const toCamelCase = (someString = '') => {
//     const arr = someString.split(' ');
//
//     const transformedArr = arr.map((word, index) => {
//         if (index === 0) {
//             return word.toLowerCase();
//         }
//
//         return word[0].toUpperCase() + word.slice(1).toLowerCase();
//     });
//
//     return transformedArr.join('');
// };
//-------------------------------------------------------------------------------------------------------------

// Уявимо що в нас є список продуктів з витраченими на них коштами, представимо цей список у
// вигляді масиву: [100, 23, 50, 40, 12, ...]Потрібно отримати загальну суму на яку ми закупили продукти.
//     Для розв'язання цієї проблеми, створимо функцію sumArrayElements. Ця функція буде приймати масив чисел, а вертати їх суму.
// Приклад:
//     sumArrayElements([10, 15, 20, 15, 6, 4]); // 70


// function sumOfArrayElements(arr = []) {
//     const current = arr.reduce((sum, cur) => {
//         return sum + cur;
//     }, 0);
//     return current;
// }
// console.log(sumOfArrayElements([10, 15, 20, 15, 6, 4]));

// function sumOfArrayElements(arr = []) {
//     let current = 0;
//     for (const arrElement of arr) {
//         current = current + arrElement;
//     }
//     return current;
// }
// console.log(sumOfArrayElements([10, 15, 20, 15, 6, 4]));
//---------------------------------------------------------------------------------------------------------------

// Уявимо що в інтернет-магазині потрібно підрахувати кількість замовлень кожного з товарів. Дані про покупки товарів
// зберігаються у вигляді масиву: ['keyboard-sk8855', 'mouse-sd63', 'keyboard-sk8855', 'ssd-asus', 'ssd-asus', ...].
//     Потрібно отримати кількість продажів кожного товару.
//     Для розв'язання цієї проблеми, створимо функцію transformArrToObject, яка в якості аргументу буде приймати' +
// ' масив даних про продажі товарів, а повертати об'єкт, ключами якого будуть назви товарів, а значеннями - кількість
// продажів цього товару, або іншими словами, кількість раз як товар зустрівся в масиві.
//     Приклад:
// transformArrToObject([
//     'asus-KR-2',
//     'lenovo-sb2065',
//     'asus-KR-2',
//     'hp-1215',
//     'lenovo-sb2065',
// ]);
//
// Поверне об'єкт:
// {
//     'asus-KR-2': 2,
//     'lenovo-sb2065': 2,
//     'hp-1215': 1
// }

// function transformArrToObject(arr = []) {
//     let obj = {};
//     for (const element of arr) {
//         if (element in obj) {
//             obj[element] = obj[element] + 1;
//         } else {
//             obj[element] = 1;
//         }
//     }
//     return obj;
// }
//
// console.log(transformArrToObject([
//     'asus-KR-2',
//     'lenovo-sb2065',
//     'asus-KR-2',
//     'hp-1215',
//     'lenovo-sb2065',
// ]));

// const transformArrToObject = (arr = []) => {
//     const result = {};
//
//     for (const item of arr) {
//         if (result[item]) {
//             result[item] += 1;
//         } else {
//             result[item] = 1;
//         }
//     }
//
//     return result;
// };
//------------------------------------------------------------------------------------------------------------------
// Уявимо що ми маємо данні про температуру повітря за певний період. Дані представлені у строковому
// форматі: '12 15 6 -4 5 15' Кожне число в стрічці відповідає температурі, за певний день.
//     Необхідно реалізувати функцію, яка на вхід прийме стрічку з даними, a має повернути нову стрічку з мінімальним
// та максимальним значенням температури.
//     Example:
// const data = '1 2 3 -4 6';
// highestAndLowest(data); // '-4 6'

// function highestAndLowest(numbers){
//     const arr = numbers.split(' ').map(Number);
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     const str = `${min} ${max}`;
//     return str;
//
// }
//
// console.log(highestAndLowest('1 2 3 -4 6'));

// const highestAndLowest = (numbers) => {
//     const arr = numbers.split(' ');
//
//     return `${Math.min(...arr)} ${Math.max(...arr)}`;
// };
// console.log(highestAndLowest('1 2 3 -4 6'));
//---------------------------------------------------------------------------------------------------------------

// Уявимо що ми розробляємо онлайн гру, та зберігаємо "id" користувачів в масиві:
//     const usersArr = ['user-1', 'user-2', 'user-3', ...].
// Звісно в реальному житті ці id будуть складнішими, та матимуть більше символів, щоби уникнути повторення, але для
// наших навчальних цілей підійдуть id у вигляді user-n. Один з користувачів постійно порушував правила гри та взагалі
// поводився нечемно. Тому було прийнято рішення його забанити, видаливши його з масиву користувачів, які мають доступ до гри.
//     Система гри дає нам інформацію про індекс нечемного користувача, а нам потрібно реалізувати функцію
// removeByIndex, яка його видалить з масиву користувачів спираючись на цей індекс, що заблокує доступ користувача до гри:
//         Приклад:
// removeByIndex(['user-1', 'user-2', 'user-3'], 1); // ['user-1', 'user-3']

// function removeByIndex(arr = [], index = 0) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (i !== index) {
//             newArr.push(element);
//         }
//     }
//     return newArr;
// }
// console.log(removeByIndex(['user-1', 'user-2', 'user-3'], 1));


// const removeByIndex = (arr = [], index = 0) => {
//     const elementsBeforeIndex = arr.slice(0, index);
//     const elementsAfterIndex = arr.slice(index + 1, arr.length);
//
//     return [...elementsBeforeIndex, ...elementsAfterIndex];
// };
//----------------------------------------------------------------------------------

// Необхідно реалізувати функцію removeStringSpace, яка приймає в якості аргументу стрічку, в якій потрібно видалити
// всі пробіли.
//     Приклад:
// removeStringSpace('hello world'); // 'helloworld'
// removeStringSpace('   h el   lo '); // 'hello'

// function removeStringSpace(str = '') {
//     return str.replaceAll(' ', '');
// }
// console.log(removeStringSpace('   h el   lo '));


// export const removeStringSpace = (str = '') => {
//     return str.replace(/\s/g, '');
// };
//------------------------------------------------------------------------------------------------------------------

// Необхідно реалізувати функцію replaceCharacters, яка приймає в якості першого аргументу - стрічку, з якою будуть
// відбуватися зміни. В якості другого - стрічку, яка повинна бути видалена. В якості третього - стрічку, яка повинна
// замінити видалені символи.
//     Приклад:
// replaceCharacters('Hello, user', 'user', 'admin'); // 'Hello, admin'
// replaceCharacters('Hello, dear customer! All customers are important for our product.', 'customer', 'client');
// 'Hello, dear client! All clients are important for our product.'

// function replaceCharacters(str = '', entry = '', replacement = '') {
//     return str.replaceAll(entry, replacement);
// }
// console.log(replaceCharacters('Hello, user', 'user', 'admin'));
//-----------------------------------------------------------------------------------------------------------------

// Необхідно реалізувати функцію "isIsogram".
//     Ізограма - це слово яке не має повторювальних букв.
//     Реалізуйте функцію яка буде перевіряти слово на ізограму та повертати результатом true / false, відповідно до того
// чи є слово ізограмою. Також потрібно звести слово в нижій регіст.
//     Приклад:
// isIsogram("isogram"); // true
// isIsogram("hello"); // false

// function isIsogram(string) {
//     string = string.toLowerCase();
//     const seenLetters = {};
//
//     for (let i = 0; i < string.length; i++) {
//         const element = string[i];
//         if (seenLetters[element]) {
//             return false;
//         }
//         seenLetters[element] = true;
//     }
//     return true;
// }
// console.log(isIsogram("hello"));

// const isIsogram = (str) => {
//     const uniqueCharsSize = new Set(str.toLowerCase().split('')).size;
//     return str.length === uniqueCharsSize;
// };
//-----------------------------------------------------------------------------------------------------------

// Ви разом з командою працюєте над оновленням CMS. Одним з елементів цієї системи є Заголовок сторінки, який містить
// аватар користувача. Але не всі користувачі додали до системи своє фото, тому дизайнер вирішив, що в такому разі
// треба показати ініціали користувача. В цьому завданні, вам необхідно написати функцію nameAbbreviation, яка приймає
// імʼя користувача (firstName та lastName) і повертає по першій літері від кожної частини імені в заголовному регістрі.
//     Якщо lastName пусте, то повернути першу літеру firstName і крапку (firstName завжди містить, принаймі,
//     один символ - вимога системи).
// Приклад:
//     nameAbbreviation("Łukasz", "Żyłowski");
// // => "ŁŻ"
// nameAbbreviation("pranavi", "kumar");
// // => "PK"
// nameAbbreviation("anonymous", "");
// // => "A."

// function nameAbbreviation(firstName = "", lastName = "") {
//    if (!lastName){
//        return firstName.substring(0,1).toUpperCase() + '.';
//    } else {
//        return firstName.substring(0,1).toUpperCase() + lastName.substring(0,1).toUpperCase();
//    }
// }
// console.log(nameAbbreviation("anonymous", ""));

// const nameAbbreviation = (firstName = "", lastName = "") => {
//     const firstLetter = firstName.charAt(0);
//     let lastLetter = lastName.charAt(0);
//     if (lastLetter === "") {
//         lastLetter = ".";
//     }
//     let abbreviation = firstLetter.concat(lastLetter);
//     abbreviation = abbreviation.toLocaleUpperCase();
//     return abbreviation;
// };
//-------------------------------------------------------------------------------------------------------------

// Разом з командою ви працюєте над новою CMS. Відділ дизайну хоче мати модуль, в якому вони зможуть легко підбирати нові
// шрифти та порівнювати їх між собою, але для цього їм потрібно знайти красивий текст, що є панграмою. Панграма
// (грец. παν γράμμα, pan gramma, «кожна літера») — речення, у якому кожна літера алфавіту використовується принаймні
// один раз. Найвідомішою англійською панграмою є:
//     The quick brown fox jumps over the lazy dog.
//     Дизайнери хочуть підібрати красиву українську панграму. Тому вашим завданням є розробити функцію pangram
// (це буде частиною адмін-панелі), яка приймає на вхід текст для перевірки text і повертає true, якщо текст є панграмою
// та false - у протилежному.
//     Обмеження:
// Розмір тексту не більше 1024 символів
// Текст містить цифри, літери української абетки та знаки пунктуації: ".", "!", "-", "ʼ" та " "; знаки не враховувати
// Пошук має бути нечутливий до регістру літер
// Швидкість роботи алгоритму та обсяг використовуваної пам'яті значення не мають
// Приклад:
//     pangram("фраза для тесту");
// // => false
// pangram("Хвацький юшковар Філіп щодня на ґанку готує сім'ї вечерю з жаб.");
// // => true

// function pangram(text = ""){
//     text = text.toLowerCase();
//     const ukrainianAlphabet = 'абвгдеєжзиіїйклмнопрстуфхцчшщьюя';
//     const arrLetters = new Set(ukrainianAlphabet);
//
//     for (let i = 0; i < text.length; i++) {
//         const element = text[i];
//         if (arrLetters.has(element)) {
//             arrLetters.delete(element);
//         }
//     }
//     return arrLetters.size === 0;
// }
// console.log(pangram("Хвацький юшковар Філіп щодня на ґанку готує сім'ї вечерю з жаб."));

// const pangram = (text = "") => {
//     const stripText = text.toLowerCase().match(/[а-ґ]/gi, "");
//     const uniqueChars = [];
//     stripText.forEach((element) => {
//         if (!uniqueChars.includes(element)) {
//             uniqueChars.push(element);
//         }
//     });
//     return 33 === uniqueChars.length;
// };
//------------------------------------------------------------------------------------------------------------

// Необхідно реалізувати функцію, яка на вхід приймає об'єкт та назви властивостей об'єкта:
//     Example:
//         const obj = {}
// pick(obj, 'field-1', 'field-2', ...'field-n');
// А повертає новий об'єкт з властивостями, які були вказані в аргументах функції
// Example:
//     const fruits = {
//         apple: 2,
//         orange: 4,
//         banana: 3
//     };
// console.log(pick(fruits, 'apple', 'banana')); // { apple: 2, banana: 3 }

// const fruits = {
//     apple: 2,
//     orange: 4,
//     banana: 3
// };
//
// const pick = (obj, ...fields) => {
//     const objNew = {};
//         for (const element of fields) {
//             for (const objKey in obj) {
//             if (element === objKey){
//                 objNew[element] = obj[objKey];
//             }
//         }
//     }
//     return objNew;
// }
// console.log(pick(fruits, 'apple', 'banana'));

// const pick = (obj, ...fields) => {
//     const objNew = {};
//
//     for (const element of fields) {
//         if (obj.hasOwnProperty(element)) {
//             objNew[element] = obj[element];
//         }
//     }
//
//     return objNew;
// }

// const pick = (obj, ...fields) => {
//     const result = {};
//
//     for (const [key, value] of Object.entries(obj)) {
//         if (fields.includes(key)) {
//             result[key] = value;
//         }
//     }
//
//     return result;
// };
//-----------------------------------------------------------------------------------------------------------------

// Необхідно реалізувати функцію, яка приймає об'єкт та назви властивостей об'єкта:
//     const obj = {}
// omit(obj, 'field-1', 'field-2', ...'field-n');
// А повертає новий об'єкт з властивостями, які не були вказані в аргументах функції
// Example:
//     const fruits = {
//         apple: 2,
//         orange: 4,
//         banana: 3
//     };
// console.log(omit(fruits, 'apple', 'banana')); // { orange: 4 }

// const fruits = {
//     apple: 2,
//     orange: 4,
//     banana: 3
// };
//
// const omit = (obj, ...fields) => {
//     const objNew = {};
//
//     for (const objKey in obj) {
//         if (!fields.includes(objKey)) {
//             objNew[objKey] = obj[objKey];
//         }
//     }
//
//     return objNew;
// }
//
// console.log(omit(fruits, 'apple', 'banana'));
//---------------------------------------------------------------------------------------------------------------

// Необхідно реалізувати функцію toSnakeCase, яка приймає в якості першого аргументу слово, у форматі camelCase,
//     а повертає слово у snakeCase форматі:
//     Приклад:
//         toCamelCase('helloWorld'); // hello_world


// const toSnakeCase = (string) => {
//     return string.replace(/[A-Z]/g, function(match) {
//         return '_' + match.toLowerCase();
//     }).replace(/^_/, ''); // Видаляємо можливий зайвий "_" на початку рядка.
// }
// console.log(toSnakeCase('_helloWorldAs'));

// const toSnakeCase = (string) => {
//     const arr = string.split('')
//     const resault = arr.map((el, index) => {
//         if (index === 0) {
//             return el.toLowerCase();
//         }
//
//         if (el === el.toUpperCase()) {
//             return `_${el.toLowerCase()}`;
//         }
//         return el;
//     });
// return resault.join('');
// }
// console.log(toSnakeCase('helloWorldAs'));
//------------------------------------------------------------------------------------------------------------------

// Необхідно реалізувати функцію pluck, яка бере масив об'єктів та повертає масив значень певного поля.' +
// ' Функція не повинна змінювати початковий масив.
// Приклад:
//
//     const users = [{
//         name: 'User One',
//         age: 39,
//         id: 1
//     }, {
//         name: 'User Two',
//         age: 27,
//         id: 2
//     }];
//
// pluck(users, 'name'); // ['User One', 'User Two']


// const users = [
//     {
//         name: 'User One',
//         age: 39,
//         id: 1
//     },
//     {
//         name: 'User Two',
//         age: 27,
//         id: 2
//     }
//     ];
//
// const pluck = (collection = [], key = '') => {
//     const arr = [];
//
//     for (const element of collection) {
//         if (element[key] !== undefined) {
//             arr.push(element[key])
//         }
//     }
//
//     return arr;
// }
// console.log(pluck(users, 'name'));


// const pluck = (collection = [], key = '') => {
//     return collection.map((el) => el[key]);
// }
//-------------------------------------------------------------------------------------------------------

// Необхідно реалізувати функцію unitUnique, яка приймає в якості аргументу один або декілька масивів , і повертає
// новий масив унікальних значень.
//     Приклад:
// // [код прикладу використання]
// uniteUnique([1,2,3], [4,1,5], [6,7,8,5]); // [1,2,3,4,5,6,7,8]


// const uniteUnique = (...arrays) => {
//     const arr = [];
//     arrays.forEach(obj => arr.push(...obj));
//     const uniqueArr = [...new Set(arr)];
//     return uniqueArr;
// }
// console.log(uniteUnique([1,2,3], [4,1,5], [6,7,8,5]));

// const uniteUnique = (args) => {
//     const arr = [...args];
//
//     let newArr = [];
//
//     arr.forEach(e => {
//         newArr.push(...e);
//     });
//
//     newArr = new Set(newArr);
//
//     return [...newArr];
// };
//-----------------------------------------------------------------------------------------------------------------

// Функція createPhoneNumber отримує масив numbers як вхідний параметр і створює рядок з номером телефону у певному
// заданому форматі (xxx) xxx-xxxx. У форматі x використовується для позначення будь-якої цифри, і ці символи 'x' у
// форматі будуть замінені на відповідні цифри з масиву numbers.

// const createPhoneNumber = (numbers = []) => {
//     let format = "(xxx) xxx-xxxx";
//
//     numbers.forEach(number => {
//         format = format.replace('x', number);
//     });
//
//     return format;
// };
// console.log(createPhoneNumber([0,1,2,3,4,5,6,7,8,9]));
//----------------------------------------------------------------------------------------------------------------

// Нехай функція StringChallenge (str) приймає на вхід рядок str і повертає рядок з літерами в алфавітному порядку
// (тобто hello стає ehllo). Вважайте, що цифри та розділові знаки не будуть включені у рядок.
//     Приклади
// Вхідні дані: "coderbyte"
// Вихід:
//     bcdeeorty
// Вхідні дані: "hooplah"
// Вивід: ahhloop

// function StringChallenge(str) {
//     return str.split('').sort().join('');
// }
//
// console.log(StringChallenge('coderbyte'));
//==================================================================================================================

// Нехай функція StringChallenge (str) прийме параметр str, що передається, і напише першу літеру кожного слова з великої
// літери. Слова будуть відокремлені лише одним пропуском.

// function StringChallenge(str) {
//     const words = str.split(' ');
//     const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//
//     const outputStr = capitalizedWords.join(' ');
//     return outputStr;
// }
//
// console.log(StringChallenge("hello world"));
//==============================================================================================================

//Нехфй функція приймає num і поверне кількість символів  в num.

// function func (num) {
//     return num.toString().split('').length;
// }
//
// const result = func(5684218);
// console.log(result);



// function func(current) {
//     if (current.toString().length === 1) {
//         return 1;
//     }
//
//     return 1 + func(current.toString().substring(1));
// }
//
// console.log(func(100));
// console.log(func("Hello"));


//Потрібно набрати максимальну кількість очок під час спуску з гори, Зходити можна тільки на сусідні клітинки.
//Висота гори може бути дуже великою(від 1 до більш ніж 1000).
//Приклад:
//Вхідні параметри: [[6], [7, 10], [12, 11, 9], [90, 25, 13, 14]]
//Результат: 115
//                        6
//                       7 10
//                     12 11 9
//                   90 25 13 14
//Початковий код:
// function findPath(mountain) {
//     return
// }

// function findPath(mountain) {
//     // Створюємо копію гірського масиву для обчислень
//     let dp = mountain.map(row => row.slice());
//     // // Проходимо по горі знизу вгору, розраховуючи максимальні очки на кожній клітинці
//     for (let i = mountain.length - 2; i >= 0; i--) {
//         for (let j = 0; j < mountain[i].length; j++) {
//             // Для кожної клітинки розраховуємо максимальні очки, які можна набрати
//             dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
//         }
//     }
//     // // Повертаємо максимальну кількість очок, які можна набрати
//     console.log(dp[0][0]);
//     return dp[0][0];
// }
//
// findPath([[6], [7, 10], [12, 11, 9], [90, 25, 13, 14]]);


//сортування масиву по зростанню
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // Міняємо місцями arr[i] та arr[j]
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}

sortArray([7, 5, 2, 3, 9]);