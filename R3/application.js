$(document).ready(function () {
  /* Guardo el objeto DOM del video en una variable para manipularlo luego */
  let video = $("#video")[0];
  /* Cuando se clickea el botón de play, se muestra el div modal que contiene el video y le da play*/
  $("#play").on("click", function () {
    $("#modal-video").show();
    video.play();
  });
  /* Cuando se clickea en la cruz del modal, vuelve a estar oculto. El video se pausa y vuelve al segundo 0 */
  $(".btn-close").on("click", function () {
    $("#modal-video").hide();
    video.pause();
    video.currentTime = 0;
    video.load();
  });
});

/* Por defecto, al modal lo ocultamos */
$("#modal-video").hide();
