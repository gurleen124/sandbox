$(document).ready(function () {
    $("li.menu").hover(function(){
        $(this).children("ul").toggle();
    });
    $("li.subMenu").hover(function(){
        $(this).children("ul").toggle();
    });

    $("input#check").click(function(){
        $("h3.month").toggleClass("hidden");
        $("h3.year").toggleClass("hidden");
    });

    $(window).scroll(function(){
        $("a#scrollButton").removeClass("hidden");
    });

    // $("button#scrollButton").click(function(){
    //     $("header").scrollTop(0);
    // });
});