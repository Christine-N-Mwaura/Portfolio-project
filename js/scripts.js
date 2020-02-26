 
// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
//   }
$(document).ready(function(){
 
  $(".one").click(function(){
    $(".panel-body.one").toggle('slow');
    $(".panel-title.one a").toggleClass("collapsed");
    
  });

  $(".two").click(function(){
    $(".panel-body.two").toggle('slow');
    $(".panel-title.two a").toggleClass("collapsed");
    
  });

  $(".three").click(function(){
    $(".panel-body.three").toggle('slow');
    $(".panel-title.three a").toggleClass("collapsed");
    
  });
  $(".four").click(function(){
    $(".panel-body.four").toggle('slow');
    $(".panel-title.four a").toggleClass("collapsed");
    
  });
  $(".five").click(function(){
    $(".panel-body.five").toggle('slow');
    $(".panel-title.five a").toggleClass("collapsed");
    
  });
  $('.full-height').fullHeight();
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  $(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide"
    });
  });

});