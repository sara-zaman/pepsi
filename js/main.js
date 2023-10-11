$(document).ready(function () {
  $("#blue").click(function () {
    $(".bottle").hide();
    $("#blue-bottle").show();
    $(".section").css("background-color", "#0062be");
  });

  $("#red").click(function () {
    $(".bottle").hide();
    $("#red-bottle").show();
    $(".section").css("background-color", "#e60c2c");
  });

  $("#black").click(function () {
    $(".bottle").hide();
    $("#black-bottle").show();
    $(".section").css("background-color", "black");
  });
});
