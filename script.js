// window.onload = function() {
  // document.getElementById("#hamburger").onclick = function() {clickFunction()};
  //
  // function clickFunction() {
  //   document.getElementsByClassName('hamburgerButton').classList.toggle('close');
  // }

// }

// function classToggle() {
//   this.classList.toggle('close');
// }
window.onload = function() {
  document.querySelector("#hamburger").addEventListener('click', function(){
    this.classList.toggle('close');
    document.querySelector("#hamburgerMenu").classList.toggle('close');

  });
  document.querySelector("#search").addEventListener('click', function(){
    document.querySelector("#searchField").classList.toggle('open');
  });
}
