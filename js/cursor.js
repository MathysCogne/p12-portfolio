document.addEventListener('DOMContentLoaded', function() {
   var cursor = document.getElementById('custom-cursor');
   var cursorSize = cursor.offsetWidth;
   var mouseX = 0;
   var mouseY = 0;
   var posX = 0;
   var posY = 0;
   var easing = 0.11;
 
   function updateCursor() {
     var distX = (mouseX - cursorSize / 2 - posX) * easing;
     var distY = (mouseY - cursorSize / 2 - posY) * easing;
     posX += distX;
     posY += distY;
 
     cursor.style.left = posX + 'px';
     cursor.style.top = posY + 'px';
 
     requestAnimationFrame(updateCursor);
   }
 
   document.addEventListener('mousemove', function(e) {
     mouseX = e.clientX;
     mouseY = e.clientY;
   });
 
   updateCursor();
 });


 