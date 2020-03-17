$(document).ready(() => {
    $.get("/templates/navbar.tmpl.html", "html").done(navbar => {
        $("body").prepend(navbar);
        $(".sidenav").sidenav();
        var path = window.location.pathname.split('/');
        $("#navbar-" + path[1]).addClass("active");
    });
});