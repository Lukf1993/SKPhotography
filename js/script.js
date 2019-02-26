$(document).ready(function(){

    var x = 1;
    var loadCL = "load" + x;
    var link = loadCL + ".html";
    var newDiv = '<div class="load_content" style="display: none;"></div>';
    var isAjax = false;

    function nextResponse() {
       x = x + 1;
       loadCL = "load" + x;
       link = loadCL + ".html";
    }

    function renderTemplate() {
        $(".content").append(newDiv);
        $(".load_content").eq(x-1).addClass(loadCL);
    }

    function ajaxResponse (data){
        $("." + loadCL).append(data).fadeIn(500);
        isAjax = false;
        nextResponse();
    }

    function ajaxError() {
        isAjax = true;
    }

    function scrollLoader() {
       return $(document).height() - ($(document).height() * 0.2)
          <= $(window).scrollTop() +  $(window).height() && isAjax === false;


    }

// Hamburger
    $(".jsOpenMenu").on('click', function(){
        $("#myTopnav").slideToggle();
    });

// Ajax content

    $(window).scroll(function() {
        if(scrollLoader()) {
            renderTemplate();
            $.ajax({
                url: link,
                type: "GET",
                dataType : "html",
                beforeSend: function() {
                    isAjax = true;
                },
                success: ajaxResponse,
                error: ajaxError
            });
            event.preventDefault();
        };
    });
});


