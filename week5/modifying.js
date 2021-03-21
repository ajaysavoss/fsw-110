alert("Click OK if you are not a robot.");

var password1 = document.getElementById("pass1"),
    password2 = document.getElementById("pass2");

    function validPass(){
        if (password1.value != password2.value){
            password2.setCustomValidity("Passwords Do Not Match.")
        } else{
            password2.setCustomValidity("Account Successfully Created.")
        }
    }

    password2.addEventListener("keyup",validPass);