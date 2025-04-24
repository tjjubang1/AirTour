// slide_hot
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {     //자동슬라이드 (false-비활성화)
          delay: 2500, // 시간 설정
          disableOnInteraction: false, // false-스와이프 후 자동 재생
        },

        loop : true,   // 슬라이드 반복 여부

        loopAdditionalSlides : 1,
  });

//   slide all
$(".slide_all").hide();
$(".hot").mouseenter(function(){
    $(".slide_all").slideDown()
});
$(".slide_all").mouseleave(function(){
    $(".slide_all").slideUp()
});

// header slide
$("#header").hide();
$(".menu_button").click(function(){
    $("#header").slideDown()
    $(".mi_l").hide()
});
$(".menu_icon").click(function(){
    $("#header").slideUp()
    $(".mi_l").show()
});

//header gnb scroll
$(".gnb li:nth-child(1)").click(function(){
    $("body,html").animate({
        scrollTop: 670
    },500)
});
$(".gnb li:nth-child(2)").click(function(){
    $("body,html").animate({
        scrollTop: 1814
    },500)
});
$(".gnb li:nth-child(3)").click(function(){
    $("body,html").animate({
        scrollTop: 2674
    },500)
});

$(".gnb li:nth-child(3)").click(function(){
    $("body,html").animate({
        scrollTop: 2674
    },500)
});
$(".gnb li:nth-child(4)").click(function(){
    $("body,html").animate({
        scrollTop: 3564
    },500)
});
$(".gnb li:nth-child(5)").click(function(){
    $("body,html").animate({
        scrollTop: 4474
    },500)
});
$(".gnb li:nth-child(6)").click(function(){
    $("body,html").animate({
        scrollTop: 6530
    },500)
});
$(".gnb li:nth-child(7)").click(function(){
    $("body,html").animate({
        scrollTop: 7538
    },500)
});

// map hover

$(".lnb_box").mouseenter(function () {
    $(this).children('.map_p').css({
        'transform': 'scale(1.2)',
        'transition': 'transform 0.5s'
    })
});
$(".lnb_box").mouseleave(function () {
    $(this).children('.map_p').css({
        'transform': 'scale(1)',
        'transition': 'transform 0.5s'
    })
});

// map click
// $(".lnb_box").click(function(){
//     $('.s4_img_box').fadeIn(0)
    
// });
// $(".button_x").click(function(){
//     $(this).parent(".s4_img_box").fadeOut(0)
// });
// $(".lnb_box> p").click(function(){
//     $(this).siblings('.s4_img_box').fadeIn(0)
    
// });
// $(".button_x").click(function(){
//     $(this).siblings("img").fadeOut(0)
//     $(this).fadeOut(0)
// });

// map_click
$(".s4_img_box").hide();
$(".hov1").click(function(){
        $(".hi1").fadeIn(0)
});
$(".button_x").click(function(){
    $(".s4_img_box").fadeOut()
});

$(".hov2").click(function(){
        $(".hi2").fadeIn(0)
});
$(".button_x").click(function(){
    $(".s4_img_box").fadeOut()
});

$(".hov3").click(function(){
        $(".hi3").fadeIn(0)
});
$(".button_x").click(function(){
    $(".s4_img_box").fadeOut()
});

$(".hov4").click(function(){
        $(".hi4").fadeIn(0)
});
$(".button_x").click(function(){
    $(".s4_img_box").fadeOut()
});

$(".hov5").click(function(){
        $(".hi5").fadeIn(0)
});
$(".button_x").click(function(){
    $(".s4_img_box").fadeOut()
});

$(".hov6").click(function(){
        $(".hi6").fadeIn(0)
});
$(".button_x").click(function(){
    $(".s4_img_box").fadeOut()
});

$(".hov7").click(function(){
        $(".hi7").fadeIn(0)
});
$(".button_x").click(function(){
    $(".s4_img_box").fadeOut()
});

// section7 slider 시작
$(document).on('ready', function () {
    $(".regular").slick({
      infinite: true, /* 맨끝이미지에서 끝나지 않고 다시 맨앞으로 이동 */
      slidesToShow:5, /* 화면에 보여질 이미지 갯수*/
      slidesToScroll: 1,  /* 스크롤시 이동할 이미지 갯수 */
      autoplay: true, /* 자동으로 다음이미지 보여주기 */
      loop:true,
      arrows: false, 
      cssEase: 'linear',  /* 등속 */
      autoplaySpeed: 0,/* 다음이미지로 넘어갈 시간 */
      speed: 7000, /* 다음이미지로 넘겨질때 걸리는 시간 */       
      //vertical:true,/* 세로방향으로 슬라이드를 원하면 추가하기// 기본값 가로방향 슬라이드*/ 
      draggable : true, 	//드래그 가능 여부 
      pauseOnHover: true,  //마우스 호버 시 슬라이드 멈춤 -default:true	
    });

  });
//   section7 slider 끝

// footer icon
$(".o_icon").hide();
$(".sns_icon li").mouseenter(function () {
    $(this).children('.icon').hide()
    $(this).children('.o_icon').show()
});
$(".sns_icon li").mouseleave(function () {
    $(this).children('.icon').show()
    $(this).children('.o_icon').hide()
});
