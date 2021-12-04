const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

checkButton.addEventListener("click",function validateBillAmount(){
    message.style.display = "none";
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            
        }else{
            showMessage("The cash should be equal to bill amount");
        }
    }else{
        showMessage("Invalid Bill Amount")       
    }
});

function showMessage(message){
    message.style.display = "block";
        message.innerText = message;
}
