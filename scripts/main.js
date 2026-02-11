$(function() {
  $(".smooth-anchor").click(function(e) {
	e.preventDefault();
	var href = $(this).attr("href");
	$('html,body').animate({ scrollTop: $(href).offset().top-10 }, 500);
  });
});


$(function() {
	function topScroll(){
	  if(window.pageYOffset<400) {
		$('div.back-top').removeClass('appear');
	  }
	  if(window.pageYOffset>400) {
		$('div.back-top').addClass('appear');
	  }
	}
  if ($(window).width() > 449){
	window.onscroll=topScroll
  }
});