//Magnify
$(document).ready(function() {
  $('.zoom').magnify();
});

//Countdown
$('#reloj1').countdown('2024/03/20', function(event) {
  $(this).html(event.strftime('%D días %H horas %M minutos'));
});

$('#reloj2').countdown('2024/03/26', function(event) {
  $(this).html(event.strftime('%D días %H horas %M minutos'));
});

$('#reloj3').countdown('2024/03/29', function(event) {
  $(this).html(event.strftime('%D días %H horas %M minutos'));
});

function toggleContent() {
  // Obtiene el elemento div que contiene los párrafos
  var content = document.getElementById("toggleContent");
  
  // Comprueba si el contenido está visible y alterna su estado
  if (content.style.display === "none") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
}