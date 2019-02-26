
$(window).scroll(function() { 
    var scroll = $(window).scrollTop();
    
    if (scroll > 300) {
        $('.menu').css('background-color','#343a40');
        $('.blocoDrop').css('background-color','#343a40');
        $('#navbarSite ul').css('font-size','16');
    }else{
    	$('.menu').css('background-color','');
    	$('.blocoDrop').css('background-color','');
    	$('#navbarSite ul').css('font-size','17');
    }
});
