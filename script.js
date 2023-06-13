
let errMessageActive = false;

function checkPassword(){
    const passwordInput = document.getElementById("user_password");
    const checkPasswordInput = document.getElementById("confirm_password");
    const submitBtn = document.getElementById('submit_btn');

    if(passwordInput.value === checkPasswordInput.value){
        submitBtn.disabled = false;
        const err = document.querySelector('.passwordErrorMessage');
        err.remove();
    }
    else{
        if(errMessageActive === false){
            let passwordError = document.createElement('span');
            passwordError.className = "passwordErrorMessage";
            passwordError.innerHTML = "Passwords do not match";
            passwordError.style.color = 'red';
            const confirmDiv = document.getElementById("confirm").appendChild(passwordError);
        }
        errMessageActive = true;
    }
}