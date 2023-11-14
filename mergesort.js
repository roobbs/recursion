console.log("MERGE SORT")
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let half = Math.floor(arr.length / 2);
    let first = mergeSort(arr.slice(0, half));
    let second = mergeSort(arr.slice(half));
    return merge(first, second);
}
function merge(left, right) {
    let merged = [];
    while (left.length > 0 && right.length > 0) {
        let min = left[0] < right[0] ? left : right;
        let mergeElement = min.shift();
        merged.push(mergeElement);
    }
    return merged.concat(left, right);
}
console.log(mergeSort([4, 3, 2, 1, 8, 5]));