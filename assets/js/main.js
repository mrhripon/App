(function ($) {
    "use strict";

    $('.search-btn').on('click', function(){
        $('.search-box-wrap').addClass('show');
    })
    $('.cls-searchbar').on('click', function(){
        $('.search-box-wrap').removeClass('show');
    })

    // Script for Nice Select Activation 
    $(document).ready(function () {
        $('select').niceSelect();
    })

    $(function() {  
        $(".table-content").niceScroll({
            cursorcolor: "#fff",
            cursorwidth: "5px"
        });
    });

})(jQuery);	 // End line