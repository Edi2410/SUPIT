$(() => {
    if(localStorage.getItem('token') != undefined) {
        $("#prijava").css({'display':'none'});
        $("#odjava").css({'display':'block'});
        $("#nastavniPlan").css({'display':'block'});
        $("#odjava").append(localStorage.getItem('username'));
    }else {
        $("#prijava").css({'display':'block'});
        $("#odjava").css({'display':'none'});
        $("#nastavniPlan").css({'display':'none'});
    }
    $( "#odjava" ).click(function() {
        localStorage.clear()
        location.reload();
      });
});