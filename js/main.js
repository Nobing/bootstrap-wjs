/* 
* @Author: anchen
* @Date:   2015-05-05 02:52:45
* @Last Modified by:   anchen
* @Last Modified time: 2015-05-06 02:02:17
*/

$(document).ready(function(){
    $(window).resize(function(event) {
        
        var windowWidth = $(window).width();

        var isSmallScreen = windowWidth <768;

        $('#banner .carousel-inner .item').each(function(index, el) {
        //     var imgSrc='';

        //     if ($(window).width() <768){
        //         imgSrc = $(el).data('img-xs')
        //     }else{
        //         imgSrc = $(el).data('img-lg')
        //     }
            var imgSrc = isSmallScreen ? $(el).data('img-xs') : $(el).data('img-lg')

            $(el).css('backgroundImage', 'url('+imgSrc+')');

            if ($(window).width() <768){
                $(el).html('<img src="'+imgSrc+'" alt="" />')
            }else{
                $(el).html('');
            }
        });

    });

    $(window).trigger('resize');

    $('[data-toggle="tooltip"]').tooltip();

    var sum = 0;

    $('.nav-tabs > li').each(function(index, el) {
        sum = sum +$(el).width() + 20;
    });

    if (sum > $(window).width()) {
        $('.nav-tabs').width(sum);
        $('.ul-wrapper').css('overflow-x', 'scroll');
    }

    var arr=['全部新闻','媒体报道','行业资讯','头条新闻']

    $('.nav-cgwang li').each(function(index, el) {
        $(this).click(function(event) {
            $('#news .news-tittle').html(arr[index]);
        });
    });

    var start,end;

    $('.carousel').on('touchstart', function(event) {
        // console.log(event.originalEvent.touches[0].clientX);
        start = event.originalEvent.touches[0].clientX;
    });

    $('.carousel').on('touchmove', function(event) {
        // console.log(event);
        end = event.originalEvent.touches[0].clientX;
    });

    $('.carousel').on('touchend', function(event) {
        // if (start > end){
        //     $('.carousel').carousel('next')
        // }else if (start < end){
        //     $('.carousel').carousel('prev')
        // }
        var dis = Math.abs(start - end);

        if (dis > 30){
            $('.carousel').carousel(start > end ? 'next' : 'prev');
        }
        
    });
});