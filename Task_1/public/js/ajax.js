$(document).ready(function (){

})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateUsername(username) {
    const re = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+$/i;
    return re.test(username);
}
function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    return re.test(password);
}
function validatePassword_c(password, password_c){
    if(password === password_c){
        return true;
    }
    else return false;
}

function validation () {
    var username, email, password, password_c;
    username = $('#username').val();
    email = $('#email').val();
    password = $('#password').val();
    password_c = $('#password_c').val();

    if (!validateEmail(email)) {
        $('#error_message').css({'visibility': 'visible', 'opacity': '0.6'});
        $('#error_message span')[0].innerHTML = 'Such email doesn\'t exist';
        setTimeout(function (){$('#error_message').attr('style', '');}, 5000);
    }

    if(!validateUsername(username)) {
        $('#error_message').css({'visibility': 'visible', 'opacity': '0.6'});
        $('#error_message span')[0].innerHTML = 'Such username can\'t be used';
        setTimeout(function (){$('#error_message').attr('style', '');}, 5000);
    }

    if(!validatePassword(password)) {
        $('#error_message').css({'visibility': 'visible', 'opacity': '0.6'});
        $('#error_message span')[0].innerHTML = 'Invalid password';
        setTimeout(function (){$('#error_message').attr('style', '');}, 5000);
    }

    if(!validatePassword_c(password, password_c)) {
        $('#error_message').css({'visibility': 'visible', 'opacity': '0.6'});
        $('#error_message span')[0].innerHTML = 'Password doesn\'t match';
        setTimeout(function (){$('#error_message').attr('style', '');}, 5000);
    }

    if(validateEmail(email) && validatePassword(password) && validatePassword_c(password, password_c) && validateUsername(username)){
        $('#error_message').css({'visibility': 'visible', 'background': 'url("resources/images/success.png")', 'opacity': '0.6'});
        $('#error_message span')[0].innerHTML = 'You successfully registered';
        setTimeout(function (){$('#error_message').attr('style', '');}, 5000);
        setTimeout(function (){$('#response_style').empty(); $('label').find("input, textarea").val("");}, 5000);
    }

}