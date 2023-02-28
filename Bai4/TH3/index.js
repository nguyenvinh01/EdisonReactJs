function maxNum(arr){
    let max = arr[0]
    for(i = 0; i<arr.length ; i++){
        if(arr[i]>max) max = arr[i];
    }
    return max;
}

arr = [1,2,3,8,4,5]

console.log(maxNum(arr));