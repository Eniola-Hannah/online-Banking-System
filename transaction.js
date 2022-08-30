let amount = inputAmount.value
let balance = 1000
const withdraw = () =>{
    if (amount == ""){
        display.innerText = "Input a value"
    }
    else if (amount <= myBalance){
        balance = balance - amount
        display.innerText = "succesfully withdrawn " + amount + "New balance = #" + balance
    } 
    else{
        display.innerText = "Insufficient Balance"
    }
}

