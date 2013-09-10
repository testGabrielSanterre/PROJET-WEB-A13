<div class="side-nav-wrapper unselectable">
	{{Form::open(array('url' => 'login', 'class' => 'side-nav-login'));}}
	{{Form::text('username','Nom d\'utilisateur');}}
	{{Form::text('password','Mot de passe', array('class' => 'change-to-password'));}}
	{{Form::submit('Connection');}}
	{{Form::close();}}
</div>