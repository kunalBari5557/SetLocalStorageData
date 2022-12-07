

function validation(value){
    let error = {}
    const password_pattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/

    if(value.password === ""){
        error.password = "Password should not be empty"
    }

    if(!password_pattern.test(value.password)){
        error.password = "Password did not match"
    }

    if(value.confirm_password === "" || value.confirm_password !== value.password){
        error.confirm_password = "Password not match"
    }
    return error;
}

export default validation