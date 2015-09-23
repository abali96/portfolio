function get_browser(){
  var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
      tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE '+(tem[1]||'');
      }
  if(M[1]==='Chrome'){
      tem=ua.match(/\bOPR\/(\d+)/)
      if(tem!=null)   {return 'Opera '+tem[1];}
      }
  M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
  return M[0];
}

function get_browser_version(){
  var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
      tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE '+(tem[1]||'');
      }
  if(M[1]==='Chrome'){
      tem=ua.match(/\bOPR\/(\d+)/)
      if(tem!=null)   {return 'Opera '+tem[1];}
      }
  M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
  return M[1];
}


function changeColors() {
    if ($(window).scrollTop()+ $('#nav').height() + 100 > $('#orgs-wrapper').offset().top - $('#nav').height())
    {
      $('#nav').find('span').removeClass();
      $('[data-cat="orgs"]').toggleClass('orgs-hovered');
    }

    else if ($(window).scrollTop() + $('#nav').height() + 100 > $('#webdev-wrapper').offset().top + $('#nav').height())
    {
      $('#nav').find('span').removeClass();
      $('[data-cat="webdev"]').toggleClass('webdev-hovered');
    }

    else if ($(window).scrollTop() + $('#nav').height() + 100 > $('#robotics-wrapper').offset().top)
    {
      $('#nav').find('span').removeClass();
      $('[data-cat="robotics"]').toggleClass('robotics-hovered');
    }
}


$(document).on('ready page:load', function() {
  var browser = get_browser();
  if (browser.indexOf("IE") > -1) {
    // window.location.assign('http://www.arjunbali.com/coming-soon');
    $(".not-ie").hide();
    console.log(browser);
  }
  else {
    $("#ie").hide();
  }
  // $('#content-wrapper').hide();
  // $('#intro-wrapper').removeClass('section');
  $('#nav').hide();
  $('.content').hide();
  $('[data-type="tech"]').show();

  $('.categories').on('click', '.button-circ', function() {
    // dynamically hide and show the sections based on which
    // is selected on the home screen
    var $this = $(this),
        wrapid = '#' + $this.find('p').attr('id') + '-wrapper';
    $('#content-wrapper').show();
    // $('#content-wrapper').children().hide();
    $('#intro-wrapper').addClass('section');
    $(wrapid).show();
    $('#contact').show();

    //dynamically scroll to that section
    $('html, body').animate({
        scrollTop: $(wrapid).offset().top - $('#nav').height()
    }, 400);
  });

  //scroll back to top when you click my name
  $('.nav-header').on('click', function() {

    $('html, body').animate({
      scrollTop: 0
    }, 400);
  });

  // scroll to contact div at bottom of screen
  // $('.contact-button').on('click', function() {
  //   $('html, body').animate({
  //     scrollTop: $('#contact').offset().top - $('#nav').height()
  //   }, 400);
  // });

  // nav bar scrolling

  $('.nav-options').on('click', 'span', function () {
    // $(window).unbind();
    var wrapid = '#' + $(this).data('cat') + '-wrapper';
    $('html, body').animate({
        scrollTop: $(wrapid).offset().top - $('#nav').height()
    }, 400);
  });

  // on scroll past 200 pixels, show the nav bar
  $(window).scroll(function() {
    changeColors();
    if ($(window).scrollTop() <= 200)
    {
      $('#nav').fadeOut();
    }
    else
    {
      $('#nav').fadeIn();
    }
  });

  $('.tabs').on('click', '.tab', function() {
    var type = $(this).data('type');
    $(this).parent().siblings('.content').hide();
    $(this).parent().siblings("[data-type='" + type + "']").eq(0).show();
    $(this).removeClass('inactive-tab, active-tab');
    $(this).siblings('.tab').removeClass('active-tab');
    $(this).addClass('active-tab');
  });

  $('.content, .webdev-gall, .mobile-gallery').on('mouseover', '.image-wrapper', function() {
    $(this).siblings().removeClass('active-image');
    $(this).addClass('active-image');
    var display = $(this).parent().siblings('.display-image');
    $(display).removeAttr('id');
    $(display).attr('id', $(this).attr('id'));

    $(this).parent().siblings('.caption').text($(this).data('text'));
  }); 

//END
});