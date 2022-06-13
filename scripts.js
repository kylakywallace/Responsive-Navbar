if ($(window).width() < 450) {
    $('.logo').append('<span class="fa fa-navicon menu-toggle"></span>');
    $('.menu-toggle').click(function() {
      $('ul.main-nav').toggleClass('is-showing').toggleClass('is-hidden');
    });
  }
  else {
    $('ul.main-nav').addClass('is-showing').removeClass('is-hidden');
    $('span.menu-toggle').hide();
  }
  // On resize of window
  $(window).resize(function() {
    var spans = $('.logo span').length;
    if ($(window).width() < 450) {
      if (spans < 1) {
          $('.logo').append('<span class="fa fa-navicon menu-toggle"></span>');
          $('ul.main-nav').removeClass('is-showing');
          $('ul.main-nav').addClass('is-hiding');
      }
        $('.menu-toggle').click(function() {
      $('span.menu-toggle').show();
      $('ul.main-nav').removeClass('is-showing');
      $('ul.main-nav').addClass('is-hidden');
      $('.menu-toggle').click(function() {
          $('ul.main-nav').toggleClass('is-showing');
        });
  
      });
    }
    else {
      if (spans >= 1) {
        $('.logo').remove('span.fa');
      }
      $('span.menu-toggle').hide();
      $('ul.main-nav').addClass('is-showing');
    }
  });