$(document).ready(function() {
//carousel brand
  var owl = $(".b-carousel");
  owl.owlCarousel({
    items : 5,
    autoHeight : true,
    autoPlay : true,
    stopOnHover: true,
    itemsTablet: [768, 3]
  });
  owl.on("mousewheel", ".owl-wrapper", function (e) {
    if (e.deltaY > 0) {
      owl.trigger("owl.prev");
    } else {
      owl.trigger("owl.next");
    }
    e.preventDefault();
  });
  $(".next_button").click(function() {
    owl.trigger("owl.next");
  });
  $(".prev_button").click(function() {
    owl.trigger("owl.prev");
  });

  //open brand footer
  $(".b-footer-menu__list__iteam_links").click(function() {
    $('.hidden_footer__blocks').slideToggle('slow', 'linear');
  });

  //top slider
  window.myFlux = new flux.slider('.b-slider-container_first', {
    autoplay: true,
    pagination: false,
    delay: 5000,
    duration: 1200,
    transitions: Array ('warp', 'blocks')
    });
  window.myFlux = new flux.slider('.b-slider-container_second', {
    autoplay: true,
    pagination: false,
    delay: 3000,
    duration: 400,
    transitions: Array ('tiles3d', 'swipe')
  });
  //dropdownMenu
  $('.b-menu__list__iteam__links, .b-advice__list__toggle').on('click', function(e){
    e.preventDefault();
  });
  $('.b-menu__list__iteam').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('.b-menu__list__iteam_hidden',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('.b-menu__list__iteam_hidden',this).stop(true,true).slideUp(200);
    }, this), 100));
  });
  //open advice
  $(".b-advice__list__toggle").click(function() {
    $(this).html("<i class='fa fa-caret-up'></i>Закрыть");
    $('.b-advice__list__iteam_hidden')
    .slideToggle('slow', 'linear');

  });
});

//delete focus on button input a
$(document).ready(function(){
  $("button, a").focus(function(){
  this.blur();
});
});

 //preloader
$(window).load(function() {
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});



