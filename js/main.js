$(function(){

  function inViewport($el) {
      var elH = $el.outerHeight(),
          H   = $(window).height(),
          r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
      return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
  }

  $(window).on("scroll resize", function(){
    if (inViewport( $('#home-section') ) > 0) {
      $("#home-profile").fadeIn(2000);
    } else {
      $("#home-profile").hide();
    }
  });

  $(window).on("scroll resize", function(){
    if (inViewport( $('#story-section') ) > 0) {
      $("#story-panel").show( "slide" , { direction: "right" }, 1000 );
    } else {
      $("#story-panel").hide();
    }
  });

  $.extend($.scrollTo.defaults, {
    axis: 'y',
    duration: 800,
    offset: -55
  });

  $("#home-section").hide().fadeIn(2500);
  $(`#home-profile`).hide().fadeIn(5000);

  $(`#story-panel`).hide().show( "slide" , { direction: "right" }, 2000 );

  $(`.navigation-link`).click( (event) => {
    event.preventDefault();
    let id = event.currentTarget.id;
    let target = id.replace(`link`, `section`);
    $(`body`).scrollTo(`#${target}`);
    return false;
  });

  $(`#contact-modal-send`).click( () => {
    $(`#contact-modal-form`).submit();
  });

});
