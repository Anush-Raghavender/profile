//Enable Learn More Button After 1.5 Seconds
setTimeout(() => {
  document.getElementById("learnMoreButton").disabled = false;
}, 1500);

//Calculate Current Year Dynamically
document.getElementById("year").innerHTML = new Date().getFullYear();

//Display About Content
document.getElementById("About-Link").onmousedown = function () {
  document.getElementById("introduction").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("skills").style.display = "none";
};

//Display Projects Content
document.getElementById("Projects-Link").onmousedown = function () {
  document.getElementById("introduction").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("projects").style.display = "block";
  document.getElementById("skills").style.display = "none";
};

//Display Skills Content
document.getElementById("Skills-Link").onmousedown = function () {
  document.getElementById("introduction").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("skills").style.display = "block";
};
