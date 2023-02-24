//opens menu through scribble
document.getElementById('scribbleMenu').onclick = function () {
  document.getElementsByClassName('menu')[0].classList.toggle("closed");
  document.getElementsByClassName('menu-scribble-wrapper')[0].classList.toggle("hide");
  document.getElementById('open-close-menu').classList.toggle("info-bar-closed");
}

//closes menu through button close sketch
document.getElementById('close-menu-button').onclick = function () {
  document.getElementsByClassName('menu')[0].classList.toggle("closed");
  document.getElementsByClassName('menu-scribble-wrapper')[0].classList.toggle("hide");
  document.getElementById('open-close-menu').classList.toggle("info-bar-closed");
}

//closes menu through menu
document.getElementById('menu-wrapper').onclick = function () {
  document.getElementsByClassName('menu')[0].classList.toggle("closed");
  document.getElementsByClassName('menu-scribble-wrapper')[0].classList.toggle("hide");
  document.getElementById('open-close-menu').classList.toggle("info-bar-closed");
}



