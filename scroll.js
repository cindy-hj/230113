$(document).ready(function(){
    // 스크롤을 제어 할때 html, body를 선택해서 스크롤의 위치값 조절
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

    // 1. 각 메뉴를 클릭하면 각자 스크롤 이동 값이 지정
    // $(".menu:nth-child(1)").click(function(){
    //     $("html, body").animate({
    //         scrollTop:0
    //     });
    // });

    // 2. 클릭한 메뉴의 index값 활용
    // $(".menu").click(function(){
    //     let menuIndex=$(this).index();
    //     $("html, body").animate({
    //         scrollTop:wh*menuIndex
    //     });
    // });

    // 메뉴 버튼 눌러서 스크롤이 중간에 있을때도 퀵메뉴 눌러서 스크롤 아래로 이동 가능해야한다
    // 전역 변수 활용!
    let allClick = 0;
    $(".menu").click(function(){
        allClick=$(this).index();
       
        // $("html, body").animate({
        //     scrollTop:wh*allClick
        // });
        // if(allClick >= 4) {
        //     $('img').attr({
        //         src:'img/up.png'
        //     });
        //     allClick = 0;  
        // } else {
        //     $('img').attr({
        //         src:'img/down.png'
        //     });
        // }
        
        // this를 쓰면 메뉴를 클릭하고 다른 메뉴를 클릭할때 이전 메뉴를 선택할 수 없으니 배경색을 다시 되돌릴 수 없음
        // $(this).addClass("on",300);

        // 이전에 어떤 메뉴를 선택했는지 모르니 메뉴 전체에서 .on을 지우고 클릭한 메뉴만 배경색 바꿔줌
        // $(".menu").removeClass("on",200);
        // $(".menu").eq(allClick).addClass("on",200);
    
        scrollMove();
    });
    $("#quick").click(function(){
        allClick++;
        
        // $("html, body").animate({
        //     scrollTop:wh*allClick
        // });
        // // allClilck은 전역변수이므로 메뉴를 누르면 index값을 가지고있고 그 후에 퀵메뉴를 누르면 index값에 +1을 하는것
        // if(allClick >= 4) {
        //     $('img').attr({
        //         src:'img/up.png'
        //     });
        //     allClick = -1; 
        // } else {
        //     $('img').attr({
        //         src:'img/down.png'
        //     });
        // }

        scrollMove();
    });

    // .menu를 클릭했을 때의 이벤트 내용과
    // #quick을 클릭했을 때의 이벤트 내용이 동일함
    // 동일한 실행문을 하나의 그룹화 할 수 있는 것이 함수
    // .menu클릭시, #quick클릭시 함수만 호출하면 됨
    function scrollMove() {
        $("html, body").animate({
            scrollTop:wh*allClick
        });
        if(allClick >= 4) {
            $('img').attr({
                src:'img/up.png'
            });
            allClick = -1; 
        } else {
            $('img').attr({
                src:'img/down.png'
            });
        }

        // 여기에 넣어주면 퀵메뉴로 스크롤 움직일때도 어떤 메뉴 보고 있는지 색 변화로 알수있음
        $(".menu").removeClass("on",200);
        $(".menu").eq(allClick).addClass("on",200);  
    }
});