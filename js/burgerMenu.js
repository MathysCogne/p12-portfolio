document.getElementById("burger-button").addEventListener("click", function() {
   var menu = document.getElementById("burger-menu");
   menu.style.display = "block";
});
 
document.getElementById("close-button").addEventListener("click", function() {
   var menu = document.getElementById("burger-menu");
   menu.style.display = "none";
});