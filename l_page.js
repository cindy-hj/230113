$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();

    $("#wrap").css({
        width:ww*3,
        height:wh*3
    });
    $(".page").css({
        width:ww,
        height:wh
    });
    $("#width_page_wrap").css({
        width:ww*3,
        height:wh
    });

    $("#page_2_go, #page_2_top").click(function(){
        $("#wrap").animate({
            top:-wh
        });
    });
    $("#page_3_go").click(function(){
        $("#wrap").animate({
            top:-wh*2
        });
    });
    $("#page_4_go, #page_4_left").click(function(){
        $("#wrap").animate({
            left:-ww
        });
    });
    $("#page_5_go").click(function(){
        $("#wrap").animate({
            left:-ww*2
        });
    });
    $("#page_1_top").click(function(){
        $("#wrap").animate({
            top:0
        });
    });
    // $("#page_2_top").click(function(){
    //     $("#wrap").animate({
    //         top:-wh
    //     });
    // });
    $("#page_3_left").click(function(){
        $("#wrap").animate({
            left:0
        });
    });
    // $("#page_4_left").click(function(){
    //     $("#wrap").animate({
    //         left:-ww
    //     });
    // });
    $("#page_main").click(function(){
        $("#wrap").animate({
            top:0,
            left:0
        });
    });
})