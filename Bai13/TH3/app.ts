function checkNumber(arr:any[]){
    let checkNumber = true;
    arr.map((num)=>{
        if(typeof num != 'number') checkNumber = false
    })

    return checkNumber
}

function sumNumber(arr: any[]){
    return new Promise((resolve,reject)=>{
        if(checkNumber(arr)){
            let sum :number =0;
            sum = arr.reduce((sum,n)=> sum+=n)
            resolve(sum)
        }
        else reject("Khong phai mang so")
    })
}

const getData = async () => {
    const allPromise = Promise.all([
      sumNumber([1, 2]),
      sumNumber([3, 4])
    ]);
    const lists = await allPromise;
    console.log(lists);
  }

getData()
