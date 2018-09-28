$(function(){

    $.extend($.scrollTo.defaults, {
      axis: 'y',
      duration: 800,
      offset: -55
    });

    let inViewport = ($el) => {
      let elH = $el.outerHeight(),
          H = $(window).height(),
          r = $el[0].getBoundingClientRect(),
          t=r.top,
          b=r.bottom;
      return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
    };

    $(window).on("scroll resize", function(){
      if (inViewport( $('#home-section') ) > 0) {
        $("#home-profile").fadeIn(1000);
      } else {
        $("#home-profile").hide();
      }
    });

    $(window).on("scroll resize", function(){
      if (inViewport( $('#story-section') ) > 0) {
        $("#story-panel").show( "slide" , { direction: "right" }, 1500 );
      } else {
        $("#story-panel").hide();
      }
    });

    $(window).on("scroll resize", function(){
      if (inViewport( $('#technology-section') ) > 0) {
        let delay = 0;
        $(`.technology-item > i`).each( (index, element) => {
          $(element).slideDown(delay);
          delay += 100;
        } );
      } else {
        $(`.technology-item > i`).hide();
      }
    });


    $(`.navigation-link`).click( (event) => {
      event.preventDefault();
      let id = event.currentTarget.id;
      let target = id.replace(`link`, `section`);
      $(`body`).scrollTo(`#${target}`);
      if (target === "contact-section") {
        setTimeout( function(){
          $(`#contact-section > button`).click();
        }, 1000 );
      }
      return false;
    });

});