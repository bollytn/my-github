function sendMail() {
    var params = {
        name : document.getElementById("name").value ,
        email : document.getElementById("email").value ,
        mobile : document.getElementById("mobile").value,
    };
const serviceID = "service_kjr0def";
const templateID = "template_1pvca8t";

emailjs.send(serviceID,templateID,params)
.then(
    res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mobile").value = "";
        console.log(res);
        alert("votre message est envoyer avec succès")
    })
.catch((err) => console.log(err));
}

    