let data = [
    {'src': 'images/myAttention/myAttentionBook.png','title': '义务教育教科书（新疆专用）语文 一年级上册 教师专用图书','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：张三    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },	
    {'src': 'images/myAttention/myAttentionBook.png','title': '义务教育教科书（新疆专用）语文 一年级上册 教师专用图书','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：张三    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },	
    {'src': 'images/myAttention/myAttentionBook.png','title': '义务教育教科书（新疆专用）语文 一年级上册 教师专用图书','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：张三    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },	
    {'src': 'images/myAttention/myAttentionBook.png','title': '义务教育教科书（新疆专用）语文 一年级上册 教师专用图书','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：张三    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书2','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书2','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书2','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书2','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书3','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书3','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书3','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书3','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书4','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书4','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书4','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书4','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学' }
]
let page_info = {
    // 总页数
    'total_page': '4',
    // 总条数
    'total_size': '32',
    // 每页条数
    'page_size': '4'
}
$(document).ready(function() {
    for (let i of data.slice(0,4)) {
        $('.attention_right').append('<div class="attention_right_main"><div class="attention_right_img"><img src="' + i.src + '" alt=""></div><div class="attention_right_content"><div class="right_main_top"><div class="right_main_top_left">' + i.title + '</div></div><div class="right_bottom_text">' + i.number + '</div><div class="right_bottom_text">' + i.time + '</div><div class="right_bottom_text">作者：' + i.author + '</div><div class="right_bottom_text">学科：' + i.subject + '</div><div class="right_bottom_text">关键字：' + i.keyword + '</div></div><div class="attention_right_content record_right"><div class="right_bottom_text">第五课  登山游戏/P13</div><div class="right_bottom_text">2019-11-05     10:09</div><div class="right_bottom_text"><div class="continue_btn">继续阅读</div></div></div></div>')	
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
    $(".fliter_word").click(function(){
        $(".source_search").html("共有0条浏览记录");
        $('.attention_right').empty()
        $('.attention_right').html("<div class='empty_box'>暂无数据</div>")
    })
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
                $('.attention_right').append('<div class="attention_right_main"><div class="attention_right_img"><img src="' + i.src + '" alt=""></div><div class="attention_right_content"><div class="right_main_top"><div class="right_main_top_left">' + i.title + '</div></div><div class="right_bottom_text">' + i.number + '</div><div class="right_bottom_text">' + i.time + '</div><div class="right_bottom_text">作者：' + i.author + '</div><div class="right_bottom_text">学科：' + i.subject + '</div><div class="right_bottom_text">关键字：' + i.keyword + '</div></div><div class="attention_right_content record_right"><div class="right_bottom_text">第五课  登山游戏/P13</div><div class="right_bottom_text">2019-11-05     10:09</div><div class="right_bottom_text"><div class="continue_btn">继续阅读</div></div></div></div>')	
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
                $('.attention_right').append('<div class="attention_right_main"><div class="attention_right_img"><img src="' + i.src + '" alt=""></div><div class="attention_right_content"><div class="right_main_top"><div class="right_main_top_left">' + i.title + '</div></div><div class="right_bottom_text">' + i.number + '</div><div class="right_bottom_text">' + i.time + '</div><div class="right_bottom_text">作者：' + i.author + '</div><div class="right_bottom_text">学科：' + i.subject + '</div><div class="right_bottom_text">关键字：' + i.keyword + '</div></div><div class="attention_right_content record_right"><div class="right_bottom_text">第五课  登山游戏/P13</div><div class="right_bottom_text">2019-11-05     10:09</div><div class="right_bottom_text"><div class="continue_btn">继续阅读</div></div></div></div>')	
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
    $(document).on('click','.attention_right_main img',function(event){
        window.location.href="catalogInfo.html";
    })
})