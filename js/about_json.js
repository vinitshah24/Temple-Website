$(document).ready(
    function () {
        $("#nav_list a").click(function () {
            $.getJSON("json/" + $(this).attr("title") + ".json", function (obj) {
                $.each(obj, function () {
                    $.each(this, function (key, value) {
                        $("#json-div").text("");
                        $("#json-data").text("");
                        $("#json-div").append("<img src=" + value.image + ">");
                        $("#json-data").append("<h1>" + value.title + "</h1>");
                        $("#json-data").append("<br>");
                        $("#json-data").append("<p>" + value.para1 + "</p>");
                        $("#json-data").append("<br>");
                        $("#json-data").append("<p>" + value.para2 + "</p>");
                        $("#json-data").append("<br>");
                        $("#json-data").append("<p>" + value.para3 + "</p>");
                    });
                });
            });
        }
        );
    });