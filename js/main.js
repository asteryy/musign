/* 마우스를 올리면 밑에 줄이 생기게 하는 방법 */
$('.gnb li a').mouseenter(function () {
    var bar = $(this).position().left;
    // console.log(bar)
    var widNum = $(this).width();
    console.log(widNum)

    $('.bar').animate({
        'left': bar + 'px',
        /* 이때 bar는 위의 변수 bar */
        'width': widNum + 'px',
        'opacity': 1
    }, 300)
})


/* 마우스를 떼면 밑에 줄이 없어지게 하는 방법 */
$('.gnb').mouseleave(function () {
    $('.bar').animate({
        'left': 0,
        'width': 0,
        'opacity': 0
    }, 10)
})



/* menuOpen열기 */
//$('.menuOpen button.open').on('click',function(){});
$('.menuOpen button.open').click(function () {
    $('.menuOpen .menuWrap').addClass('on');
});

$('.menuWrap .close').click(function () {
    $('.menuOpen .menuWrap').removeClass('on')
});


/* background color 변경 */
$(window).scroll(function(){
    var scrollTop = $(document).scrollTop();   // var scrollTop = $(this).scrollTop();
    console.log(scrollTop)
    var offset = $('.service').offset().top - 400;  //scrollTop에 닿기 400px전에 색상 변경
    if(scrollTop > offset){
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
});


/* fontawesome icon 클릭할 때마다 슬라이드 한장씩 아래로 scroll */
$('.down_arrow').click(function(){
    $
})