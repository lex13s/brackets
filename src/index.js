// module.exports = function check(str, bracketsConfig) {
//   // your solution
// }
let str = "((()))()";

function check(str, bracketsConfig) {
    let result = [];
    let arr    = str.split("");

    if (arr[0] === ")"  //Проверим, что аргумент НЕ начинается с закрывающейся скобки
        || arr[0] === "}"
        || arr[0] === "]") {
        console.log(false);
        return false;
    }
    result.push(arr[0]);
    console.log(result);

    for (let i = 1; i < arr.length; i++){
        result.push(arr[i]);

        //console.log(result);
    }
    // arr.forEach((e, i) => {
    //     e++;
    //
    //     result.push(e);
    //
    //     console.log(result);
    //
    //     //result.shift(e);
    // });
    console.log(result);
    if(result[0] === undefined) return true;
}

check(str);
