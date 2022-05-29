
$(document).ready(function(){
  $('.open-overlay').click(function() {
    var overlay_navigation = $('.overlay-navigation'),
      nav_item_1 = $('nav li:nth-of-type(1)'),
      nav_item_2 = $('nav li:nth-of-type(2)'),
      nav_item_3 = $('nav li:nth-of-type(3)'),
      nav_item_4 = $('nav li:nth-of-type(4)'),
      top_bar = $('.bar-top'),
      middle_bar = $('.bar-middle'),
      bottom_bar = $('.bar-bottom');
  
    overlay_navigation.toggleClass('overlay-active');
    if (overlay_navigation.hasClass('overlay-active')) {
  
      top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
      middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
      bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
      overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
      nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
      nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
      nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
      nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
      nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
    } else {
      top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
      middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
      bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
      overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
      nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
      nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
      nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
      nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
      nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
    }
  })

  $("body").click(function(event){
    setTimeout(sound(), 90000);
  });

})

function sound(){
  var audio = new Audio('./assets/sound/WhatsApp Sound Original Message.mp3');
  audio.play();
}

function hoverModeleDefault(){
  document.getElementById('design-img-block').style.backgroundImage='url(/assets/img/modele_tondeuse.png)';
}

function hoverModeleF(){
  document.getElementById('design-img-block').style.backgroundImage='url(/assets/img/modele_f.png)';
}

function hoverModeleFlipper(){
  document.getElementById('design-img-block').style.backgroundImage='url(/assets/img/modele_flipper.png)';
}


// Cookie Law 

function setCookie(cookieName, cookieValue, numdaystilexpireasinteger) {
  var d = new Date();
  d.setTime(d.getTime() + (numdaystilexpireasinteger*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cookieName+ "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
  var name = cookieName+ "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function showLaw() {
  var x = getCookie("cookieName");  //call cookie to get its value
  if (x != "") {
      $("#messagecookies").remove();
  } else {
          setCookie("cookieName", "cookieValue", 2);
      }
  }

// Show cookies pop up
var message = 0; 
function showCookiesBock(){
  if (message == 0) {
        document.getElementById('messagecookies').classList.remove('d-none');
        message = 1;
  }
}

function closecookieMessage(){
  document.getElementById('messagecookies').classList.add('d-none')
}

$('.carousel').carousel({
  interval: false,
});