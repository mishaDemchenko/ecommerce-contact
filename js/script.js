const burger = document.querySelector('.burger');
const link = document.querySelector('.links');
const body = document.querySelector('body');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    link.classList.toggle('open');
    body.classList.toggle('lock');
});
/*-----------------------------------------------------*/
const form = document.querySelector(".form");
form.addEventListener("submit", e => {
  e.preventDefault();
  let name = document.querySelector(".input-name").value;
  let email = document.querySelector(".input-email").value;
  let text = document.querySelector('.input-message').value;

  


  document.querySelector(".form").reset();

  email(name, email,text);
})
function email(name, email, text){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "elasticcontactpage@gmail.com",
        Password : "760DCBC67FA9AA051C3F576DDCA4BEDACE21",
        To : 'elasticcontactpage@gmail.com',
        From : "elasticcontactpage@gmail.com",
        Subject : name,
        Body : email, text
    }).then(
      message => alert(message)
    );
}
/*-----------------------------------------------------*/
const accept = document.querySelector('.accept');
const input = document.querySelector('.input-accept');

input.addEventListener('click', function () {
    accept.classList.toggle('checked')
})