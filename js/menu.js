let btnMenu = document.getElementById('btn-menu');
let hNav = document.getElementById('header-nav');
btnMenu.addEventListener('click', function(){
  hNav.classList.toggle('mostrar');
});