$(() => {
    if(sessionStorage.token) {
        $("#prijava").css({'display':'none'});
        $("#odjava").css({'display':'block'});
        $("#nastavniPlan").css({'display':'block'});
        $("#odjava").append(sessionStorage.username);
    }else {
        $("#prijava").css({'display':'block'});
        $("#odjava").css({'display':'none'});
        $("#nastavniPlan").css({'display':'none'});
    }
    $( "#odjava" ).click(function() {
        sessionStorage.clear();
        location.reload();
      });
});