let str            = "([{}])";
let bracketsConfig = [['(', ')'], ['[', ']']];

// module.exports =
// function check(str, bracketsConfig) {
//     let firstArg  = str.split(""),
//         secondArg = iterator(bracketsConfig, callback),
//         result    = [];
//     let resultFirstArg  = true,
//         resultSecondArg = true;
//     // function iterator(bracketsConfig, callback) {
//     //
//     //     let item, index    = 0;
//     //     const secondLength = bracketsConfig.length;
//     //
//     //     for (; index < secondLength; index++) {
//     //         item = bracketsConfig[index];
//     //         if (Object.prototype.toString.call(item) === '[object Array]') {
//     //             iterator(item, callback);
//     //         } else {
//     //             callback(item);
//     //         }
//     //     }
//     //     return result
//     // }
//
//     function iterator(bracketsConfig, callback) {
//         let item, index    = 0;
//         const secondLength = bracketsConfig.length;
//         for (; index < secondLength; index++) {
//             item = bracketsConfig[index];
//             if (Object.prototype.toString.call(item) === '[object Array]') {
//                 iterator(item, callback);
//             } else {
//                 callback(item);
//             }
//         }
//         return result
//     }
//
//     function callback (item) {
//         result.push(item);
//     }
//
//     function checkArr(arr) {
//         let result = [];
//         for (let i = 1; i < arr.length; i++) {
//             let j = 0;
//             if ((arr[i] === ")" && result.length === 0)
//                 || (arr[i] === "}" && result.length === 0)
//                 || (arr[i] === "]" && result.length === 0)
//                 || (arr[i] === "|" && result.length === 0)) {
//                 return resultSecondArg = false // проверям, что 1 скобка НЕ закрывающаяся
//             } else if (
//                 (arr[i] === "}" && result[j] === "{")
//                 || (arr[i] === "]" && result[j] === "[")
//                 || (arr[i] === "|" && result[j] === "|")) {
//                 result.pop(); //если пара  совпала - удаляем из стека
//                 j--;
//             } else if (arr[i] === "("
//                 || arr[i] === "{"
//                 || arr[i] === "["
//                 || arr[i] === "|") { //убрать отдельно?
//                 result.push(arr[i]);
//                 j++;
//             } else if (arr[i] === "|" && result[j] !== "|") {
//                 result.push(arr[i]);
//                 j++;
//             }
//         }
//         if (result.length === 0) { //массив пуст, значит все проверки прошли
//             console.log("проверяем ПУСТОЙ массив", result);
//             result.length = 0; //очищаем массив
//             return true;
//         } else {
//             console.log("проверяем НЕ пустой массив", result);
//             result.length  = 0; //очищаем массив
//             resultFirstArg = false;
//             return false
//         }
//     }
//
//     console.log(firstArg, secondArg);
//     resultFirstArg = checkArr(firstArg);
//     console.log("Проверка firstArg прошла", resultFirstArg);
//     resultSecondArg = checkArr(secondArg);
//     console.log("Проверка secondArg прошла", resultFirstArg);
//     return resultFirstArg && resultSecondArg;
// }
//
// console.log(check(str, bracketsConfig));



function check(str, bracketsConfig) {
    let result = [];

    let firstArg = str.split(""),
        secondArg = iterator (bracketsConfig, callback);

    let resultFirstArg = true,
        resultSecondArg = false;


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
        return result
    }
    function callback (item) {
        result.push(item);
    }

    function checkArr(arr) {
        let result = [];

        for (let i = 1; i < arr.length; i++) {
            let j = 0;
            if ((arr[i] === ")" && result.length === 0)
                || (arr[i] === "}" && result.length === 0)
                || (arr[i] === "]" && result.length === 0)
                || (arr[i] === "|" && result.length === 0)) {
                return resultSecondArg = false // проверям, что 1 скобка НЕ закрывающаяся
            } else if (
                (arr[i] === "}" && result[j] === "{")
                || (arr[i] === "]" && result[j] === "[")
                || (arr[i] === "|" && result[j] === "|")) {
                result.pop(); //если пара  совпала - удаляем из стека
                j--;
            } else if (arr[i] === "("
                || arr[i] === "{"
                || arr[i] === "["
                || arr[i] === "|") { //убрать отдельно?
                result.push(arr[i]);
                j++;
            } else if (arr[i] === "|" && result[j] !== "|") {
                result.push(arr[i]);
                j++;
            }
        }
        if (result.length === 0) { //массив пуст, значит все проверки прошли
            console.log("проверяем ПУСТОЙ массив", result);
            result.length = 0; //очищаем массив
            return true;
        } else {
            console.log("проверяем НЕ пустой массив", result);
            result.length  = 0; //очищаем массив
            resultFirstArg = false;
            return false
        }
    }

    console.log(firstArg, secondArg);
    resultFirstArg=  checkArr(firstArg);
    console.log("Проверка firstArg прошла", firstArg);
    resultSecondArg = checkArr(secondArg);
    console.log("Проверка secondArg прошла", secondArg);

    return resultFirstArg && resultSecondArg;
}
console.log(check(str, bracketsConfig));
