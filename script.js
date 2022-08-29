customerDetails = []
const signUp = () =>{
    let userDetails={
            firstName : firstname.value,
            lastName : lastname.value,
            email : userEmail.value,
            password : userPassword.value,
            phoneNumber : phonenumber.value
        }
    // customerDetails =
    // console.log(userDetails)
    if(userDetails.firstName == firstname.value && userDetails.lastName == lastname.value && userDetails.email == userEmail.value && userDetails.password == userPassword.value && userDetails.phoneNumber == phonenumber.value){
        customerDetails=userDetails.push()
        firstname.value =""
        lastname.value =""
        userEmail.value =""
        userPassword.value =""
        phonenumber.value =""
        // window.location.href = "sign.html"
    }
    else{
        console.log("Fill the Required Spaces")
    }
}