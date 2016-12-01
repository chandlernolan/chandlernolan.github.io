$(document).ready(function() {

$(".listitem").click(function() {
 		$('html, body').animate({
	      scrollTop: $( $.attr(this, 'href')).offset().top
	    }, 6000);
 	});

$('.s').hover(
       function(){ $(this).addClass('hover') },
       function(){ $(this).removeClass('hover') }
)
  

$("#linkedin").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});	
		









		}
);



