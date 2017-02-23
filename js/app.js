var startsNum = 400;
var anims = ['anim1','anim2','anim3','anim4','anim5'];
document.addEventListener('DOMContentLoaded', function(){
	for(var x = 0; x < startsNum; x ++){
		var xRandomFrom = Math.floor((Math.random() * 100) + 1);
		var yRandomFrom = Math.floor((Math.random() * 100) + 1);
		var main = document.getElementById('stars');
		var star = document.createElement('div');
		star.style.left=xRandomFrom+'%';
		star.style.top=yRandomFrom+'%';
		var rand = anims[Math.floor(Math.random() * anims.length)];
		star.className=rand;
		var element = main.appendChild(star);
		//////////
		var audio = new Audio('assets/audio.mp3');
		audio.play();
	}
});