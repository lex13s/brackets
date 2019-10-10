module.exports = function check(str, bracketsConfig) {
    let brackets = {};
    bracketsConfig.forEach(item => {
        brackets[item[1]] = item[0];
    });
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (brackets.hasOwnProperty(char)) { //Если закрывающая
            if (brackets[char] === stack[stack.length - 1]) { // Если на вершине стека парная ей
                stack.pop();
                continue;
            }
            if (char !== brackets[char]) {// Закрывающая, которая НЕ может быть открывающей
                return false;
            }
        }
        stack.push(char);
    }
    return stack.length === 0;
};

// module.exports = function check(str, bracketsConfig) {
//     let brackets = {};
//     bracketsConfig.forEach(item => {
//         brackets[item[1]] = item[0];
//     });
//
//     let stack = [];
//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);
//         if (brackets[char] && brackets[char] === stack[stack.length - 1]) {
//             stack.pop();
//             continue;
//         }
//         if (brackets.hasOwnProperty(char) && char !== brackets[char]) {
//             return false;
//         }
//         stack.push(char);
//     }
//     return stack.length === 0;
// };




