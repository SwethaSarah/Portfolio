//Animating the components in website
const Animation = () => {
  const burger=document.querySelector('.burger');
  const nav=document.querySelector('.nav-links');
  const contact=document.querySelector('.contact-heading');
  const hire=document.querySelector('.hire');
  const mail=document.querySelector('.mail');
  const insta=document.querySelector('.insta');
  //Animation for contact section
  contact.addEventListener('click',()=>{
    contact.classList.toggle('animate');
    hire.classList.toggle('h-active');
    mail.classList.toggle('m-active');
    insta.classList.toggle('i-active');
  });
  //Animation for navigation bar
  burger.addEventListener('click',() => {
      nav.classList.toggle('active');
      burger.classList.toggle('animateBar');
  });

}

Animation();
