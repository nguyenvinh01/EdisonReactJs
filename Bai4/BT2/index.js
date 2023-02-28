function checkMinNum(arr){
    let min = arr[0]
    for(i = 0; i<arr.length ; i++){
        if(arr[i]<min) min = arr[i];
    }
    return min;
}
function checkMaxNum(arr){
    let max = arr[0]
    for(i = 0; i<arr.length ; i++){
        if(arr[i]>max) max = arr[i];
    }
    return max;
}

function canNest(arr1,arr2){
    minNum1 = checkMinNum(arr1)
    minNum2 = checkMinNum(arr2)
    maxNum1 = checkMaxNum(arr1)
    maxNum2 = checkMaxNum(arr2)

    if(minNum1>minNum2 && maxNum1<maxNum2){
        return true
    }
    return false
}
console.log("Test 1");
console.log("Mảng 1: 1, 2, 3");
console.log("Mảng 2: 2, 3");
arr1 = [1, 2, 3]
arr2 = [2, 3]

console.log(canNest(arr1,arr2))

console.log("Test 2");
console.log("Mảng 1: 1, 2, 3, 4");
console.log("Mảng 2: 0, 10");

arr1 = [1, 2, 3, 4]
arr2 = [0, 10]

console.log(canNest(arr1,arr2))