$('.div1').click(function(){
	$('.div1').animate({
		left : '200px'
	},1000).animate({
		top:'200px'
	},1000)
})

$('.div2').click(function(){
	$('.div2').animate({
		right : '200px'
	},1000).animate({
		bottom : '200px'
	},1000)
})

$('button').click(function(){
	
	$('.div1').animate({
		left : '200px'
	},1000).animate({
		top:'200px'
	},1000).animate({
		borderRadius : '100%'
	})

	$('.div2').animate({
		right : '200px'
	},1000).animate({
		bottom : '200px'
	},1000)
})

$('.div3').animate({
     left : '200px'
},1000).animate({
	height : '400px',
	width : '400px'
}).animate({
	height : '200px',
	width : '200px'
})
function loop(){
	$('.div4').animate({
	left : '1200px'
},1000).animate({
	top : '300px'
},1000).animate({
	left : '0px'
},1000).animate({
	top : '0px'
},1000,loop)
}
loop();
