var payment = document.getElementById("payment")
var interest = document.getElementById("interest")
var term = document.getElementById("term")
var btn = document.getElementById("btn")
var totalMonth = document.getElementById("totalMonth")
var totalPayment = document.getElementById("totalPayment")
var totalInterest = document.getElementById("totalInterest")

btn.addEventListener('click',function(event){
    event.preventDefault()

    const pay = payment.value;
    const interestTotal = interest.value / 100 / 12;
    const termTotal = term.value * 12;
    
    const x = Math.pow(1 + interestTotal, termTotal);
    const monthPay = (pay * x * interestTotal) / (x - 1);

    totalMonth.value = monthPay.toFixed(2);
    totalPayment.value = (monthPay * termTotal).toFixed(2);
    totalInterest.value = ((monthPay * termTotal) - principle).toFixed(2);

})