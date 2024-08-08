function sendMail() {
    const params = {
        name : document.getElementById("name").value ,
        email : document.getElementById("email").value ,
        mobile : document.getElementById("mobile").value,
        message : document.getElementById("message").value,
        choice : document.getElementById("choix").value,
    };

const serviceID = "service_kjr0def";
const templateID = "template_zy2gqqh";

emailjs.send(serviceID,templateID,params)
.then(
    res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("message").value = "";
        document.getElementById("choix").value = "";
        console.log(res);
        alert("votre message est envoyer avec succès")
        let x = document.getElementById("toast");
        x.className = "show";
        setTimeout(function(){
            x.className = x.className.replace("show","")
        })
    })
.catch((err) => console.log(err));
}
