let balance = 1000
const withdraw = () =>{
    if (inputAmount.value == ""){
        display.innerText = "Input a value"
    }
    else if (inputAmount.value > balance){
        display.innerText = `Insufficient Balance`
    } 
    else{
        balance = balance - inputAmount.value
        display.innerText = "succesfully withdrawn " + inputAmount.value + "New balance = #" + balance
        // display.innerText = `Successfully withrawn ${amount} New blance = # ${balance}`
    }
}

const deposit = () => {
    if (inputAmount.value == ""){
        display.innerText ="Input an amount to be deposited"
    } else{
        balance = Number(balance) + Number(inputAmount.value)
        display.innerText = "succesfully deposited " + inputAmount.value + " " + "New balance = #" + balance
    }
}

const checkBalance = () =>{
    display.innerText =`Current Balance = # ${balance}`
    // display.innerText = "Current Balance = #" + (balance)
}