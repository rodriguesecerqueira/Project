var register = document.querySelector('.register')
register.addEventListener("click", function(event){

    event.preventDefault();

    var register = document.querySelector(".register")
    var error = document.querySelector(".errormsg")
    var name = document.getElementById("fullnamein")
    var email = document.getElementById("emailin")
    var phone = document.getElementById("phonein")
    var pass = document.getElementById("passwordin")
    var birth = document.getElementById("birthdayin")
    var cbx = document.getElementById("checkboxin")


    let msg = []

    namevalidate(name);

    if(error.length > 0){
        error.visibility = 'visible';
        return;
    }
});

function namevalidate(name){

    var nameerror = document.getElementById('fullnameerror').classList;

    if (name.value == "" || name.value == null || name.value.length <= 4 ){
        nameerror.add('errormsg-visible');
    }
    
    else{
        nameerror.remove('errormsg-visible');
    }
}

function namevalidate(name){

    var nameerror = document.getElementById('fullnameerror').classList;

    if (name.value == "" || name.value == null || name.value.length <= 4){
        nameerror.add('errormsg-visible');
    }
    
    else{
        nameerror.remove('errormsg-visible');
    }
}

function namevalidate(name){

    var nameerror = document.getElementById('fullnameerror').classList;

    if (name.value == "" || name.value == null || name.value.length <= 4){
        nameerror.add('errormsg-visible');
    }
    
    else{
        nameerror.remove('errormsg-visible');
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
