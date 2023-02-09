var email=document.forms['form']['email'];
var password=document.forms['form']['password'];
var phone_error=document.getElementById('phone_error');
var pss_error=document.getElementById('pass_error');

email.addEventListener('textInput',email_verify);
password.addEventListener('textInput',pass_verify);


function validated(){


    if(email.value.length<11){
        email.style.border="1px solid red";
        phone_error.style.display="block";
        email.focus();
        return false;

    }
    if(password.value.length<9){
        password.style.border="1px solid red";
        pass_error.style.display="block";
        password.focus();
        return false;
    }
}
function email_Verify(){
    if(email.value.length=10){
        email.style.border="1px solid silver";
        phone_error.style.display="none";
        return true;
    }
}
function pass_Verify(){
    if(password.value.length>=10){
        password.style.border="1px solid silver";
        password_error.style.display="none";
        return true;
    }
}