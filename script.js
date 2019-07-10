$(document).ready(function(){
  $('.slider').slick({
    	arrows : false,
    	dots : true,
    	// autoplay : true,
    	autoplaySpeed: 2000,
    	dotsClass : 'myDots'
  })
  $('.gallery').magnificPopup({
  		delegate: 'a', 
  		type: 'image'
  })
})