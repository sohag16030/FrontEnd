//get all using getElementById (sob e ase element nile,getAttribute diye alda kore attribute gula access korte hoi)
//var mainimg = document.getElementById('mainimg');

//display using getAttribute
//var attr = mainimg.getAttribute('width');
//alert(attr); 

//update all the property through setAttribute
//mainimg.setAttribute('width','200px');

//html event(mouseevents) ase (onclick , onmouseover)
var image1 =document.getElementById('img1')
image1.onclick= function(){
	var newimgsrc = image1.getAttribute('src');
	var mainimage = document.getElementById('mainimg');
	mainimage.setAttribute('src',newimgsrc);
}

var image2 = document.getElementById('img2');
var image3 = document.getElementById('img3');
image2.onmouseover = function(){
	image3src = image3.getAttribute('src');
	image2.setAttribute('src',image3src);
    
}

// function demo(){
// 	alert("hello buddy");
// }

// setInterval(demo,5000);

// let date = new Date();
// alert(date.getDay());
function time(){
   var date = new Date();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var seconds = date.getSeconds();

document.getElementById('watch').innerHTML = hours+":"+minutes+":"+seconds;
}

setInterval(time,1000);