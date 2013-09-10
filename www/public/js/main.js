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

$(".side-nav-header-btn").click(function(){
	if ($(".side-nav-wrapper").css("left")=="-188px") {
		$(".side-nav-header-background").animate({width:'188px'},400);
		$(".side-nav-wrapper").animate({left:'0px'},400);
		if($(this).hasClass('active')==0){$(this).addClass('active')};
		if($('.librexpo-title').hasClass('active')==0){$('.librexpo-title').addClass('active')};
	}else if ($(".side-nav-wrapper").css("left")=="0px"){
		$(".side-nav-header-background").animate({width:'0px'},400);
		$(".side-nav-wrapper").animate({left:'-188px'},400);
		if($(this).hasClass('active')){$(this).removeClass('active')};
		if($('.librexpo-title').hasClass('active')){$('.librexpo-title').removeClass('active')};
	}
});
