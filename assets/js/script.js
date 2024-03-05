$('contenWrapper').on("click", "envCorreo", function() {
    notification('presiona para enviar correo.', 2000)
  })
  
  function notification(s, time) {
    $("<p>" + s + "</p>").appendTo('#notification-box').fadeTo(time, 1, function() {
      $(this).fadeTo(1000, 0, function() {
        $(this).remove()
      });
    });
  }
function cambiar_ingredientes(){
  $("#INGREDIENTES").toggle.Class("text-danger")
}
$("#INGREDIENTES").on("dblclick", cambiar_ingredientes)