function avgPoint(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
    }
    average = sum/arr.length
    return average;
}
function gradePoint(point){
    if (point < 7.1) {
        return "D"
    } else if(point < 8.1) {
        return "C"
    }
    else if( point < 9.1){
        return "B"
    } else {
        return "A"
    }
}

console.log("Test 1:");
arr = [10,10,6,10,2,10]
console.log("Mảng điểm: 10,10,7,10,2,10");
point = avgPoint(arr)
console.log("Điểm trung bình: ",point.toFixed(2));
console.log("Xếp hạng: ",gradePoint(point));


console.log("Test 2:");
arr = [10,10,10,10,4.5,10]
console.log("Mảng điểm: 10,10,10,10,4.5,10");
point = avgPoint(arr)
console.log("Điểm trung bình: ",point.toFixed(2));

console.log("Xếp hạng: ",gradePoint(point));