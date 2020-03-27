$(document).ready(function () {
    let menuItem = $('.full-info-nav-item');
    
    menuItem.on('click', function (event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');

        $('.active').toggleClass('active');
        $(this).toggleClass('active');
    });
});