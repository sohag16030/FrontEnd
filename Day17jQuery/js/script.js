$('#head1').html('Hello World'); 
$('#p1').click(function(){
	//alert("hi");
	$('#p1').text('hey');
	$('#p1').css('color','red')
	$('#p1').css('fot-size','30px')

})
$('#head1').click(function(){
	// $('#head1').css({
	// 	'color' :'blue',
	// 	'font-size':'40px',
	// 	'border':'2px solid black',
	// 	 'padding' : '20px'
 //  })
    $('#head1').hide();
})
$('#btn1').click(function(){
	 $('#head1').hide(2000);
})
$('#btn2').click(function(){
	 $('#head1').show(2000);
})
$('#btn').click(function(){
	//$('#p1').toggle(2000);
    $('#p1').slideUp(2000);
    $('#p1').slideDown(2000);
})