$(function(){ //로드후실행

    /**
     * @언어선택
     * 
     * 구글링:자바스크립트새창이동 window.open
     * 
     */

    $('#langBtn').click(function(){
        // console.log($('#langList').val());
        url = $('#langList').val();
        window.open(url)
    })



    /**
     * @메인슬라이드
     * 
     * 구글링:swiper 자동재생 정지
     * mainSlide.autoplay.start() -> 스와이퍼에서만 쓸수있는기능
     * 
     * 구글링:swiper 특정위치로 이동
     * swiper.slideTo((이동할 슬라이드 번호), (속도), false)
     * 0 -> 1번째 index(순서) 0부터시작
     * 루프가된상태에서는 오류가남 그래서 못씀
     * swiper.slideToLoop()
     * 
     * 구글링:swiper 슬라이드가 넘어갈 때 이벤트 호출
     * slideChange 슬라이체인지 될때마다 실행
     */
    var mainSlide = new Swiper(".main-slide", {
        loop:true,
        pagination: {
            el: ".fraction",
            type: "fraction",
          },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, //컨트롤이후 정지할지유무
        },

    });

    $('.main-slide .autoplay').click(function(){
        if ( $(this).hasClass('on')) { //클릭한게 ON 있냐?(또클릭)
            mainSlide.autoplay.start()
            $(this).removeClass('on')
        } else { //ON 없냐?(처움클릭)
            mainSlide.autoplay.stop()
            $(this).addClass('on')
        }
    })

    $('.sc-visual .group-nav .btn-nav').click(function(){
        idx=$(this).data('index'); //[내가선택한 버튼의 data-index 값] 구했다. 구하는값이 달라짐

        $(this).addClass('active').siblings().removeClass('active');
        mainSlide.slideToLoop(idx)
    })

    $('.sc-visual .group-nav .btn-nav').click(function(){
        idx=$(this).data('index'); //[내가선택한 버튼의 data-index 값] 구했다. 구하는값이 달라짐

        $(this).addClass('active::after').siblings().removeClass('active::after');
        mainSlide.slideToLoop(idx)
    })


    // on: {
    //     slideChange: function () {
    //       alert('슬라이드 변경');
    //     }
    //   }
    mainSlide.on('slideChange',function(){
        // 현재작동중인 swiper-slide의 순서 
        // this.realIndex
        // console.log(this.realIndex);

        if (this.realIndex >= 2) { //인덱스가 2이상일때
            $('.sc-visual .group-nav .btn-nav.citizen').addClass('active').siblings().removeClass('active');;
        }else{ //그렇지않다면 0,1
            $('.sc-visual .group-nav .btn-nav.news').addClass('active').siblings().removeClass('active');;
        }
    })




    /**
     * @배너슬라이드
     * 
     */
    var bannerSlide = new Swiper(".banner-slide", {
        slidesPerView: 3,
        spaceBetween: 43,
        loop:true,
        pagination: {
            el: ".fraction",
            type: "fraction",
          },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, //컨트롤이후 정지할지유무
        },
    });

    $('.banner-slide .autoplay').click(function(){
        if ( $(this).hasClass('on')) { //클릭한게 ON 있냐?(또클릭)
            bannerSlide.autoplay.start()
            $(this).removeClass('on')
        } else { //ON 없냐?(처움클릭)
            bannerSlide.autoplay.stop()
            $(this).addClass('on')
        }
    })






    /**
     * @상단으로이동
     * 
     * 구글링:js상단으로이동
     * 
     */

    $('.main-top-btn').click(function(){
        window.scrollTo({top:0,behavior:"smooth"})
    })

    $(window).scroll(function(){
        curr = $(this).scrollTop();

        if (curr >= 100) {
            $('.main-top-btn').removeClass('on')
        } else {
            $('.main-top-btn').addClass('on')
            
        }
       
    })




    /**
     * @관련사이트아코디언영역
     * 
     * 
     * 구글링:js 키보드접근
     */

    $('.btn-related').click(function(e){

        if(!$(this).hasClass('none')){ //내가 선택한 애가 none이라는 클레스가 없냐?
            e.preventDefault(); //링크이벤트막기

            if($(this).hasClass('active')){ //클릭한게 active있냐>(또클릭)

                $('.btn-related').removeClass('active'); //모든버튼 클레스다빼고
                $('.sub').slideUp(); //모든 sub닫기

            }else{ //active없냐? (첫클릭 )

                $('.btn-related').removeClass('active');//모든버튼 클레스다빼고
                $(this).addClass('active'); //나만(btn-related)클레스 주기

                $('.sub').slideUp(); //모든 sub닫고
                $(this).siblings('.sub').slideDown(); //나만(btn-related)의 형제 .sub 열기
            }

        }
    })





}) //end