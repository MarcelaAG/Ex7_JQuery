//Cache your selectors in variables, this is considered best practice
$(document).ready(function(){
    let remove = $('.a_supprimer');
        $(remove).on('click', function(){
        $('.a_supprimer').hide();      
    }); 
 });
   