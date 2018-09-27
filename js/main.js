$(function(){

  $.extend($.scrollTo.defaults, {
    axis: 'y',
    duration: 800,
    offset: -55
  });

  $("#home-section").hide().fadeIn(2500);
  $(`#home-profile`).hide().fadeIn(5000);

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
