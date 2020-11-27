$('#a1').click(function(){
	$('html,body').animate({
		scrollTop : $('#div1').offset().top
	},1000)
})

$('#a2').click(function(){
	$('html,body').animate({
		scrollTop : $('#div2').offset().top
	},1000)
})

$('#a3').click(function(){
	$('html,body').animate({
		scrollTop : $('#div3').offset().top
	},1000)
})

// starts here for slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// bxslider

$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});

