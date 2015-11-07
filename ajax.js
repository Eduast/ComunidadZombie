$(function(){
	// $.get('logos.html', function(logos) {
	// 	$('footer').append(logos);
	// })
	$('#logos').load('logos.html')
	$.get('usuario.json', function (info) {
		var avatar   = new Image();
		avatar.src   = info.avatar;
		avatar.title = info.nombre + ' ' + info.apellido;

		$('#avatar').append(avatar)
	})
});