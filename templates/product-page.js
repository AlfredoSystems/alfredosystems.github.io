var path = window.location.pathname.split('/');
var product = products.filter(product => product.link == path[path.length - 2]);
$.get("/templates/product-page.tmpl.html", "html").done(template => {
    $("body").append($.templates(template).render(product));
});