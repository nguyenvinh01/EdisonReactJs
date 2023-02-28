function gradePoint(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
    }
    average = sum/arr.length
    return average;

}
arr = [10,10,7,10,2,10]


console.log(arr)
cas = gradePoint(arr)
if (cas < 7) {
    console.log("D")
} else if(cas < 8) {
    console.log("C")
}
else if(cas < 9) {
    console.log("B")
}
else {
    console.log("A")
}

console.log(cas)