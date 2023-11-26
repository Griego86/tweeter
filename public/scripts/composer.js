$(document).ready(function() {
  $("#compose-tweet").hide();
  
  $("#compose").on("click", function(event) {
    event.preventDefault;
    
    $("#compose-tweet").toggle("fast"); 
    $("#tweet-text").focus();
  });
  
  $("#scroll-button").hide();
  $(window).on("scroll", function(event) {
    event.preventDefault;
    
    let $scroll = $(window).scrollTop();
    if ($scroll === 0) {
      return $("#scroll-button").hide();
    }
    $("#scroll-button").show();
  });

  $("#scroll-button").on("click", function(event) {
    event.preventDefault;
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return $("#compose-tweet").show().find("#tweet-text").focus();
  });
});