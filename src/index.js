// module.exports = function check(str, bracketsConfig) {
//
//     let result = [];
//     let arr    = str.split("");
//
//     if (arr[0] === ")"
//         || arr[0] === "}"
//         || arr[0] === "]") {
//         console.log(false);
//         return false;
//     }
//     result.push(arr[0]);
//
//     for (let i = 1; i < arr.length; i++){
//         let j = 0;
//
//         if (result[j] !== arr[i]) { //если пара совпала, удаляем из стека
//             result.shift();
//         } else {
//             result.push(arr[i]); //если пара не совпала - добавляем в стек
//             j++;
//         }
//     }
//
//     if (result[0] === undefined) {
//         return true;
//     } else {
//         return false
//     }
// };
//======temp=========
// let str = "(({})(({}))([])({})[])";
//
// function check(str, bracketsConfig) {
//     let result = [];
//     let arr    = str.split("");
//
//     if (arr[0] === ")"  //Проверим, что аргумент НЕ начинается с закрывающейся скобки
//         || arr[0] === "}"
//         || arr[0] === "]") {
//         console.log(false);
//         return false;
//     }
//
//     result.push(arr[0]);
//
//     for (let i = 1; i < arr.length; i++){
//         let j = 0;
//
//         if (result.length >= 1 && result[j] !== arr[i]) { //если пара совпала, удаляем из стека
//             console.log(result[j], arr[i]);
//             result.shift();
//         } else {
//             result.push(arr[i]); //если пара не совпала - добавляем в стек
//             j++;
//             console.log(result[j], arr[i]);
//         }
//
//     }
//     console.log(result);
//     if (result[0] === undefined) {
//         return true;
//     } else {
//         return false
//     }
// }
// console.log(check(str));


//==========для многомерного массива===============
let str = "(({})(({}))([])({})[])";
let bracketsConfig = [['(', ')'], ['[', ']', ")"]];

let length = bracketsConfig.length;
//let result = [];

// function iterator (bracketsConfig, callback) {
//     // let temp = null;
//
//     let item, index = 0;
//     length = bracketsConfig.length;
//
//     for (; index < length; index++) {
//         item = bracketsConfig[index];
//
//         if (Object.prototype.toString.call(item) === '[object Array]') {
//             iterator(item, callback);
//         } else {
//             callback(item);
//         }
//     }
//     //console.log(result); //нужно проверять каждый вложенный, тут точка создания их (и обнулять массив после проверки
//     //---------->>>>>>>>>>>
//     //checkArr(result);
//     //----------<<<<<<<<<<<
//
//     // if (result[0] === undefined) {
//     //     console.log("массив пустой");
//     //     result.length = 0;
//     //     return true;
//     // } else {
//     //     console.log("массив НЕ пустой");
//     //     return false
//     // }
//
// return result
// }

// Будет вызвана для каждого элемента, не являющимся массивом.
// function callback (item) {
//     result.push(item);
// }



//Наконец проверяем наш массив
// function checkArr(arr) {
//     let result = [];
//
//     if (arr[0] === ")"  //Проверим, что аргумент НЕ начинается с закрывающейся скобки
//         || arr[0] === "}"
//         || arr[0] === "]") {
//         console.log("Ошибка в скобках #1");
//         return false; //И первый выход с ошибкой из программы
//     }
//
//     result.push(arr[0]);
//
//     for (let i = 1; i < arr.length; i++){
//         let j = 0;
//
//         if (result.length >= 1 && result[j] !== arr[i]) { //если пара совпала, удаляем из стека
//             result.shift();
//         } else {
//             result.push(arr[i]); //если пара не совпала - добавляем в стек
//             j++;
//         }
//
//         console.log(result);
//         if (result[0] === undefined) {
//             console.log("НЕТ ошибок в скобках");
//             result.length = 0; //очищаем массив
//             console.log(result);
//             return true;
//         } else {
//             console.log("Ошибка в скобках №2");
//             result.length = 0; //очищаем массив
//             console.log(result);
//             return false
//         }
//     }
//
// }



//--------------------------------------------------------------------------------------
function check(str, bracketsConfig) {
    let firstArg, secondArg;

    let result = [];
    //let secondLength = bracketsConfig.length;

    function iterator (bracketsConfig, callback) {

        let item, index = 0;
        const secondLength = bracketsConfig.length;

        for (; index < secondLength; index++) {
            item = bracketsConfig[index];

            if (Object.prototype.toString.call(item) === '[object Array]') {
                iterator(item, callback);
            } else {
                callback(item);
            }
        }
        //console.log(result); //нужно проверять каждый вложенный, тут точка создания их (и обнулять массив после проверки
        //---------->>>>>>>>>>>
        //checkArr(result);
        //----------<<<<<<<<<<<

        // if (result[0] === undefined) {
        //     console.log("массив пустой");
        //     result.length = 0;
        //     return true;
        // } else {
        //     console.log("массив НЕ пустой");
        //     return false
        // }

        return result
    }
    function callback (item) {
        result.push(item);
    }
    function checkArr(arr) {
        let result = [];

        if (arr[0] === ")"  //Проверим, что аргумент НЕ начинается с закрывающейся скобки
            || arr[0] === "}"
            || arr[0] === "]") {
            console.log("Ошибка в скобках #1");
            return false; //И первый выход с ошибкой из программы
        }

        result.push(arr[0]);

        for (let i = 1; i < arr.length; i++){
            let j = 0;

            if (result.length >= 1 && result[j] !== arr[i]) { //если пара совпала, удаляем из стека
                result.shift();
            } else {
                result.push(arr[i]); //если пара не совпала - добавляем в стек
                j++;
            }

            console.log(result);
            if (result[0] === undefined) {
                console.log("НЕТ ошибок в скобках");
                result.length = 0; //очищаем массив
                console.log(result);
                return true;
            } else {
                console.log("Ошибка в скобках №2");
                result.length = 0; //очищаем массив
                console.log(result);
                return false
            }
        }

    }

    secondArg = iterator (bracketsConfig, callback);
    firstArg = str.split("");
    console.log(firstArg, secondArg);
    checkArr(firstArg);
    checkArr(secondArg);

}
console.log(check(str, bracketsConfig));
