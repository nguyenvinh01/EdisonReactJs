function maxNum(arr){
    let max = arr[0]
    for(i = 0; i<arr.length ; i++){
        if(arr[i]>max) max = arr[i];
    }
    return max;
}
console.log("Test 1:");
console.log("Mảng : 1,2,3,8,4,5");
arr = [1,2,3,8,4,5]

console.log("Số lớn nhất là:", maxNum(arr));

console.log("Test 2:");
console.log("Mảng : 17,22,13,38,49,5");
arr = [17,22,13,38,49,5]

console.log("Số lớn nhất là:", maxNum(arr));