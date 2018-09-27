$(function(){

  $("#home-section").hide().fadeIn(2500);
  $(`#home-profile`).hide().fadeIn(5000);

  $(`#story-panel`).hide().show( "slide" , { direction: "right" }, 2000 );

  let delay = 0;
  $(`.technology-item > i`).hide().each( (index, element) => {
    $(element).slideUp(delay);
    delay += 100;
  } );

});
