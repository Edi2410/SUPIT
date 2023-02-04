window.onload = function () {
  var modal = document.getElementById("modalContactForm");
  var kontakt = document.getElementById("kontakt");

  kontakt.onclick = function () {
    modal.style.display = "block";
  }
 
  var closeBtn = document.getElementById("close_btn");
  closeBtn.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}