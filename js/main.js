$(function(){

  $.extend($.scrollTo.defaults, {
    axis: 'y',
    duration: 800,
    offset: -55
  });

  $(`#contact-modal-send`).click( () => {
    $(`#contact-modal-form`).submit();
  });

  $(`.navigation-link`).click( (event) => {
    event.preventDefault();
    let id = event.currentTarget.id;
    let target = id.replace(`link`, `section`);
    $(`body`).scrollTo(`#${target}`);
    return false;
  });


});
