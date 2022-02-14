var register = document.querySelector('.register')
register.addEventListener("click", function(event){

    event.preventDefault();

    //var register = document.querySelector(".register")
    var error = document.querySelector(".errormsg")
    var name = document.getElementById("fullnamein")
    var email = document.getElementById("emailin")
    var phone = document.getElementById("phonein")
    var pass = document.getElementById("passwordin")
    var birth = document.getElementById("birthdayin")
    var cbx = document.getElementById("checkboxin")


    //let msg = []

    const rgx1 = /^[a-zá-úA-ZÁ-Ú- ]+$/g;
    const rgx2 = /^[a-zA-Z0-9-@.]+$/g;

    if (namevalidate(name, rgx1) == true & emailvalidate(email,rgx2) == true & phonevalidate(phone) == true & passvalidate(pass) == true & birthvalidate(birth) == true & cbxvalidate(cbx) == true){
        location.href = "gate.html";
    }

    if(error.length > 0){
        error.visibility = 'visible';
        return;
    }
});

function namevalidate(name, rgx1){

    var nameerror = document.getElementById('fullnameerror').classList;

    if (!name.value.match(rgx1) || name.value.length <= 4){
        nameerror.add('errormsg-visible');
    }
    
    else{
        nameerror.remove('errormsg-visible');
        return true;
    }
}

function emailvalidate(email, rgx2){

    var emailerror = document.getElementById('emailerror').classList;
    if (!email.value.match(rgx2) || email.value == 0){
        emailerror.add('errormsg-visible');
    }
    
    else{
        emailerror.remove('errormsg-visible');
        return true;
    }
}

function phonevalidate(phone){

    var phoneerror = document.getElementById('phoneerror').classList;

    if (phone.value == null || phone.value == 0){
        phoneerror.add('errormsg-visible');
    }
    
    else{
        phoneerror.remove('errormsg-visible');
        return true;
    }
}

function passvalidate(pass){

    var passerror = document.getElementById('passworderror').classList;

    if (pass.value == null || pass.value == 0){
        passerror.add('errormsg-visible');
    }
    
    else{
        passerror.remove('errormsg-visible');
        return true;
    }
}

function birthvalidate(birth){

    var birtherror = document.getElementById('birthdayerror').classList;

    if (birth.value == null || birth.value == 0){
        birtherror.add('errormsg-visible');
    }
    
    else{
        birtherror.remove('errormsg-visible');
        return true;
    }
}

function cbxvalidate(cbx){

    var cbxerror = document.getElementById('checkboxerror').classList;

    if (cbx.checked == false){
        cbxerror.add('errormsg-visible');
    }
    
    else{
        cbxerror.remove('errormsg-visible');
        return true;
    }
}

