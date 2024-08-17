(function () {
    emailjs.init({
        publicKey: "rcK-plDa5pVCg7MW0",
    });
})();

function validation() {
    let form = document.forms[0];
    let name = document.getElementById('name');
    let text = document.getElementById('text');

    if (name.value.length > 5) {
        text.classList.add('valid');
        text.classList.remove('invalid');
        
        text.style.color = 'green';
    } else {
        text.classList.remove('valid');
        text.classList.add('invalid');
        
        text.style.color = 'red';
    }

}


