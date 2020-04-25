$(document).ready(() => {
    $(".side-pane").addClass("col xl3 offset-xl1 hide-on-med-and-down");
    $.get("/templates/side-pane.tmpl.html", "html").done(sidePaneContents => {
        $(".side-pane").append(sidePaneContents);
    });
});