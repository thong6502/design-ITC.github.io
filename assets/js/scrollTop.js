window.addEventListener('scroll', function() {
    var scroll = document.getElementById('scrollTop');
    scroll.classList.toggle("active", window.scrollY > 100)
})

$(document).ready(function(){

  
    $("#scrollTop").click(function(){
      $('html ,body').animate({scrollTop : 0},500);
    });
  });
  







