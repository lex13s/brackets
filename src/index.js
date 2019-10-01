module.exports = function check(str, bracketsConfig) {
    let brackets = {};
    bracketsConfig.forEach(item => {
        brackets[item[1]] = item[0];
    });

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (!brackets.hasOwnProperty(char)) { //Если закрывающая
            //console.log(brackets[char]);
            stack.push(char);
            continue;
        }
        if (brackets[char] === stack[stack.length - 1]) { //Если на вершине стека парная ей
            stack.pop();
            continue;
        }
        if (char !== brackets[char]) {//Это точно зщакрывающая, причем не может быть ||
            return false;
        }
        stack.push(char);
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
};

let str            = "|()|(||)||";
let bracketsConfig = [['(', ')'], ['|', '|']];
// function check(str, bracketsConfig) {
//     let brackets = {};
//     bracketsConfig.forEach(item => {
//         brackets[item[1]] = item[0];
//     });
//     console.log(brackets);
//     let stack = [];
//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);
//         if (brackets.hasOwnProperty(char)) { //Если закрывающая
//             //console.log(brackets[char]);
//             if (char === brackets[char]) { //Если может быть и открывающей (типа ||)
//                 if (brackets[char] !== stack[stack.length - 1]){ //Если на вершине стека НЕ парная ей
//                     stack.push(char);
//                 } else {//Если на вершине стека парная
//                     stack.pop();
//                 }
//             } else {//Закрывающая, которая НЕ может быть открывающей
//                 if (brackets[char] !== stack[stack.length - 1]) {//На вершине стека нет пары для нашей закрывающей
//                     return false;
//                 }
//                 stack.pop();
//             }
//         } else {//Точно НЕ закрывающая (т.е. открывающая)
//             stack.push(char);
//         }
//     }
//     if (stack.length !== 0) {
//         return false;
//     }
//     return true;
// }
//
// check(str, bracketsConfig);
