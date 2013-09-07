// Gére la valeur par défaut d'un input:text ou d'un textarea
// Il peut convertir un input:text en :password s'il à la class .change-to-password
function inputDefaultValueGestion(input){
	var defaultValue = $(input).val();
	if($(input).is('input:text') || $(input).is('textarea')){	
		$(input).focus(function() {
			if($(this).val()==defaultValue){
				$(this).val('');
				if($(this).is('.change-to-password') && $(this).is('input:text')){$(this).get(0).type = 'password'};
			}
		});
	}	
	$(input).focusout(function() {
		if(($(this).val().match(/^[ \t]+$/))||($(this).val()=='')){
			if($(this).is('.change-to-password') && $(this).is('input:password')){$(this).get(0).type = 'text'};
			$(this).val(defaultValue);
		}
	});
	
}

// Ajoute de la function inputDefaultValueGestion a tout les input de text et les textarea
$('input:text,textarea').each(function(){
	inputDefaultValueGestion(this);
});