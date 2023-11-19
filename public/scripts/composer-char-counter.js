$(document).ready(function() {
  $("#tweeter-text").on("input", function() {
    const $input = $(this);
    const $text = $input.val();
    const remainingChar = 140 - $text.length;
    const $counterElem = $input.parent().find(".counter");
    $counterElem.text(remainingChar);
    $counterElem.css("color", "#545149");
    
    if (remainingChar < 0) {
      $counterElem.css("color", "red");
    }
  });
});