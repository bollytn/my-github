(function () {
    emailjs.init({
        publicKey: "rcK-plDa5pVCg7MW0",
    });
})();


function validation() {
    let form = document.forms[0];
    let name = document.getElementById('name');
    let iconName = document.getElementById('iconName');
    let submitButton = document.getElementById('submit');
    let email = document.getElementById('email').value;
    let iconEmail = document.getElementById('iconEmail');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let mobile = document.getElementById('mobile');
    let iconMobile = document.getElementById('iconMobile');
    var reg = /^[0-9]+$/;   // only 8 digit /^[0-9]{7}$/

    let choice = document.getElementById('choix');

    if (name.value.length > 5) {
        iconName.classList.add('valid');
        iconName.classList.remove('invalid');
        submitButton.disabled = false;
    } else {
        iconName.classList.remove('valid');
        iconName.classList.add('invalid');
        submitButton.disabled = true;
    }

    if (email.match(pattern)) {
        iconEmail.classList.add('validEmail');
        iconEmail.classList.remove('invalidEmail');
        submitButton.disabled = false;
    } else {
        iconEmail.classList.remove('validEmail');
        iconEmail.classList.add('invalidEmail');
        submitButton.disabled = true;
    }

    if (mobile.value.match(reg)) {
        iconMobile.classList.add('validMobile');
        iconMobile.classList.remove('invalidMobile');
        submitButton.disabled = false;
    } else {
        iconMobile.classList.remove('validMobile');
        iconMobile.classList.add('invalidMobile');
        submitButton.disabled = true;
    }

    choice.value === '' ? submitButton.disabled = true : submitButton.disabled = false;


}



