jQuery(document).ready(function(){
  jQuery(".closebtn").click(function(){
    jQuery(".top-slider").css("display","none")
  });

// Fixed header.
$(window).on('scroll', function() {
  if ($(window).scrollTop() > $('.top-header').offset().top && !($('.main-menu').hasClass('sticky-header'))) {
    $('.main-menu').addClass('sticky-header');
  } else if (0 === $(window).scrollTop()) {
    $('.main-menu').removeClass('sticky-header');
  }
});

// $(".btn-default").on("click", function() {
// $(".secondary-menu").toggleClass("active");
// });
// $(".close").on("click", function() {
// $(".secondary-menu").removeClass("active");
// });

$('.autoplay').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  arrows:true,
  autoplaySpeed: 4000,
  prevArrow: '<span data-role="none" class="slick-prev" tabindex="0"><i class="fas fa-angle-left" aria-hidden="true"></i></span>',
  nextArrow : '<span data-role="none" class="slick-next" tabindex="0"><i class="fas fa-angle-right" aria-hidden="true"></i></span>'
});

$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade:true,
  dots:true,
  autoplaySpeed: 4000,
  prevArrow: '<span data-role="none" class="slick-prev" tabindex="0"><i class="fas fa-angle-left" aria-hidden="true"></i></span>',
  nextArrow : '<span data-role="none" class="slick-next" tabindex="0"><i class="fas fa-angle-right" aria-hidden="true"></i></span>'
});


// Single product gallery
$('.single-main-thumb').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:false,
  arrows: false,
  fade: true,
  asNavFor: '.pager-thumbnail'

});



// Product gallery
$('.pager-thumbnail').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.single-main-thumb',
  dots: false,
  focusOnSelect: true,
  arrows:false,
});

// related-product slider

$('.multiple-items').slick({
 infinite: true,
 slidesToShow: 3,
 slidesToScroll: 3,
 autoplay: true,
 arrows:true,
 prevArrow: '<span data-role="none" class="slick-prev" tabindex="0"><i class="fas fa-angle-left" aria-hidden="true"></i></span>',
 nextArrow : '<span data-role="none" class="slick-next" tabindex="0"><i class="fas fa-angle-right" aria-hidden="true"></i></span>'
});



/*product-img-popup*/
jQuery(document).ready(function() {
  $.fn.lightspeedBox();
});

$.fn.lightspeedBox({
  showImageTitle: true,
  showImageCount: true,
  showDownloadButton: true,
  showAutoPlayButton: true,
  autoPlayback: false,
  playbackTiming: 3500,
  zIndex: 30,
  locale: {
    nextButton: 'Next image',
    prevButton: 'Previous image',
    closeButton: 'Close',
    downloadButton: 'Download image',
    noImageFound: 'Sorry, no image found.',
    autoplayButton: 'Enable autoplay'
  }
});

$('.minus,.add').on('click', function() {
  var $qty = $(this).closest('p').find('.qty'),
  currentVal = parseInt($qty.val()),
  isAdd = $(this).hasClass('add');
  !isNaN(currentVal) && $qty.val(
    isAdd ? ++currentVal : (currentVal > 0 ? --currentVal : currentVal)
    );
});


$('.cart-items .remove').click( function () {
  jQuery(this).parents(".cart-items-list").remove();
});


// mob-menu
jQuery("#mobile-trigger").click(function(){
  jQuery(".sidenav").toggleClass("active")
});

jQuery(".cancel").on("click", function() {
  jQuery(".sidenav").removeClass("active");
});

jQuery(".mobile-search").click(function(){
  jQuery(".col-1").toggleClass("active");
});

jQuery(window).scroll(function() {    
  var scroll = jQuery(window).scrollTop();

  if (scroll >= 10) {
    jQuery(".col-1").removeClass("active");
  }
});

        // Implement go to top.
        var $scroll_obj = $('#btn-scrollup');
        $(window).on('scroll', function() {
          if ($(this).scrollTop() > 100) {
            $scroll_obj.fadeIn();
          } else {
            $scroll_obj.fadeOut();
          }
        });

        $scroll_obj.on('click', function() {
          $('html, body').animate({
            scrollTop: 0
          }, 600);
          return false;
        });



    // edited on april 8 by anjit

    $('#navbarSupportedContent .dropdown').mouseover( function(e){
      $(this).addClass('show');
      $(this).children('ul').addClass('show');
    });

    // $('#navbarDropdown').on("click", function(e){
    //   $(this).parent().addClass('show');
    //   $(this).next('ul').addClass('show');
    //   console.log($(this).parent());
    //   console.log($(this).next('ul'));
    //   // e.default();
    // });

    $('#navbarSupportedContent .dropdown').mouseleave( function(e){
      $(this).removeClass('show');
      $(this).children('ul').removeClass('show');
      $('#navbarSupportedContent .dropdown-submenu.dropright ul').hide();
    });

    
    // $('#navbarSupportedContent .dropdown-submenu.dropright a.test').mouseover( function(e){
    //   $(this).next('ul').show();
    //   e.stopPropagation();
    //   e.preventDefault();
    // });

    // $('#navbarSupportedContent .dropdown-submenu.dropright').mouseleave( function(e){
    //   $(this).children('ul').hide();
    //   e.stopPropagation();
    //   e.preventDefault();
    // });
    


  });

