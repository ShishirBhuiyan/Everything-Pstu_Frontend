// Owl Carousel Start..................
$(document).ready(function() {

    $('.toggle').click(function(){
       $('nav').toggleClass('active');
    }); 

    $(".d-btn1").click(function(){
        $(".d-menu1").slideToggle(500);
        $(".check > i").toggleClass('rotate');
    });
    
/*     $(".d-btn2").click(function(){
        $(".d-menu2").toggleClass('active');
    });

    $(".d-btn3").click(function(){
        $(".d-menu3").toggleClass('active');
    }); */

});
// Owl Carousel End..................


