$(window).scroll(function () {
    console.log($(window).scrollTop());
    var topDivHeight = $(".scroppbeginer").height();
    var viewPortSize = $(window).height();
    
    var triggerAt = 50;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;
    print(triggerHeight)
    if ($(window).scrollTop() >= triggerHeight) {
        $('.scrolfade').css('visibility', 'visible').hide().fadeIn();
        $(this).off('scroll');
    }
});