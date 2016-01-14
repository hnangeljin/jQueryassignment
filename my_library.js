
$(document).ready(function(){
	

	$('h1').click(function() {
		$('p').fadeToggle(3000);
	})
	$('.btn1').click(function() {
		$('.nav').slideUp(1000);
	})
	$('.btn2').click(function() {
		$('.nav').slideDown(1000);
	})
	$('.btn3').click(function() {
		$('.box').css({"background-color": "yellow"}).animate({
			left: '250px',
            opacity: '0.5',
            height: '100px',
            width: '100px'
		});
	})
	$("p").hover(function(){
		$(this).css("background-color", "green")
	})
	$("li").click(function(){
		$('li').hide("slow");
		$('li').show("slow");
	})
	$(".text").click(function(){
		$("#source").appendTo("#target");
	})
	$('.btn4').click(function() {
		$('.ant').hide(1000);
	})
	$('.btn5').click(function() {
		$('.dear').hide(1000);
		$('.dear').show(1000);
	})
	$('.btn6').click(function() {
		$('.monkey').fadeOut(1000);
	})
	$('.btn7').click(function() {
		$('.whale').fadeOut(1000);
		$('.whale').fadeIn(1000);
	})
	$('.btn8').click(function() {
		$('.lion').slideUp(1000);
	})
	$('.btn9').click(function() {
		$('.owl').slideUp(1000);
		$('.owl').slideDown(1000);
	})



	
});





