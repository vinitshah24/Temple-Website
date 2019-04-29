$(document).ready(function () {
    /**POSSIBLE TAGS: mathura, krishnatemple */
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=krishnatemple&format=json&jsoncallback=?"
    $.getJSON(url, function (data) {
        var html = "";
        $.each(data.items, function (i, item) {
            html += "<img src=" + item.media.m + " ";
            html += "title=" + item.title + "";
            html += ">" + " ";
        })
        $("#flickr-div").html(html);
    })
});