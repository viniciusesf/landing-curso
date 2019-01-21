/*MENU CATO II*/
$(window).scroll(function() {
 if ($(this).scrollTop() >= 1070){
    $('.navbar').addClass("menuTopo-scroll");
    $('body').addClass("body-scroll");
  }
  else{
    $('.navbar').removeClass("menuTopo-scroll");
    $('body').removeClass("body-scroll");
  }
});

/*MENU CATO I*/
$(window).scroll(function() {
 if ($(this).scrollTop() >= 3860){
    $('.navbar02').addClass("menuTopo-scroll");
    $('body').addClass("body-scroll02");
  }
  else{
    $('.navbar02').removeClass("menuTopo-scroll");
    $('body').removeClass("body-scroll02");
  }
});

/*MENU MOBILE*/
$(window).scroll(function() {
 if ($(this).scrollTop() >= 50){
    $('.navbar03').addClass("menuTopo-scroll");
    $('body').addClass("body-scroll03");
  }
  else{
    $('.navbar03').removeClass("menuTopo-scroll");
    $('body').removeClass("body-scroll03");
  }
});


