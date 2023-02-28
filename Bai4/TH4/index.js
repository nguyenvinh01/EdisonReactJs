function calculate() {

    let amount = prompt("Khoản vay");
    
    let rate = prompt("Lãi suất (%)");
    
    let months = prompt("Thời gian trả(tháng)");
    const interest = (amount * (rate * 0.01)) / months;

    const total = ((amount / months) + interest).toFixed(2);
    
    alert("EMI: " + total);
    }