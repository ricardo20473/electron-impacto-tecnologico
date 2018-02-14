$(document).ready(function(){
    
    $( "#form-login" ).submit(function( event ) {
        event.preventDefault();
        var user = $('#user').val();
        var pass = $('#password').val();
        
        if (user == 'admin' && pass == 'admin') {
            window.location = 'view/home.html';
        } else {
            alert('El usuario que ingreso es incorrecto');
        }
    });

    $('#close').click(function(){
        window.location = '../index.html';
    });
});