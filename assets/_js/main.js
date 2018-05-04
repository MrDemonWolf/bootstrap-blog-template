// Fixs the menu so when link is clicked it would close the menu.
$(function () {

  $('menu')
    .on('shown.bs.collapse', function () {
      $('#navbar-hamburger').addClass('hidden');
      $('#navbar-close').removeClass('hidden');
    })
    .on('hidden.bs.collapse', function () {
      $('#navbar-hamburger').removeClass('hidden');
      $('#navbar-close').addClass('hidden');
    });

});

$(document).on('click', '.navbar-collapse.in', function (e) {
  if ($(e.target).is('a') && $(e.target).attr('class') != 'navbar-toggle') {
    $(this).collapse('hide');
  }
});
$(function () {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
});

// Navbar Effect
$(document).ready(function () {
  var scroll_start = -100;
  var startchange = $('#scroll_navbar');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $(".navbar").addClass('navbar-scroll');
        $(".navbar").removeClass('navbar-dark');
        $(".navbar").addClass('navbar-light');
        $('.navbar-desktop img').attr('src',  '/assets/images/logos/logo_text_dark.png');
      } else {
        $(".navbar").removeClass('navbar-scroll');
        $(".navbar").removeClass('navbar-light');
        $(".navbar").addClass('navbar-dark');
        $('.navbar-desktop img').attr('src',  '/assets/images/logos/logo_text_light.png');
      }
    });
  }
});
