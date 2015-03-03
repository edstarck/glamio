$(document).ready(function() {
  var owl = $(".b-slider");
  owl.owlCarousel({
    items : 1,
    autoHeight: true,
    pagination: true,
    autoPlay: true
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
});
 //preloader
$(window).load(function() {
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});
