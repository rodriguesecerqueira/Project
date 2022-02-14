var register = document.querySelector(".register");

register.addEventListener("click", validate)

/*function validate(){
    var form = document.getElementById('form');
    if(document.getElementById("checkboxin").checked){
        alert(form.fullnamein.value);
    }else{
        alert("not checked bruh");
    }
};*/

function validate(){

    var form = document.getElementById('form');
    
    if(namecheck() = true){
        alert(form.fullnamein.value);
    }else{
        alert("not checked bruh");
}

function namecheck(){
    var form = document.getElementById('form');
    if(form.fullnamein.value > 4){
        alert(form.fullnamein.value);
    }

    else{

    }
}

// FUNCTIONS
