// Desktop version sliding menus

$(document).ready(function() {
    enableMenus();
});

$(window).resize(function() {
    enableMenus();
});

// Enable menu animation if the screen is set to desktop
function enableMenus() {

    // Create shortcut for nav element
    var menu = $('#siteNav');

    // Check to see if we are on desktop .vs tablet or mobile
    if ($(document).width() > 768) {

        // Strip out no-js class if jQuery is running the animation
        if ($('body').hasClass('no-js')) {
            $('body').removeClass('no-js');
        }

        // Attach a listener to each li that has a child ul, and then
        // slide submenus down or up depending upon mouse position
        menu.find('li').each(function() {

            if ($(this).find('ul').length > 0 ) {

                // Strip any existing events
                $(this).unbind();

                $(this).mouseenter(function() {
                    $(this).find('ul').stop(true, true).slideDown('fast');
                });

                $(this).mouseleave(function() {
                    $(this).find('ul').stop(true, true).slideUp('slow');
                });
            }
        });
    } else {
        menu.find('li').each(function() {

            if ($(this).find('ul').length > 0 ) {

                // Strip any existing events
                $(this).unbind();
            }
        });

        if ($('body').hasClass('no-js') == false) {
            $('body').addClass('no-js');
        }
    }
}
