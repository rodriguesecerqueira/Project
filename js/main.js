var register = document.querySelector(".register");
var error = document.querySelector(".errormsg")

register.addEventListener("click", validate)


function validate(){

    var form = document.querySelector("#form");
    var error = validateObj(form);

    if(error.length > 0){
        errormessage(error);
        return;
    }
}

// FUNCTIONS

/*function validate(){
    var form = document.getElementById('form');
    if(document.getElementById("checkboxin").checked){
        alert(form.fullnamein.value);
    }else{
        alert("not checked bruh");
    }
};*/
