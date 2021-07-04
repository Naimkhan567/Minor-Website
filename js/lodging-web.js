


$(document).ready(function() {
    $(".btn-menu").click(function() {
        var attr = $(this).attr("data-btn");
        $(".btn-menu").removeClass("active");
        $(this).addClass("active");

        $(".pod").hide();

        if(attr == "local") {
            $("." + attr).show();
        }
        else if(attr == "hotel") {
            $("." + attr).show()
        }
        else if(attr == "camps") {
            $("." + attr).show()
        }
        else if(attr == "all") {
            $("." + attr).show()
        }
    })
})