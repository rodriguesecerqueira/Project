var register = document.querySelector(".register");
var name = document.querySelector(".register");

register.addEventListener("click", validate);

function validate(){
    if(document.querySelector(".checkboxInput").checked){
        alert("checked");
    }else{
        alert("not checked bruh");
    }
}

//function namecheck{}