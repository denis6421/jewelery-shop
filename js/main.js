$(document).ready(function(){
$('.nav_btns').click(function(){
  $('html, body').animate({
  scrollTop: $("main").offset().top
}, 600);
})

$('.go_up').on('click', function(event) {
  $('html, body').animate({
    scrollTop: $("main").offset().top
  }, 600);
})
$('.hamburger_mobile').click(function(){
  $('.hidden_box').slideToggle();
})
})

$('.nav_btns button').click(function(event){
    $(this).siblings().removeClass('selected_nav_btn')
    $(this).addClass('selected_nav_btn')
})


  var container = document.querySelector(".main_wrapper");
$(document).ready(function() {
  $.getJSON("js/items.json", function(result) {
    var items = result;

    for (var i = 0; i < items.length; i++) {

      var results_output =

        '<div class="project_container" >' +
        '<div  class="project_images" data-aos="zoom-in"  data-aos-duration="500">' +
        '<img src  = ' + items[i].image + '>' + '</div>' +
         '</div>'
    container.innerHTML += results_output;
    };

  });
  $('.my_name').on('click', function(event) {
    $('html, body').animate({
      scrollTop: $("main").offset().top
    }, 600);
    $('.main_wrapper').empty();
    $.getJSON("js/items.json", function(result) {
      var items = result;

      for (var i = 0; i < items.length; i++) {
  var results_output =

          '<div class="project_container" >' +
          '<div  class="project_images" data-aos="zoom-in"  data-aos-duration="500">' +
          '<img src  = ' + items[i].image + '>' + '</div>' +
           '</div>'
           container.innerHTML += results_output;
           $('main h1').html('ALL JEWELERY')
    };

    });
  })

  $(' #rings').on('click', function(event) {
    $('.main_wrapper').empty();
    $.getJSON("js/rings.json", function(result) {
      var items = result;

      for (var i = 0; i < items.length; i++) {
  var results_output =

          '<div class="project_container" >' +
          '<div  class="project_images" data-aos="zoom-in"  data-aos-duration="500">' +
          '<img src  = ' + items[i].image + '>' + '</div>' +
           '</div>'
           container.innerHTML += results_output;
           $('main h1').html('Rings collection')
    };

    });
  if($(document).width() < 730){
      $(".hidden_box").slideToggle();
      $(".hidden_box").toggleClass('active_burger')
  }
  });


  $(' #necklace').on('click', function(event) {
    $('.main_wrapper').empty();
    $.getJSON("js/necklass.json", function(result) {
      var items = result;
      for (var i = 0; i < items.length; i++) {
  var results_output =

          '<div class="project_container" >' +
          '<div  class="project_images" data-aos="zoom-in"  data-aos-duration="500">' +
          '<img src  = ' + items[i].image + '>' + '</div>' +
          '</div>';
           container.innerHTML += results_output;
            $('main h1').html('Necklace collection')
    };
  });
    if($(document).width() < 730){
        $(".hidden_box").slideToggle();
        $(".hidden_box").toggleClass('active_burger')
    }

  });

  $(' #bracelet').on('click', function(event) {
    $('.main_wrapper').empty();
    $.getJSON("js/bracelet.json", function(result) {
      var items = result;
      for (var i = 0; i < items.length; i++) {
  var results_output =

          '<div class="project_container" >' +
          '<div  class="project_images" data-aos="zoom-in"  data-aos-duration="500">' +
          '<img src  = ' + items[i].image + '>' + '</div>'
           +'</div>'

           container.innerHTML += results_output;
             $('main h1').html('Bracelet collection')
    };
  });
  if($(document).width() < 730){
      $(".hidden_box").slideToggle();
      $(".hidden_box").toggleClass('active_burger')
  }
  });


  $(' #earings').on('click', function(event) {
    $('.main_wrapper').empty();
    $.getJSON("js/earings.json", function(result) {
      var items = result;
      for (var i = 0; i < items.length; i++) {
  var results_output =

          '<div class="project_container" >' +
          '<div  class="project_images" data-aos="zoom-in"  data-aos-duration="500">' +
          '<img src  = ' + items[i].image + '>' + '</div>' + '</div>'

           container.innerHTML += results_output;
            $('main h1').html('Earings collection')

    };

  });
    if($(document).width() < 730){
        $(".hidden_box").slideToggle();
        $(".hidden_box").toggleClass('active_burger')
    }
  });

$(".main_wrapper").on('click','.project_images ' ,function(e){
      $('.hidden_img').html('<img src = ' + e.target.src + '>');
      $('<button />', {
          "class": 'close_button',
          text: "X"}).appendTo($('.hidden_img'))

      $('.hidden_img').show();
     e.stopPropagation();
});

$(".main_wrapper").on('click','.project_images ' , function(e){
    e.stopPropagation();
});

$(document).click(function(){
    $('.hidden_img').hide();
});
/////////////making sticky nav///////////////
  var yourNavigation = $("nav");
  var yourNavigation2 = $(".hidden_box");
  stickyDiv = "sticky";
  stickyDiv2 = "sticky2";
  yourHeader = $('header').height();

  $(window).scroll(function() {
    if ($(this).scrollTop() > yourHeader) {
      yourNavigation.addClass(stickyDiv);
      yourNavigation.addClass(stickyDiv2);
    } else {
      yourNavigation.removeClass(stickyDiv);
      yourNavigation.removeClass(stickyDiv2);
    }
  });
});
AOS.init({
  duration: 1200,
})
