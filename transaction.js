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

const deposit = () => {
    if (amount != ""){
        myBalance = Number(myBalance) + Number(amount)
        display.innerText = "succesfully deposited " + amount + " " + "New balance = #" + myBalance
    } else{
        display.innerText ="Input an amount to be deposited"
    }
}

const checkBalance = () =>{
    display.innerText = "Current Balance = #" + myBalance
}