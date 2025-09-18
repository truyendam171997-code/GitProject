

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if ( min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [3, 5, 1, 8, -3, 7, 8]

let arr2 = [7, 12, 6, 9, 20, 56, 89]

let arr3 = []

let arr4 =[0, 0, 0, 0, 0, 0]
document.write(findMin(arr1));
document.write(findMin(arr2));
document.write(findMin(arr3));
document.write(findMin(arr4));
