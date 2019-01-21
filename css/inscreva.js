$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 480){
      $('#inscrevascroll').fadeIn();
    } else{
      $('#inscrevascroll').fadeOut();
    }
  });

});
