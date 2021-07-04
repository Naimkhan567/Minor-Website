$(document).ready(function() {
    $(".btn-menu").click(function() {
        var attr = $(this).attr("data-btn");
        $(".btn-menu").removeClass("active");
        $(this).addClass("active");

        $(".pod").hide();

        if(attr == "gilgit") {
            $("." + attr).show();
        }
        else if(attr == "swat") {
            $("." + attr).show()
        }
        else if(attr == "kalam") {
            $("." + attr).show()
        }
        else if(attr == "kaghan") {
            $("." + attr).show()
        }
        else if(attr == "naran") {
            $("." + attr).show()
        }
        else if(attr == "abbottabad") {
            $("." + attr).show()
        }
        else if(attr == "all") {
            $("." + attr).show()
        }

    })
})