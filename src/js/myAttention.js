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
var tag_id=null
var tag_type=0
$(document).ready(function() {
    for (let i of data.slice(0,4)) {
        $('.attention_right').append('<div class="attention_right_main"><div class="attention_right_img"><img src="' + i.src + '" alt=""></div><div class="attention_right_content"><div class="right_main_top"><div class="right_main_top_left">' + i.title + '</div><div class="right_main_top_right"><div><img src="images/myAttention/myCollect.png" ></div><div class="collect">收藏</div></div></div><div class="right_bottom_text">' + i.number + '</div><div class="right_bottom_text">' + i.time + '</div><div class="right_bottom_text">作者：' + i.author + '</div><div class="right_bottom_text">学科：' + i.subject + '</div><div class="right_bottom_text">关键字：' + i.keyword + '</div></div></div>')	
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
function addStr(ele){
    var eleStr=$(ele).html()
    var baseStr=$("#keyword").val()
    $("#keyword").val(baseStr+eleStr)
}
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
                $('.attention_right').append('<div class="attention_right_main"><div class="attention_right_img"><img src="' + i.src + '" alt=""></div><div class="attention_right_content"><div class="right_main_top"><div class="right_main_top_left">' + i.title + '</div><div class="right_main_top_right"><div><img src="images/myAttention/myCollect.png" ></div><div class="collect">收藏</div></div></div><div class="right_bottom_text">' + i.number + '</div><div class="right_bottom_text">' + i.time + '</div><div class="right_bottom_text">作者：' + i.author + '</div><div class="right_bottom_text">学科：' + i.subject + '</div><div class="right_bottom_text">关键字：' + i.keyword + '</div></div></div>')
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
                $('.attention_right').append('<div class="attention_right_main"><div class="attention_right_img"><img src="' + i.src + '" alt=""></div><div class="attention_right_content"><div class="right_main_top"><div class="right_main_top_left">' + i.title + '</div><div class="right_main_top_right"><div><img src="images/myAttention/myCollect.png" ></div><div class="collect">收藏</div></div></div><div class="right_bottom_text">' + i.number + '</div><div class="right_bottom_text">' + i.time + '</div><div class="right_bottom_text">作者：' + i.author + '</div><div class="right_bottom_text">学科：' + i.subject + '</div><div class="right_bottom_text">关键字：' + i.keyword + '</div></div></div>')
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
    // 添加关键字
    $('.modal-footer button').click(function() {				
        // 获取输入内容
        let value = $('.modal-body input').val()
        let keyword=$("#keyword").val()
        if (!value) return
        if(tag_type==1){
            let keyword=$("#keyword").val()
            $('.attention_tag>div').eq(tag_id).find("div").eq(0).html(value)
            $('.attention_tag>div').eq(tag_id).find("div").eq(0).attr("data-str",keyword)
        }else{
            $('.attention_tag').append('<div class="attention_tag_two"><div data-str="'+keyword+'">'+value+'</div><div class="edit"><img src="images/myAttention/edit.png" alt=""></div><div class="del"><img src="images/myAttention/del.png" alt=""></div></div>')
        }
        // 关闭modal
        $('.modal').modal('hide')
        $('.modal-body input').prop('value','')
    })
    $('.pop_cancle').click(function() {
        $('.mask_layer').addClass('mask_hidden')
    })
    // 删除
    $('.pop_del').click(function() {
        $('.attention_tag>div').eq(tag_id).remove()
        $('.mask_layer').addClass('mask_hidden')
    })
    $(document).on('click','.del',function(){
        if($(".attention_tag_two").length==0){
            
        }else{
            tag_id= $(this).parent(".attention_tag_two").index()
            $('.mask_layer').removeClass('mask_hidden')
        }
    })
    $(document).on('click','.edit',function(){
        if($(".keyword_word_info").length==1){
            
        }else{
            tag_type=1
            tag_id= $(this).parent(".attention_tag_two").index()
            $("#exampleModalCenterTitle").html("编辑关注方案");
            $(".btn-primary").html("保存");
            $('.modal-body input').eq(0).val($(this).parent(".attention_tag_two").find("div").eq(0).html())
            $('.modal-body input').eq(1).val($(this).parent(".attention_tag_two").find("div").attr("data-str"))
            
            $('.modal').modal('show')
        }
    })
    $('.attention_tag_one').click(function() {
        tag_type=0
        $("#exampleModalCenterTitle").html("添加关注方案");
        $(".btn-primary").html("添加");
    })
    $(document).on('click','.attention_right_main img',function(event){
        if($(event.target).attr("src")==undefined){
            window.location.href="catalogInfo.html";
        }
        if($(event.target).attr("src").indexOf("myCollect.png")==-1&&$(event.target).attr("src").indexOf("myCollect_b.png")==-1){
            window.location.href="catalogInfo.html";
        }
    })
    $(document).on('click','.attention_tag_two',function(event){
        if($(this).hasClass("action")){
            $(this).removeClass("action")
            $(this).find(".edit img").attr("src","images/myAttention/edit.png")
            $(this).find(".del img").attr("src","images/myAttention/del.png")
        }else{
            $(this).addClass("action")
            $(this).find(".edit img").attr("src","images/myAttention/edit_b.png")
            $(this).find(".del img").attr("src","images/myAttention/del_b.png")
        }
    })
    $(document).on('click','.collect',function(event){
        if($(this).parent().find("img").attr("src").indexOf("myCollect.png")>-1){
            $(this).parent().find("img").attr("src",$(this).parent().find("img").attr("src").replace("myCollect","myCollect_b"))
        }else if($(this).parent().find("img").attr("src").indexOf("myCollect_b.png")>-1){
            $(this).parent().find("img").attr("src",$(this).parent().find("img").attr("src").replace("myCollect_b","myCollect"))
        }
    })
})