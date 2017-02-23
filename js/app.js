/*----------  Número de estrellas a generar entre menor mejor  ----------*/
var startsNum = 150;
/*----------  Ciertas variaciones a las estrellas, aplicar clase de manera aleatoria  ----------*/
var anims = ['anim1','anim2','anim3','anim4','anim5'];
/*----------  Tener disponible el objeto de audio  ----------*/
var audio = new Audio('assets/audio.mp3');
document.addEventListener('DOMContentLoaded', function(){
	/*----------  Generar las estrellas  ----------*/
	for(var x = 0; x < startsNum; x ++){
		var xRandomFrom = Math.floor((Math.random() * 100) + 1);
		var yRandomFrom = Math.floor((Math.random() * 100) + 1);
		var main = document.getElementById('stars');
		var star = document.createElement('div');
		/*----------  Ponerlas en posiciones random en porcentaje en relación a su contenedor  ----------*/
		star.style.left=xRandomFrom+'%';
		star.style.top=yRandomFrom+'%';
		/*----------  Aplicar clases de manera aleatoria  ----------*/
		var rand = anims[Math.floor(Math.random() * anims.length)];
		star.className=rand;
		var element = main.appendChild(star);
		/*----------  Despues de 8 segundos que dura el intro de texto reproducir audio  ----------*/
		window.setTimeout(function(){
			audio.play();
		},8000);
		
	}
});