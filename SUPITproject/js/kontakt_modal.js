window.onload = function () {
  var modal = document.getElementById("myModal");
  var kontakt = document.getElementById("kontakt");
  if (!kontakt) {
    console.error("kontakt was not found");
  } else {
    kontakt.onclick = function () {
      modal.style.display = "block";
    }
  }

  var closeBtn = document.getElementById("close_btn");
  if (!closeBtn) {
    console.error("close_btn was not found");
  } else {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    }
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}