console.log("FIBONACCI")
//
function fibs(num) { //normal function
    let arr = [0];
    for (let i = 1; arr.length < num; i++) {
        if (arr.length === 1) {
            arr.push(1);
        }
        let sum = arr[i - 1] + arr[i];
        arr.push(sum);
    }
    return arr;
}
console.log(fibs(8))


//recursive
function fibsRec(num, arr = [0, 1]) {
    if (arr.length === num) return arr;
    let sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
    return fibsRec(num, arr);
}
console.log(fibsRec(8))