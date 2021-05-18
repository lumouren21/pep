let page_details = {
    'src': 'images/pageDetail/detail_img.png',
    'platform': '已购买',
    'code': '12Qi89idsd812dsdsjcdnwids12Qi89ids 12Qi89idsd812dsdsjcdnwids',
    'img_format': 'JPGE',
    'img_size': '2MB',
    'img_import_time': '2011-12-19  18:35:36',
    'tags': [
        {'name': '详情111'},
        {'name': '详情'},
        {'name': '详情'},
        {'name': '详情'},
        {'name': '详情'}
    ],
    'data': [
        {'src': 'images/material/1.jpg'},
        {'src': 'images/material/2.jpg'},
        {'src': 'images/material/3.jpg'},
        {'src': 'images/material/4.jpg'},
        {'src': 'images/material/5.jpg'},
        {'src': 'images/material/6.jpg'},
        {'src': 'images/material/7.jpg'},
        {'src': 'images/material/8.jpg'},
        {'src': 'images/material/9.jpg'},
        {'src': 'images/material/10.jpg'},
        {'src': 'images/material/11.jpg'},
        {'src': 'images/material/12.jpg'},
        {'src': 'images/material/13.jpg'},
        {'src': 'images/material/14.jpg'},
        {'src': 'images/material/15.jpg'},
        {'src': 'images/material/1.jpg'},
        {'src': 'images/material/2.jpg'},
        {'src': 'images/material/3.jpg'},
        {'src': 'images/material/4.jpg'},
        {'src': 'images/material/5.jpg'},
        {'src': 'images/material/6.jpg'},
        {'src': 'images/material/7.jpg'},
        {'src': 'images/material/8.jpg'},
        {'src': 'images/material/9.jpg'},
        {'src': 'images/material/10.jpg'},
        {'src': 'images/material/11.jpg'},
        {'src': 'images/material/12.jpg'},
        {'src': 'images/material/13.jpg'},
        {'src': 'images/material/14.jpg'},
        {'src': 'images/material/15.jpg'}
    ]
}
let page_info = {
    // 总页数
    'total_page': '2',
    // 总条数
    'total_size': '16',
    // 每页条数
    'page_size': '8'
}
var W_width = window.screen.width
$(document).ready(function() {
    if(W_width<1200){
        page_info.page_size=12
    }else{
        page_info.page_size=14
    }
    $('.info_left_img>img').attr('src',page_details.src)
    $('.right_platform').text('状态: '+page_details.platform)
    $('.right_img_code').text('图片编号: ' +page_details.code)
    $('.img_format').text('图片格式: '+page_details.img_format)
    $('.img_size').text('图片大小: '+page_details.img_size)
    $('.img_import_time').text('图片导入时间: '+page_details.img_import_time)
    for (let i of page_details.tags){
        $('.right_tag_detail').append('<div>' + i.name + '</div>')
    }
    /*for (let i of page_details.data.slice(0,8)){
        $('.info_img_show_detail').append('<div><img src="' + i.src + '" alt=""></div>')
    }*/
    for (let i of page_details.data.slice(0,page_info.page_size)) {
        $('.container0').append('<div class="item" onclick="go_detail()"><img src="' + i.src + '"/></div>')
    }
    setTimeout(function(){
        $(".container0").rowGrid({itemSelector: ".item", minMargin: 10, maxMargin: 25, firstItemClass: "first-item"});
    },50)
    $('.pages_info').append('<div class="total_page">共' + page_info.total_page + '页/' + page_info.total_size+ '条</div>')
    for (let i=1 ; i<= parseInt(page_info.total_page); i++) {
        if (i === 1) {
            $('.pages_info').append('<div class="page_num native">' +i+ '</div>')
        } else {
            $('.pages_info').append('<div class="page_num">' +i+ '</div>')
        }
    }
    $('.pages_info').append('<div class="page_next">下一页 ></div>')
    $(".right_tag_detail").find("div").click(function(){
        var val=$(this).html();
        window.location.href="material.html?text="+val;
    })
    var clipboard = new ClipboardJS('#copy');
    clipboard.on('success', function(e) {
        $("#loadText").html("链接复制成功")
        $('.mask_layer').removeClass('mask_hidden')
        e.clearSelection();
    });
})
// 当前分页页数
let page_number = 1
$(function(){
    // 点击使用资源
    $('.source_click a').click(function(){
        if( $(".user_source_form").hasClass("user_source_hidden")){
            $(".user_source_form").removeClass('user_source_hidden')
            $(".bgBox").show()
        }else{
            $(".user_source_form").addClass('user_source_hidden')
            $(".bgBox").hide()
        }
    })
    $('.bgBox').click(function(){
        $(".user_source_form").addClass('user_source_hidden')
        $(".bgBox").hide()
    })
    // 确认
    $('.user_source_true').click(function(){
        event.stopPropagation();
        $(this).parent().addClass('user_source_hidden')
        $(".bgBox").hide()
        $("#loadText").html("资源正在下载")
        $('.mask_layer').removeClass('mask_hidden')
    })
    // 关闭下载
    $('.pop_window div:first-child').click(function(){
        $('.mask_layer').addClass('mask_hidden')
    })
    $('.pages_info div').click(function(){
        let value = $(this)[0].innerText
        if (parseInt(value) === page_number) return
        else if (value.indexOf('共') != -1) return
        else if (value === '下一页 >') {
            $('.container0').empty()
            for (let i of page_details.data.slice(page_number*parseInt(page_info.page_size),(page_number+1)*parseInt(page_info.page_size))) {
                $('.container0').append('<div class="item" onclick="go_detail()"><img src="' + i.src + '"/></div>')
            }
            setTimeout(function(){
                $(".container0").rowGrid({itemSelector: ".item", minMargin: 10, maxMargin: 25, firstItemClass: "first-item"});
            },50)
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
            $('.container0').empty()
            for (let i of page_details.data.slice((parseInt(value)-1)*parseInt(page_info.page_size),parseInt(value)*parseInt(page_info.page_size))) {
                $('.container0').append('<div class="item" onclick="go_detail()"><img src="' + i.src + '"/></div>')
            }
            setTimeout(function(){
                $(".container0").rowGrid({itemSelector: ".item", minMargin: 10, maxMargin: 25, firstItemClass: "first-item"});
            },50)
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
    $(document).on('click','.info_img_show_detail div',function(){
        window.location.href="PageDetails.html";
    })
})