$(document).ready(() => {
    $(".side-pane").addClass("col l3 offset-l1 hide-on-med-and-down");
    $.get("/templates/side-pane.tmpl.html", "html").done(sidePaneContents => {
        $(".side-pane").append(sidePaneContents);
    });
});