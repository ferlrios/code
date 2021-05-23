$(document).ready(function () {
  $("#play").on("click", function () {
    $("#modal-video").show();
  });

  $(".btn-close").on("click", function () {
    $("#modal-video").hide();
  });
});

$("#modal-video").hide();
