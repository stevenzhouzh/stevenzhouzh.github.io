$("#nav_projects").hover(function() {
    $("#nav_dd_projects").removeClass("hidden");
    $("#nav_projects").addClass("lighten");
}, function() {
    $("#nav_dd_projects").addClass("hidden");
    $("#nav_projects").removeClass("lighten");
});

$("#nav_experiences").hover(function() {
    $("#nav_dd_experiences").removeClass("hidden");
    $("#nav_experiences").addClass("lighten");
}, function() {
    $("#nav_dd_experiences").addClass("hidden");
    $("#nav_experiences").removeClass("lighten");
});
