$(function(){

    $('.works a').lightBox({

        overlayBgColor:'#000',
        overlayOpacity:0.8,

        imageBtnClose:"./images/close.png",
    
        txtImage:"WORKS",

        containerResizeSpeed:500,
    })


    $(window).scroll(function(){
        let num = $(document).scrollTop()
        console.log(num)

        // 스크롤바의 위치가 보다 크면 header 고정
        // 스크롤바의 위치가 보다 작으면 header 원래대로
        if(num>600){
            $('header .gnb').addClass('on')
        }else{
            $('header .gnb').removeClass('on')
        }
    })


    let aboutNum = $('#abo').offset().top
    console.log(aboutNum);

    let conNum = $('#cont').offset().top
    console.log(conNum);

    let worksNum = $('#work').offset().top
    console.log(worksNum);

    $('.gnb .list li a').click(function(){
        let name = $($(this).attr('href'))
        console.log(name)
        let target = $($(this).attr('href')).offset().top
        console.log(target)
        $('body,html').animate({scrollTop:target},1000)
    })


    $(window).scroll(function(){
        let num = $(this).scrollTop()
        
        if(num>0 && num<aboutNum){
            $('.gnb .list li a').css({color:'#444'})
            $('.gnb .list li:eq(0) a').css({color:'#62728A'})
            
        }
        if(num>=aboutNum && num<conNum){
            $('.gnb .list li a').css({color:'#444'})
            $('.gnb .list li:eq(1) a').css({color:'#62728A'})
        }
        if(num>=conNum && num<worksNum){
            $('.gnb .list li a').css({color:'#444'})
            $('.gnb .list li:eq(2) a').css({color:'#62728A'})
        }
        if(num>=worksNum){
            $('.gnb .list li a').css({color:'#444'})
            $('.gnb .list li:eq(3) a').css({color:'#62728A'})
        }


    })

})