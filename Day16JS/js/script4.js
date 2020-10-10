var images = ['images/r.png','images/t.png','images/tel.png','images/y.png','images/m.png','images/fac.png'];

var index = 0;

function changeImage(){
	var mainImg = document.getElementById('mainImg');
	mainImg.setAttribute('src',images[index%6]);
	index++;

}
setInterval(changeImage,2000);