$(document).ready(function(){
	//escript para hacer el menu sticky
	var posNav = $(".nav").offset().top;
	var stickyNav = function(){
	var posPantalla = $(window).scrollTop();
	if(posPantalla > posNav){
		$(".nav").addClass("sticky");
	}else{
		$(".nav").removeClass("sticky");
	}
	};
	stickyNav();
	$(window).scroll(function(){
		stickyNav();
	});
	//script para mostrar mapa
	$('.mostrar').click(function(){
		var mostrar = $(this).attr('href');
		$(mostrar).css('display','block');
		var enlace  = $(this).attr('href');
        $('html, body').animate({
        scrollTop: $(enlace).offset().top
        }, 1000);
	});
});