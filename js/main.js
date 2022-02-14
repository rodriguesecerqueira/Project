var register = document.querySelector(".register");
var fullname = document.getElementById('fullname');
var name = document.querySelector(".fullnameInput");

register.addEventListener("click", validate)

function validate(){
    if(document.querySelector(".checkboxInput").checked){
        alert("checked");
    }else{
        alert("not checked bruh");
    }
};


var form = document.getElementById('form');
var teste = document.querySelector('.fullnameInput');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    alert(teste.value);

    // impede o envio do form
    e.preventDefault();
});

//function namecheck("name"){}

// FUNCTIONS
