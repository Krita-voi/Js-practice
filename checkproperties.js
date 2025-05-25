const myCheckBox = document.getElementById("myCheckBox");
const esewaBtn = document.getElementById("esewaBtn");
const phonepayBtn= document.getElementById("phonepayBtn");
const khaltiBtn = document.getElementById("khaltiBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You have payed!`;
    }
    else{
        subResult.textContent = `You have not payed!`;
    }

    if(esewaBtn.checked){
        paymentResult.textContent = `You are paying thorugh Esewa`;
    }
    else if(phonepayBtn.checked){
        paymentResult.textContent = `You are paying thorough PhonePay`;
    }
    else if (khaltiBtn.checked){
        paymentResult.textContent = `You are paying thorough Khalti`;
    }
    else{
        paymentResult.textContent = `You must select a payment method!`;
    }
}