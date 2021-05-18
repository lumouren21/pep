let data = [
    {'src': 'images/myAttention/myAttentionBook.png','title': '义务教育教科书（新疆专用）语文 一年级上册 教师专用图书','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：张三    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },	
    {'src': 'images/myAttention/myAttentionBook.png','title': '义务教育教科书（新疆专用）语文 一年级上册 教师专用图书','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：张三    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },	
    {'src': 'images/myAttention/myAttentionBook.png','title': '义务教育教科书（新疆专用）语文 一年级上册 教师专用图书','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：张三    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },	
    {'src': 'images/myAttention/myAttentionBook.png','title': '义务教育教科书（新疆专用）语文 一年级上册 教师专用图书','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：张三    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书2','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书2','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书2','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书2','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书3','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书3','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书3','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书3','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书4','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书4','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书4','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' },
    {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书4','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学','time': '2021.02.01' }
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
        $('.attention_right').append('<div class="attention_right_main" style="display:flex;align-items:center;"><div class="check_item"></div><div class="attention_right_img"><img src="' + i.src + '" alt=""></div><div class="attention_right_content"><div class="right_main_top"><div class="right_main_top_left">' + i.title + '</div></div><div class="right_bottom_collect_text">' + i.number + '</div><div class="right_bottom_collect_text">' + i.time + '</div><div class="right_bottom_collect_text">作者：' + i.author + '</div><div class="right_bottom_collect_text">学科：' + i.subject + '</div><div class="right_bottom_collect_text">关键字：' + i.keyword + '</div></div></div>')	
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
    $("#datepicker").datepicker({
        locale: 'zh-cn',
        format: 'yyyy.mm.dd'
    });
})
// 当前分页页数
let page_number = 1
// 是否点击全选
let if_check_all = false
$(function(){
    // 切换选项卡
    $('.download_card ul li').click(function() {
        $(this).siblings('li').removeClass('card_active');
        $(this).addClass('card_active');
        if($(this).index()==0){
            $(".fliter_word0").show();
        }else{
            $(".fliter_word0").hide();
        }
    })
    //清除
    $(".fliter_word0").click(function() {
        $.each($(".check_item"),function(key,value){
            if($(value).find("img").length!=0){
                $(value).parent().remove()
            }
        })
    })
    // 点击全选按钮
    $('.check_all div:first-child').click(function() {
        if(if_check_all){
            $(this).empty()
            if_check_all = false
            $(".check_item").html('')
        } else {
            $(this).append('<img src="images/search/checked.png">')
            $(".check_item").html('<img src="images/search/checked.png">')
            if_check_all = true
        }
    })
    // 过滤
    $('.fliter_text').click(function() {
        $(this).siblings().removeClass('search_form_hidden')
    })
    // 执行过滤
    $('.filter_sure').click(function() {
        event.stopPropagation();
        $('.fliter_word').children(':last-child').addClass('search_form_hidden')
    })
    // 取消过滤
    $('.filter_cancle').click(function() {
        event.stopPropagation();
        $('.fliter_word').children(':last-child').addClass('search_form_hidden')
    })
    $('.pages_info div').click(function(){
        let value = $(this)[0].innerText
        if (parseInt(value) === page_number) return
        else if (value.indexOf('共') != -1) return
        else if (value === '下一页 >') {
            $('.attention_right').empty()
            for (let i of data.slice(page_number*parseInt(page_info.page_size),(page_number+1)*parseInt(page_info.page_size))) {
                $('.attention_right').append('<div class="attention_right_main" style="display:flex;align-items:center;"><div class="check_item"></div><div class="attention_right_img"><img src="' + i.src + '" alt=""></div><div class="attention_right_content"><div class="right_main_top"><div class="right_main_top_left">' + i.title + '</div></div><div class="right_bottom_collect_text">' + i.number + '</div><div class="right_bottom_collect_text">' + i.time + '</div><div class="right_bottom_collect_text">作者：' + i.author + '</div><div class="right_bottom_collect_text">学科：' + i.subject + '</div><div class="right_bottom_collect_text">关键字：' + i.keyword + '</div></div></div>')	
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
                $('.attention_right').append('<div class="attention_right_main" style="display:flex;align-items:center;"><div class="check_item"></div><div class="attention_right_img"><img src="' + i.src + '" alt=""></div><div class="attention_right_content"><div class="right_main_top"><div class="right_main_top_left">' + i.title + '</div></div><div class="right_bottom_collect_text">' + i.number + '</div><div class="right_bottom_collect_text">' + i.time + '</div><div class="right_bottom_collect_text">作者：' + i.author + '</div><div class="right_bottom_collect_text">学科：' + i.subject + '</div><div class="right_bottom_collect_text">关键字：' + i.keyword + '</div></div></div>')	
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
    $(document).on('click','.attention_right_img img',function(event){
        window.location.href="catalogInfo.html";
    })
})
// 删除关键字
$(document).on('click','.check_item',function(event){
    event.stopPropagation()
    event.preventDefault()
    if($(this).find('img').length>0){
        $(this).html('')
    }else{
        $(this).append('<img src="images/search/checked.png">')
    }
})