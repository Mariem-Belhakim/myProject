let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navlist');
 

menu.onclick =() => {
   menu.classList.toggle('bx-bx');
   navbar.classList.toggle('active');

};
