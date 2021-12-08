const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click",function validateBillAmount(){
    
    if(Number(billAmount.value) > 0){
        message.innerText = "";
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            calculateChange(amountToBeReturned);
        }else{
            message.innerText = "Do you want to wash plates?";
        }
    }else{
        message.innerText = "Invalid Bill Amount";      
    }
});

function calculateChange(val){
    for(let i = 0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(val / availableNotes[i]);
    
        val %= availableNotes[i];
       
        noOfNotes[i].innerText = numberOfNotes;
    }
}

