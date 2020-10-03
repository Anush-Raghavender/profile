//Learn-More-Button Toggle
setTimeout(() => { document.getElementById("Learn-More-Button").disabled = false; }, 2000);

function contactme() {
  alert("Phone-Number : +91-7358440894");
}

document.getElementById("About-Link").onmousedown = function () {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementsByClassName("carousel")[0].style.display = "none";
  document.getElementById("skills").style.display = "none";
};

document.getElementById("Portfolio-Link").onmousedown = function () {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementsByClassName("carousel")[0].style.display = "block";
  document.getElementById("skills").style.display = "none";
};

document.getElementById("Skills-Link").onmousedown = function () {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementsByClassName("carousel")[0].style.display = "none";
  document.getElementById("skills").style.display = "block";
};
