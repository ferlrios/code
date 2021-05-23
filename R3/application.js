/* Cuando carga la página se ejecuta lo de adentro */
$(document).ready(function () {
  /* Cuando se clickea el botón de play, se muestra el div modal que contiene el video */
  $("#play").on("click", function () {
    $("#modal-video").show();
  });
  /* Cuando se clickea en la cruz del modal, vuelve a estar oculto */
  $(".btn-close").on("click", function () {
    $("#modal-video").hide();
  });
});

/* Por defecto, al modal lo ocultamos */
$("#modal-video").hide();
