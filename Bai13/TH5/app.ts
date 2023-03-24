function sumNumber(a: any, b:any){
    return new Promise((resolve, reject)=>{
        if(typeof a == 'number' && typeof b == 'number'){
            resolve(a+b)
        }
        else{
            reject('Not number')
        }
    })
}
const getData = async (a: any, b: any) => {
    sumNumber(a, b)
      .then(val => {
        console.log(val)
      })
      .catch(err => {
        console.log(err)
      })
  }
  getData(1, "a");