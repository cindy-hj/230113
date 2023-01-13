$(document).ready(function(){
    // 스크롤을 제어 할때
    // html, body를 선택해서 스크롤의 위치값 조절
    // =>scrollTop, scrollLeft
    // =>animate 속성위치
    // let a = 0;
    // $("#wrap").click(function(){
    //     a++;
    //     $("html, body").animate({
    //         // 스크롤은 위에서 부터 떨어지니까 +값.. position이랑 헷갈리지 말것
    //         scrollTop:1000*a
    //     });
    // });

    // 각 객체의 index값을 활용하기
    // index() 명령사용
    // #wrap>div를 클릭할때 마다 각 div의 인덱스 값 확인

    // $("#wrap>div").click(function(){
    //     // 내가 클릭한 div의 index값
    //     let divIndex=$(this).index();
    //     document.write(divIndex);
    // });

    // js에서 window크기는 스크롤 포함, css에서 100%는 스크롤 제외.. 오차범위 생긴다!
    // 부모는 window크기로 맞추고 자식은 css에서 100% 맞추면 해결..!
    let ww=$(window).width();
    let wh=$(window).height();

    $("#wrap").css({
        width:ww,
        height:wh*5
    });
    $(".page").css({
        width:ww,
        height:wh
    });
    $(".box").css({
        // 정확히 알수 없는값(ex:윈도우 크기)은 js에서 css 작업
        width:ww*0.9,
        height:wh*0.9,
        top:'50%',
        left:'50%',
        marginTop:-wh*0.9/2,
        marginLeft:-ww*0.9/2
    });

    // nth-child 이용 해도 됨!
    // $(".menu:nth-child(1)").click(function(){
    //     $("html, body").animate({
    //         scrollTop:0
    //     });
    // });

    // 인덱스 이용 해도 됨!
    // $(".menu").click(function(){
    //     let menuIndex=$(this).index();
    //     $("html, body").animate({
    //         scrollTop:wh*menuIndex
    //     });
    // });

    // $("#menu1").click(function(){
    //     $("html, body").animate({
    //         scrollTop:0
    //     });
    // });
    // $("#menu2").click(function(){
    //     $("html, body").animate({
    //         scrollTop:wh
    //     });
    // });
    // $("#menu3").click(function(){
    //     $("html, body").animate({
    //         scrollTop:wh*2
    //     });
    // });
    // $("#menu4").click(function(){
    //     $("html, body").animate({
    //         scrollTop:wh*3
    //     });
    // });
    // $("#menu5").click(function(){
    //     $("html, body").animate({
    //         scrollTop:wh*4
    //     });
    // });

    // let  = 1;
    // $("#quick").click(function(){
    //     $("html, body").animate({
    //         scrollTop:wh*a
    //     });
    //     a++;
        // if(a>4) {
        //     $('img').attr({
        //         src:'img/up.png'
        //     }); 
        //     a = 0;
        // } else {
        //     $('img').attr({
        //         src:'img/down.png'
        //     });
        // }
    // });

    // 메뉴버튼 눌러도 스크롤 이동해야하고 퀵메뉴 눌러도 스크롤 이동해야함
    // 전역 변수 활용!
    let allClick = 0;
    $(".menu").click(function(){
        allClick=$(this).index();
        $("html, body").animate({
            scrollTop:wh*allClick
        });
        if(allClick >= 4) {
            $('img').attr({
                src:'img/up.png'
            }); 
        } else {
            $('img').attr({
                src:'img/down.png'
            });
        }
    });
    $("#quick").click(function(){
        allClick++;
        $("html, body").animate({
            scrollTop:wh*allClick
        });
    });
    if(allClick >= 4) {
        $('img').attr({
            src:'img/up.png'
        }); 
    } else {
        $('img').attr({
            src:'img/down.png'
        });
    }
    $(this).addClass("on",300)
});