//share jquery plugin
var share = function () {
  $('#share-icon').click(function () {
    $('#share').toggle("slow")
  });

 
  $("#share").jsSocials({
    url: "https://christine-n-mwaura.github.io/Github-project",
    showLabel: false,
    showCount: false,
    shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
});
};

var pizzaShare = function () {
  $('#pizzashare-icon').click(function () {
    $('#pizza-share').toggle("slow")
  });

 
  $("#pizza-share").jsSocials({
    url: "https://christine-n-mwaura.github.io/Pizza-Eat/",
    showLabel: false,
    showCount: false,
    shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
});
};

var delaniShare = function () {
  $('#delanishare-icon').click(function () {
    $('#delani-share').toggle("slow")
  });

 
  $("#delani-share").jsSocials({
    url: "https://christine-n-mwaura.github.io/Delani-studio-project/",
    showLabel: false,
    showCount: false,
    shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
});
};
var spaceShare = function () {
  $('#spaceshare-icon').click(function () {
    $('#space-share').toggle("slow")
  });

 
  $("#space-share").jsSocials({
    url: "https://realestatesapi.herokuapp.com/",
    showLabel: false,
    showCount: false,
    shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
});
};
var cookitShare = function () {
  $('#cookitshare-icon').click(function () {
    $('#cookit-share').toggle("slow")
  });

 
  $("#cookit-share").jsSocials({
    url: "https://owiti-charles.github.io/Cook-It/",
    showLabel: false,
    showCount: false,
    shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
});
};

//calculations for likes
var like = function (){
  $('#like').click(function () {
    $('#heart-icon').css( "color", "red");
    var currentValue = parseInt($("#likes").text(),10);
    var newValue = currentValue + 1;
    $("#likes").text(newValue);
  });
};
var pizzalike = function (){
  $('#pizza-like').click(function () {
    $('#pizzaheart-icon').css( "color", "red");
    var currentValue = parseInt($("#pizzalikes").text(),10);
    var newValue = currentValue + 1;
    $("#pizzalikes").text(newValue);
  });
};
var delanilike = function (){
  $('#delanilike').click(function () {
    $('#delaniheart-icon').css( "color", "red");
    var currentValue = parseInt($("#delanilikes").text(),10);
    var newValue = currentValue + 1;
    $("#delanilikes").text(newValue);
  });
};
var spacelike = function (){
  $('#spacelike').click(function () {
    $('#spaceheart-icon').css( "color", "red");
    var currentValue = parseInt($("#spacelikes").text(),10);
    var newValue = currentValue + 1;
    $("#spacelikes").text(newValue);
  });
};
var cookitlike = function (){
  $('#cookitlike').click(function () {
    $('#cookitheart-icon').css( "color", "red");
    var currentValue = parseInt($("#cookitlikes").text(),10);
    var newValue = currentValue + 1;
    $("#cookitlikes").text(newValue);
  });
};






var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

var fullHeight = function () {

  if (!isMobile.any()) {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  }

};


// Reflect scrolling in navigation
var navActive = function (section) {

  var $el = $('#navbar > ul');
  $el.find('li').removeClass('active');
  $el.each(function () {
    $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
  });

};

var navigationSection = function () {

  var $section = $('section[data-section]');

  $section.waypoint(function (direction) {

    if (direction === 'down') {
      navActive($(this.element).data('section'));
    }
  }, {
    offset: '150px'
  });

  $section.waypoint(function (direction) {
    if (direction === 'up') {
      navActive($(this.element).data('section'));
    }
  }, {
    offset: function () { return -$(this.element).height() + 155; }
  });

};

var comingSoon = function () {

  $('#mob-dev').on('click', function (event){
    $('.work').removeClass('web-dev');
    $('.work').addClass('mob-dev');
    $('.mob-dev').css( "visibility", "visible");
  });
}
var burgerMenu = function () {

  $('.js-nav-toggle').on('click', function (event) {
    event.preventDefault();
    var $this = $(this);

    if ($('body').hasClass('offcanvas')) {
      $this.removeClass('active');
      $('body').removeClass('offcanvas');
    } else {
      $this.addClass('active');
      $('body').addClass('offcanvas');
    }
  });



};
// Click outside of offcanvass
var mobileMenuOutsideClick = function () {

  $(document).click(function (e) {
    var container = $("#aside, .js-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {

      if ($('body').hasClass('offcanvas')) {

        $('body').removeClass('offcanvas');
        $('.js-nav-toggle').removeClass('active');

      }

    }
  });

  $(window).scroll(function () {
    if ($('body').hasClass('offcanvas')) {

      $('body').removeClass('offcanvas');
      $('.js-nav-toggle').removeClass('active');

    }
  });

};

var clickMenu = function () {

  $('#navbar a:not([class="external"])').click(function (event) {
    var section = $(this).data('nav-section'),
      navbar = $('#navbar');

    if ($('[data-section="' + section + '"]').length) {
      $('html, body').animate({
        scrollTop: $('[data-section="' + section + '"]').offset().top - 55
      }, 500);
    }

    if (navbar.is(':visible')) {
      navbar.removeClass('in');
      navbar.attr('aria-expanded', 'false');
      $('.js-nav-toggle').removeClass('active');
    }

    event.preventDefault();
    return false;
  });


};



var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

$(document).ready(function () {
  var rellax = new Rellax('.rellax', {
    center: true
  });
  var rellaxNonCentered = new Rellax('.rellax-non-centered', {
    center: false
  });
  
  fullHeight();
  burgerMenu();
  mobileMenuOutsideClick();
  clickMenu();
  share();
  pizzaShare();
  delaniShare();
  spaceShare();
  cookitShare();
  like();
  pizzalike();
  delanilike();
  spacelike();
  cookitlike();
  comingSoon();

  
  
});