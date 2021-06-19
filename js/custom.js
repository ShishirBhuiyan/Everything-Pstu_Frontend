// Owl Carousel Start..................
$(document).ready(function() {

    $('.toggle').click(function(){
       $('nav').toggleClass('active');
    }); 
    $('.ok').click(function(){
        $('.navigation').toggleClass('open');
     }); 

    $(".d-btn1").click(function(){
        $(".d-menu1").slideToggle(500);
        $(".check > i").toggleClass('rotate');
    });

    
    $(".span-arrow").click(function(e){
       console.log(this.nextElementSibling);
       $(this.nextElementSibling).toggleClass('active');
    });





    $(window).scroll(function(){
        var scrolls = $(window).scrollTop();
        if(scrolls >= 300){
            $('header').addClass('open');
         } else{
            $('header').removeClass('open');
         }
    }); 

});
// Owl Carousel End..................


