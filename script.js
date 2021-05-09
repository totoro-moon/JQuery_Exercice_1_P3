var clicks = 0;
$(document).ready(function () {
    $("#addClic").click(function () {
        clicks++;
        $("#clic").text(clicks)
    });
});
