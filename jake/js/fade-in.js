$(window).scroll( function(){
    $('.fade-in').each( function(i){
    
        var bottomObj = $(this).position().top + $(this).parent().outerHeight();
        var bottomWin = $(window).scrollTop() + $(window).height();

        if(small) {
            $(this).css({'opacity':'1'});
        } else {
            /* Fade in when object is half visible */
             if( bottomWin > bottomObj /1.25 ){
                $(this).animate({'opacity':'1'},500);
            }
        }
    });

     $('.parent-visible').each( function(i){
    
        var bottomObj = $(this).parent().position().top + $(this).parent().outerHeight();
        var bottomWin = $(window).scrollTop() + $(window).height();

        $('.parent-visible').position().top
    
       
        if(small) {
            $(this).addClass('active');
        } else {
             /* Fade in when object is totally visible */
            if( bottomWin > bottomObj ){
                $(this).addClass('active');
            }
        }
    });
     $('.bg-slide').each( function(i){

        var bottomObj = $(this).position().top + $(this).outerHeight(),
            bottomWin = $(window).scrollTop() + $(window).height();
        /* Fade in when object is totally visible */
        if( bottomWin > bottomObj ){
                var bgPos = $(this).css('backgroundPosition').split(' '),
                    xPos = bgPos[0];
            $(this).css({
                'background-position': xPos + ' 50%'
            });
        }
    });     
});


