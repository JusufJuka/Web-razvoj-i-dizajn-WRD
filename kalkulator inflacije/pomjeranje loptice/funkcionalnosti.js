var loptica = document.getElementById("lopta");

function Gore() {
  var PozicijaTopString = window.getComputedStyle(lopta).top;
  var PozicijaTopNumber = parseInt(PozicijaTopString);
  loptica.style.top = PozicijaTopNumber - 20 + "px";
}

function Dole() {
  var PozicijaTop = loptica.offsetTop;
  loptica.style.top = PozicijaTop + 20 + "px";
}
function Lijevo() {
  var PozicijaLijevo = loptica.offsetLeft;
  loptica.style.left = PozicijaLijevo - 20 + "px";
}

function Desno() {
  var PozicijaLijevo = loptica.offsetLeft;
  loptica.style.left = PozicijaLijevo + 20 + "px";
}
