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
  });
}
// $(document).ready(function(){
//   $("#hamburger").click(function(){
//     $(".hamburgerButton").toggleClass("close");
//   });
// });
