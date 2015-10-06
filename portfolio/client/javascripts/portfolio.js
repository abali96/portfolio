// http://stackoverflow.com/questions/5916900/how-can-you-detect-the-version-of-a-browser
function get_browser(){
  var ua = navigator.userAgent,tem,M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE '+ (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem=ua.match(/\bOPR\/(\d+)/);
    if (tem !== null) {
      return 'Opera '+ tem[1];
    }
  }
  M = M[2] ? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) !== null) {
    M.splice(1,1,tem[1]);
  }
  return M;
}

function changeColors() {
    if ($(window).scrollTop()+ $('#nav').height() + 100 > $('#orgs-wrapper').offset().top - $('#nav').height()) {
      $('#nav').find('span').removeClass();
      $('[data-cat="orgs"]').toggleClass('orgs-hovered');
    } else if ($(window).scrollTop() + $('#nav').height() + 100 > $('#webdev-wrapper').offset().top + $('#nav').height()) {
      $('#nav').find('span').removeClass();
      $('[data-cat="webdev"]').toggleClass('webdev-hovered');
    } else if ($(window).scrollTop() + $('#nav').height() + 100 > $('#robotics-wrapper').offset().top) {
      $('#nav').find('span').removeClass();
      $('[data-cat="robotics"]').toggleClass('robotics-hovered');
    }
}


var scroll_to_anchor = setInterval( function () {
    if (window.location.hash === "") {
        clearInterval(scroll_to_anchor);
    }
    if (window.location.hash !== "") {
        if ($('[name=' + window.location.hash.slice(1) + ']').size()) {
            var hash = window.location.hash.slice(1);
            try {
                $('html, body').animate({
                    scrollTop: $('[name=' + window.location.hash.slice(1) + ']').offset().top
                }, 0);
                clearInterval(scroll_to_anchor);
                changeColors();
                console.log("made it");
            } catch(err) {
            }
        }
    }
}, 50);

$(document).on('ready page:load', function() {
  var browser = get_browser();
  if (browser[0].toLowerCase() == "ie" && browser[1] <= 8) {
    window.location.assign('http://www.arjunbali.com/coming-soon');
    $(".not-ie").hide();
    $("#ie").show();
    console.log(browser);
  }
  else {
    $("#ie").hide();
  }

  $('#nav').hide();
  $('.content').hide();
  $('[data-type="tech"]').show();

  //scroll back to top when you click my name
  $('.nav-header').on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
  });

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
    if ($(window).scrollTop() <= 200) {
      $('#nav').fadeOut();
    } else {
      $('#nav').fadeIn();
    }
  });

  $('.content, .webdev-gall, .mobile-gallery').on('mouseover', '.image-wrapper', function() {
    $(this).siblings().removeClass('active-image');
    $(this).addClass('active-image');
    var display = $(this).parent().siblings('.display-image');
    $(display).removeAttr('id');
    $(display).attr('id', $(this).attr('id'));

    $(this).parent().siblings('.caption').text($(this).data('text'));
  });
});