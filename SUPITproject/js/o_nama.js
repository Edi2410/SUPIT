$(() =>{
    $(window).scroll(function () {

        var topDivHeightPovijest = $("#o_nama").height() + $(".image-container").height() + $("#vrijednosti").height();
        var topDivHeightAlgebraGrupa = topDivHeightPovijest + $("#povijest").height();
        var topDivHeightKakoDoNas = topDivHeightAlgebraGrupa + $("#algebraGrupa").height();

        var triggerHeightPovijest = (topDivHeightPovijest - 600);
        var triggerHeightAlgebraGrupa = (topDivHeightAlgebraGrupa - 600);
        var triggerHeightkakoDoNas = (topDivHeightKakoDoNas - 600);

        if ($(window).scrollTop() >= triggerHeightPovijest) {
            $('#povijest').animate({ opacity: '1' });
        }
        if ($(window).scrollTop() >= triggerHeightAlgebraGrupa) {
            $('#algebraGrupa').animate({ opacity: '1' });
        }
        if ($(window).scrollTop() >= triggerHeightkakoDoNas) {
            $('#kakoDoNas').animate({ opacity: '1' });
        }
    });
});