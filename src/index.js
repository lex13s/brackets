module.exports = function check(str, bracketsConfig) {

    let result = [];
    let arr    = str.split("");

    if (arr[0] === ")"
        || arr[0] === "}"
        || arr[0] === "]") {
        console.log(false);
        return false;
    }
    result.push(arr[0]);

    for (let i = 1; i < arr.length; i++){
        let j = 0;

        if (result[j] !== arr[i]) { //если пара совпала, удаляем из стека
            result.shift();
        } else {
            result.push(arr[i]); //если пара не совпала - добавляем в стек
            j++;
        }
    }

    if (result[0] === undefined) {
        return true;
    } else {
        return false
    }
};

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
