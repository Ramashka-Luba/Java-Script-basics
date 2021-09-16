// ///////// Переменные /////////
// // let admin;
// let name; //переменная
//     name = "Джон" //значение переменной
// console.log(name); //выводим в консоль
// let admin = name; //копируем значение name в значение admin
// console.log(admin);


// ///////// Обьект /////////
// let house = {
//     city: "Minsk", //свойство city
//     address: "Niomanskay 12-28", //свойство address
// }
// console.log(house); //выводим все свойства в консоль
// console.log(house.city); //выводим в консоль Minsk
// console.log(house.address); //выводим в конслоль Niomanskay 12-28


// let user = {
//     name: "John",
//     surname: "Smith",
// }
// user.name = "Pete" //меняем свойство name
// delete user.name // удаляем свойство name
// console.log(user);


// ///////// Массив /////////
// let styles = ["Джас", "Блюз"]; // массив элементы Джаз и Блюз (массив с данными)
//     styles[2]= "Рок-н-ролл"; //добавляем в конец
//     styles[1]= "Классика"; //заменяем Блюз на Классика 
// console.log(styles.shift() ); //удаляем первый элемент массива и показываем его
//                             //если не хотим показывать в консоле styles.shift();
//     styles.unshift("Рэп", "Рэгги"); //добавляем Рэп и Рэжгги в начало массива
// console.log(styles);



// //17.Перепишите конструкцию if с использованием условного оператора '?'
// //было:
// function sum (a,b) {
//     let result;
// if (a+b<4) {
//     result="Мало";
// } else {
//     result="Много";
// }
// return result
// }
// console.log(sum (1,1));
// console.log(sum (15,1));
// //=====>>>
// //стало:
// function sum1 (a,b) {
//     let result = (a+b<4) ? "Мало" : "Много";
//     return result
// }
// console.log(sum1 (2,2));




// //18.Перепишите if..else с использованием нескольких операторов '?'
// // let message;

// // if (login == 'Сотрудник') {
// //     message = 'Привет';
// // } else if (login == 'Директор') {
// //     message = 'Здравствуйте';
// // } else if (login == '') {
// //     message = 'Нет логина';
// // } else {
// //     message = '';
// // }
// //=====>>>
// // let massage = login == 'Сотрудник' ? 'Привет' : 
// //             login == 'Директор' ? 'Здравствуйте' :
// //             login == '' ? 'Нет логина' : '';
// // alert (message); // как вывести?


// //19.	Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// //Пример вызовов:
// // min(2, 5) == 2
// // min(3, -1) == -1
// // min(1, 1) == 1

// // function min(a, b) {
// // if (a < b) {
// //     return a;
// // } else {
// //     return b;
// //     }
// // }
// //=====>>>
// function min(a, b) {
//     return a < b ? a : b;
// }
// let result = min(2, 5)
// console.log(result);

// result = min(3, -1)
// console.log(result);

// result = min(1, 1)
// console.log(result);


// 20.	Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// function pow(a, b) {

// }


//////////// // lesson 11 (function) // ////////////

// var lastNameId = "last-name";
// var lastNameEl = document.getElementById(lastNameId);

// var myOldId = "my-old";
// var myOldEl = document.getElementById(myOldId);

// // console.log(lastNameEl.value); //вместо этого делаем функцию и передаем значентия
// // console.log(myOldEl.value);

// function myData() {
//     console.log(lastNameEl.value); // делаем функцию и передаем значентия
//     console.log(myOldEl.value);
// }

// myData(); //вызываем функцию

//////////// // lesson 12 параметры функции (HTML из lessons11) // ////////////


// 1 // первая запись, упращаем второй записью
// var lastNameId = "last-name";
// var lastNameEl = document.getElementById(lastNameId);
// console.log(lastNameEl.value); 
// console.log(lastNameEl.className);

// // 2 // вторая запись, упращаем третей записью
// function alertLastNameValues() {
//     console.log(lastNameEl.value);
//     console.log(lastNameEl.className);
// }

// var lastNameId = "last-name";
// var lastNameEl = document.getElementById(lastNameId);

// alertLastNameValues();

// // 3 // третья запись, создаем функцию для всего докуметка, вызывает ее ниже переменной и передаем туда нужную переменную

// function alertValues(elementParametr) { //универсальная функция для всего документа
//     console.log(elementParametr.value);
//     console.log(elementParametr.className);
// }

// var lastNameId = "last-name";
// var lastNameEl = document.getElementById(lastNameId);
// alertValues(lastNameEl); // выззываем универсальную функцию

// var myOldId = "my-old";
// var myOldEl = document.getElementById(myOldId);
// alertValues(myOldEl);

// var citiesId = "cities";
// var citiesEl = document.getElementById(citiesId);
// alertValues(citiesEl);

// var learnListId = "learn";
// var learnListEl = document.getElementById(learnListId);
// alertValues(learnListEl);

// var avatarId = "avatar";
// var avatarEl = document.getElementById(avatarId);
// alertValues(avatarEl);


//////////// // lesson 13 возвращаемые значения (HTML из lessons11, два первых инпута) // ////////////

// 1 // 
var lastNameId = "last-name";
var lastNameEl = document.getElementById(lastNameId);
console.log(lastNameEl.value);

var myOldId = "my-old";
var myOldEl = document.getElementById(myOldId);
console.log(myOldEl.value);


// 2 ////чтобы не дублировать код делаем функцию
function lastNameLog() {
    var lastNameId = "last-name";
    var lastNameEl = document.getElementById(lastNameId);
    console.log(lastNameEl.value);
}
function myOldLog() {
    var myOldId = "my-old";
    var myOldEl = document.getElementById(myOldId);
    console.log(myOldEl.value);
}
lastNameLog();//вызываем функции
lastNameLog();

myOldLog();
myOldLog();


// 3 ////обьединяем две функции в одну и выносим id внаружу
function logValue(id) {
    var el = document.getElementById(id);
    console.log(el.value);
}
var lastNameId = "last-name";
var myOldId = "my-old";

logValue (lastNameId);
logValue (lastNameId);

logValue (myOldId);
logValue (myOldId);


// 3 ////мы хотим получить значение, а потом самим решать что с ним делать (возвращаем функцию)
function getValue(id) {
    var el = document.getElementById(id);
    return el.value;
}
var lastNameId = "last-name";
var myOldId = "my-old";

var value = getValue (lastNameId);
var value1 = getValue (myOldId);

console.log(value);
console.log(value1);



