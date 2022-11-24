const burger = document.querySelector('.burger');
const link = document.querySelector('.links');
const body = document.querySelector('body');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    link.classList.toggle('open');
    body.classList.toggle('lock');
});

/*-----------------------------------------------------*/
const accept = document.querySelector('.accept');
const input = document.querySelector('.input-accept');

input.addEventListener('click', function () {
    accept.classList.toggle('checked')
})
/*-----------------------------------------------------*/
function sendMail() {
  let params = {
    name: document.querySelector(".input-name").value,
    email: document.querySelector(".input-email").value,
    message: document.querySelector(".input-message").value,
  };

  const serviceID = "service_bco1i5m";
  const templateID = "template_syavync";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.querySelector(".input-name").value = "";
        document.querySelector(".input-email").value = "";
        document.querySelector(".input-message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));
}
