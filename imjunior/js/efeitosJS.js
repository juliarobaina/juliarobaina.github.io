/*function sizeOfThings(){
  //var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var divHeight = document.getElementById("carouselSite").offsetHeight;
  //var screenWidth = screen.width;
  //var screenHeight = screen.height;
 
  if ((windowHeight-divHeight) > 100) {
  	document.getElementByClass(".nav").style.backgroundColor='#343a40';
  	document.getElementById("logo").style.width='62px';
  	alert(windowHeight);
  }

};

sizeOfThings();

window.addEventListener('DOMContentLoaded', function(){
	sizeOfThings();
});*/
$(window).scroll(function() { 
    var scroll = $(window).scrollTop();
    
    if (scroll > 300) {
        $('.menu').css('background-color','#343a40');
        $('.blocoDrop').css('background-color','#343a40');
        $('#logo').css('width','62');
        $('#navbarSite ul').css('font-size','16');
    }else{
    	$('.menu').css('background-color','');
    	$('.blocoDrop').css('background-color','');
    	$('#logo').css('width','100');
    	$('#navbarSite ul').css('font-size','17');
    }
});