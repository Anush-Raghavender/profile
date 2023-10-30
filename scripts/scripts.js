//Enable Learn More Button After 1.5 Seconds
setTimeout(() => {
  document.getElementById("learnMoreButton").disabled = false;
}, 1500);

//Calculate Current Year Dynamically
document.getElementById("year").innerHTML = new Date().getFullYear();
