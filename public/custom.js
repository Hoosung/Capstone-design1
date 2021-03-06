$(function(){
  /* Slick Slider - Welcome */
  $('.slideshow').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false
  });

  /* TypeIt - Welcome */
  $('#typing').typeIt({
    strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."],
    speed: 100,
    autoStart: true,
    breakLines: false,
  });
  
  /* Wow Scroll Reveal Animation */
  wow = new WOW({
    boxClass: 'wow',
    offset: 150,
    mobile: true
  })
  wow.init()
})


$(function(){
  /* Header Scroll Change */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .btn-top').addClass('active')
    }
    else {
      $('header, .btn-top').removeClass('active')  
    }
  })

  /* Video Modal */
  $('.open-modal').click(function(){
    $('.video-modal').fadeIn()
    $('body').addClass('active')
  })
  $('.close-modal').click(function(){
    $('.video-modal').fadeOut()
    $('body').removeClass('active')
  })
  
  /* Header Trigger */
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a, section').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })

})