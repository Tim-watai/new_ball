$(document).ready(function(){


$('nav.kinds ul li').click(
    function () {
        if($(this).hasClass('active') == false){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
    }
);

$('main.market aside article.option div.mode span').click(
    function () {
        if($(this).hasClass('active') == false){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }

        if($(this).hasClass('beginner') === true)
        {
            $('main.market aside ul li.beginner').css('display','block');
            $('main.market aside ul li.senior').css('display','none');
        }
        else if($(this).hasClass('senior') === true)
        {
            $('main.market aside ul li.senior').css('display','block');
            $('main.market aside ul li.beginner').css('display','none');
        }

    }

);
$('main.market aside ul li.senior section.content span.point_box span.num_group span div').click(
    function(){
        if($(this).hasClass('active') != true){
            return $(this).addClass('active');
        }else {
            return $(this).removeClass('active');
        }
    }
);



});//total