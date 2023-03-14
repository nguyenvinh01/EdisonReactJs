var height = document.getElementById('height')
var weight = document.getElementById('weight') 
var genders = document.getElementsByName('gender')
var btn = document.getElementById('btn')
var result = document.getElementById("result")

btn.addEventListener('click',function(event){
    event.preventDefault()
    let gender =""
    for (var i = 0; i < genders.length; i++){
        if (genders[i].checked === true){
            gender = genders[i].value;
        }
    }
    var h = height.value;
    var w = weight.value;
    var bmi = BMI(h, w).toFixed(2);
    var status = ''
    console.log(bmi);
    if(gender =='male'){
        if(bmi<20.7){
            status = 'Gầy'
        }
        else if(bmi<26.4){
            status = 'Bình thường'
        }
        else if(bmi<27.8){
            status = 'Thừa cân nhẹ'
        }
        else if(bmi<31.1){
            status = 'Trên lý tưởng'
        }
        else status = 'Béo phì'
    }
    else{
        if(bmi<19.1){
            status = 'Gầy'
        }
        else if(bmi<25.8){
            status = 'Bình thường'
        }
        else if(bmi<27.3){
            status = 'Thừa cân nhẹ'
        }
        else if(bmi<32.3){
            status = 'Trên lý tưởng'
        }
        else status = 'Béo phì'
        }
    result.innerText = `${bmi} | ${status}`

})

function BMI(height,weight){
        return weight/(height**2)
}
