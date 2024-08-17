let userInput = document.querySelector('#name');
let mobileInput = document.querySelector('mobile');

(function(){
    emailjs.init({
    publicKey: "rcK-plDa5pVCg7MW0",
   });
  })();

document.forms[0].onsubmit = function (e) {

    let userValid = false;
    let telValid = false;

    


    if(userValid===false || telValid===false){
        e.preventDefault(); 
        console.log('send');
    }
}


