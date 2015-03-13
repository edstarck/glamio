//modal popup
$(document).ready(function() {
  $('.b-basket__cart').magnificPopup({
    type: 'inline',
    preloader: true,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });
});
//scrollTotop
$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});
$(function() {
 $(".Go_Top").scrollToTop();
});

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

  var sl = $(".b-slider");
  sl.owlCarousel({
    items : 1,
    autoHeight : true,
    autoPlay : true,
    itemsTablet: [768, 1],
    itemsTablet: [1024, 1],
    stopOnHover: true
  });
  //open brand footer
  $(".b-footer-menu__list__iteam_links").click(function() {
    $('.hidden_footer__blocks').slideToggle('slow', 'linear');
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
    if($('.b-advice__list__iteam_hidden').css('display')=='none')
  {
    $(this).html("<i class='fa fa-caret-up'></i>Закрыть");
  }
  else{
    $(this).html("<i class='fa fa-caret-down'></i>Открыть");
  }
    $('.b-advice__list__iteam_hidden').slideToggle('slow', 'linear');

  });
  //полоса прокрути
  $('.b-brends__names').jScrollPane();
  $('.jspDrag').css({
    'height': '24px'
  });

  //delete focus on button input a
  $("button, a, select, .b-brends__names").focus(function(){
  this.blur();
  });

});
 //preloader
$(window).load(function() {
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});
//placeholder
function elementSupportsAttribute(element, attribute) {
  var test = document.createElement(element);
  return (attribute in test);
};
if (!elementSupportsAttribute('textarea', 'placeholder')) {
  // Если браузер не поддерживает атрибут, то выполняется код jQuery
  $("#example-three")
    .data("originalText", $("#example-three").text())
    .css("color", "#999")
    .focus(function() {
    var $el = $(this);
    if (this.value == $el.data("originalText")) {
      this.value = "";
    }
  })
  .blur(function() {
    if (this.value == "") {
      this.value = $(this).data("originalText");
    }
  });
} else {
  // Если же браузер поддерживает HTML5, то просто используем эту возможность
  $("#example-three")
    .attr("placeholder", $("#example-three").text())
    .text("");
}
