let data = [
    {'src': 'images/myRecord/record_img.png','platform': 'OTMM','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': 'OTMM','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': 'OTMM','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': 'OTMM','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': 'OTMM','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': 'OTMM','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': 'OTMM','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': 'OTMM','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': '第二页','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': '第二页','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': '第二页','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': '第二页','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': '第二页','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': '第二页','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': '第二页','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
    {'src': 'images/myRecord/record_img.png','platform': '第二页','source': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids','time': '2011-12-19'},
]
let page_info = {
    // 总页数
    'total_page': '2',
    // 总条数
    'total_size': '16',
    // 每页条数
    'page_size': '8'
}
$(document).ready(function() { 
    for (let i of data.slice(0,8)) {
        $('.attention_right').append('<div class="attention_right_content"><div class="right_content_img"><a href="PageDetails.html"><img src="' + i.src + '"></a></div><div class="right_content_text"><div class="right_top"><div class="right_top_text">浏览平台：' + i.platform + '</div><div class="right_top_del"><img src="images/myRecord/record_del.png" ></div></div><div class="right_bottom_source_text">浏览资源：</div><div class="right_bottom_source_url">' + i.source + '</div><div class="right_bottom_source_time">浏览时间：' + i.time + '</div></div></div>')
    }
    $('.pages_info').append('<div class="total_page">共' + page_info.total_page + '页/' + page_info.total_size+ '条</div>')
    for (let i=1 ; i<= parseInt(page_info.total_page); i++) {
        if (i === 1) {
            $('.pages_info').append('<div class="page_num native">' +i+ '</div>')
        } else {
            $('.pages_info').append('<div class="page_num">' +i+ '</div>')
        }
    }
    $('.pages_info').append('<div class="page_next">下一页 ></div>')
})
// 当前分页页数
let page_number = 1
$(function(){
    $('.pages_info div').click(function(){
        let value = $(this)[0].innerText
        if (parseInt(value) === page_number) return
        else if (value.indexOf('共') != -1) return
        else if (value === '下一页 >') {
            $('.attention_right').empty()
            for (let i of data.slice(page_number*parseInt(page_info.page_size),(page_number+1)*parseInt(page_info.page_size))) {
                $('.attention_right').append('<div class="attention_right_content"><div class="right_content_img"><a href="PageDetails.html"><img src="' + i.src + '"></a></div><div class="right_content_text"><div class="right_top"><div class="right_top_text">浏览平台：' + i.platform + '</div><div class="right_top_del"><img src="images/myRecord/record_del.png" ></div></div><div class="right_bottom_source_text">浏览资源：</div><div class="right_bottom_source_url">' + i.source + '</div><div class="right_bottom_source_time">浏览时间：' + i.time + '</div></div></div>')
            }
            page_number += 1
            if (page_number === parseInt(page_info.total_page)){
                $(this).addClass('page_next_hidden')
            }
            $('.pages_info div').eq(page_number).addClass('native');
            $('.pages_info div').eq(page_number).siblings('div').removeClass('native');
            return 
        }
        else {
            page_number = parseInt(value)
            $('.attention_right').empty()
            for (let i of data.slice((parseInt(value)-1)*parseInt(page_info.page_size),parseInt(value)*parseInt(page_info.page_size))) {
                $('.attention_right').append('<div class="attention_right_content"><div class="right_content_img"><a href="PageDetails.html"><img src="' + i.src + '"></a></div><div class="right_content_text"><div class="right_top"><div class="right_top_text">浏览平台：' + i.platform + '</div><div class="right_top_del"><img src="images/myRecord/record_del.png" ></div></div><div class="right_bottom_source_text">浏览资源：</div><div class="right_bottom_source_url">' + i.source + '</div><div class="right_bottom_source_time">浏览时间：' + i.time + '</div></div></div>')
            }
            if (parseInt(value) === parseInt(page_info.total_page)){
                $(this).siblings().last().addClass('page_next_hidden')
            } else {
                $(this).siblings().last().removeClass('page_next_hidden')
            }
            $(this).addClass('native')
            $(this).siblings('div').removeClass('native')
            return 
        }
    })
    $(document).on('click','.right_top_del',function(event){
        event.stopPropagation()
        event.preventDefault()
        $(this).parents(".attention_right_content").remove();
    })
})