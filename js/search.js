	// 搜索条件
    let search_condition = [
        {'type': '图书分类','content': [
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'},
            {'text': '图书教材'}
        ]},
        {'type': '教育等级','content': [
            {'text': '教育教材'},
            {'text': '教育教材'},
            {'text': '教育教材'},
            {'text': '教育教材'}
        ]},
        {'type': '教育学科','content': [
            {'text': '教材11'},
            {'text': '教材11'},
            {'text': '教材11'},
            {'text': '教材11'}
        ]},
        {'type': '教育学段','content': [
            {'text': '教材22'},
            {'text': '教材22'},
            {'text': '教材22'},
            {'text': '教材22'}
        ]}
    ]
    // 查询结果标注
    let search_label = {
        'num': 128,
        'condition':'义务教育'
    }
    // 图书数据
    let data = [
        {'src': 'images/myAttention/myAttentionBook.png','title': '义务教育教科书（新疆专用）语文 一年级上册 教师专用图书','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：张三    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......'},	
        {'src': 'images/myAttention/myAttentionBook.png','title': '义务教育教科书（新疆专用）语文 一年级上册 教师专用图书','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：张三    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },	
        {'src': 'images/myAttention/myAttentionBook.png','title': '义务教育教科书（新疆专用）语文 一年级上册 教师专用图书','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：张三    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },	
        {'src': 'images/myAttention/myAttentionBook.png','title': '义务教育教科书（新疆专用）语文 一年级上册 教师专用图书','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：张三    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },
        {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书2','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },
        {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书2','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },
        {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书2','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },
        {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书2','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },
        {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书3','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },
        {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书3','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },
        {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书3','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },
        {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书3','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },
        {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书4','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },
        {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书4','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },
        {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书4','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' },
        {'src': 'images/myAttention/myAttentionBook.png','title': '测试图书4','number': 'ISBN国内统一书号：978-107-3256471  选择编号：10212125412010', 'time': '责任编辑：李四    资源来源：综合文科教室    版次年月：20180706', 'author': '李武', 'subject': '语文教研室','keyword': '文学111', 'content': '电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线<span>人教版</span>电子课本导航服务,涵盖小学、初中和高中电子教科书。电子课本网提供在线人教版......' }
    ]
    let page_info = {
        // 总页数
        'total_page': '4',
        // 总条数
        'total_size': '32',
        // 每页条数
        'page_size': '6'
    }
    $(document).ready(function() {
        for (let i in search_condition) {
            $('.search_main').append('<div class="search_main_content"><div class="img_type">' + search_condition[i].type + '</div><div class="total action">全部</div><div class="search_text"></div></div>')
            for (let j of search_condition[i].content) {
                $($('.search_text')[i]).append('<div style="cursor:pointer;" class="total">' + j.text + '</div>')
            }
        }
        $('.search_num').text(search_label.num)
        $('.search_condition_text').text(search_label.condition)
        for (let i of data.slice(0,8)) {
            $('.attention_right').append('<div class="attention_right_main"><div class="attention_right_img"><a href="catalogInfo.html"><img src="' + i.src + '" alt=""></a></div><div class="attention_right_info"><div class="attention_right_content"><div class="right_main_top"><div class="right_main_top_left">' + i.title + '</div></div><div class="right_bottom_text">' + i.number + '</div><div class="right_bottom_text">' + i.time + '</div><div class="right_bottom_text">作者：' + i.author + '</div><div class="right_bottom_text">学科：' + i.subject + '</div><div class="right_bottom_text">关键字：' + i.keyword + '</div></div><div class="right_main_bottom"><a href="#">' + i.content + '</a></div></div></div>')
            $('.card-columns0').append('<a class="card card-reveal" href="javascript:go_detail()"><img class="card-img-top" src="' + i.src + '" /><div class="card-body"><div class="card-title">' + i.title + '</div></div></a>')
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
        $(".total").click(function(){
            $(this).parents(".search_main_content").find(".total").removeClass("action");
            $(this).addClass("action");
        })
        var urlVal=getUrlParam("text")
        if(urlVal){
            $("#searchBox").val(decodeURI(urlVal));
        }
    })
    function getUrlParam(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }
    // 当前分页页数
    let page_number = 1
    // 筛选项的显隐
    let flag = true
    // 筛选选项默认为第一个(默认)
    let screen_index = 0
    var now_type=0;
    $(function(){
        // 排序 (默认正序)
        $('.order_click').click(function() {
            $('.attention_right').empty()
            if($(".order_click").find("img").hasClass("rotate180")){
                $(".order_click").find("img").removeClass("rotate180")
            }else{
                $(".order_click").find("img").addClass("rotate180")
            }
            for (let i of data.reverse().slice(0,4)) {
                $('.attention_right').append('<div class="attention_right_main"><div class="attention_right_img"><a href="catalogInfo.html"><img src="' + i.src + '" alt=""></a></div><div class="attention_right_info"><div class="attention_right_content"><div class="right_main_top"><div class="right_main_top_left">' + i.title + '</div></div><div class="right_bottom_text">' + i.number + '</div><div class="right_bottom_text">' + i.time + '</div><div class="right_bottom_text">作者：' + i.author + '</div><div class="right_bottom_text">学科：' + i.subject + '</div><div class="right_bottom_text">关键字：' + i.keyword + '</div></div><div class="right_main_bottom"><a href="#">' + i.content + '</a></div></div></div>')
                $('.card-columns0').append('<a class="card card-reveal" href="javascript:go_detail()"><img class="card-img-top" src="' + i.src + '" /><div class="card-body"><div class="card-title">' + i.title + '</div></div></a>')}
        })
        // 筛选出结果
        $('.bg_img li').click(function() {
            event.stopPropagation();
            if(!$(this).children(':last-child').has('img').length){
                $(this).children(':last-child').append('<img src="images/search/checked.png" alt="">')
                $(this).siblings('li').children(':last-child').empty()
                screen_index = $(this).index
                $('.screen_click').children(':last-child').addClass('bg_img_hidden')
                flag = true
            }	
            
        })
        // 点击筛选
        $('.screen_click').click(function() {
            if (flag) {
                $(this).children(':last-child').removeClass('bg_img_hidden')
                if(!$('.bg_img li').eq(screen_index).children(':last-child').has('img').length){
                    $('.bg_img li').eq(screen_index).children(':last-child').append('<img src="images/search/checked.png" alt="">')
                }
                flag = false
            } else {
                $(this).children(':last-child').addClass('bg_img_hidden')
                flag = true
            }
        })
        // 切换筛选图标
        $('.show_content img').click(function() {
            if(now_type==1){
                now_type=0
                $("#typeBox0").show();
                $("#typeBox1").hide();
            }else{
                now_type=1
                $("#typeBox1").show();
                $("#typeBox0").hide();
            }
            $(this).attr('src',$(this).attr('src')=='images/search/hidden.png'?'images/search/show.png':'images/search/hidden.png');
        })
        // 分页
        $('.pages_info div').click(function(){
            let value = $(this)[0].innerText
            if (parseInt(value) === page_number) return
            else if (value.indexOf('共') != -1) return
            else if (value === '下一页 >') {
                $('.attention_right').empty()
                for (let i of data.slice(page_number*parseInt(page_info.page_size),(page_number+1)*parseInt(page_info.page_size))) {
                    $('.attention_right').append('<div class="attention_right_main"><div class="attention_right_img"><a href="catalogInfo.html"><img src="' + i.src + '" alt=""></a></div><div class="attention_right_info"><div class="attention_right_content"><div class="right_main_top"><div class="right_main_top_left">' + i.title + '</div></div><div class="right_bottom_text">' + i.number + '</div><div class="right_bottom_text">' + i.time + '</div><div class="right_bottom_text">作者：' + i.author + '</div><div class="right_bottom_text">学科：' + i.subject + '</div><div class="right_bottom_text">关键字：' + i.keyword + '</div></div><div class="right_main_bottom"><a href="#">' + i.content + '</a></div></div></div>')
                    $('.card-columns0').append('<a class="card card-reveal" href="javascript:go_detail()"><img class="card-img-top" src="' + i.src + '" /><div class="card-body"><div class="card-title">' + i.title + '</div></div></a>')
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
                    $('.attention_right').append('<div class="attention_right_main"><div class="attention_right_img"><a href="catalogInfo.html"><img src="' + i.src + '" alt=""></a></div><div class="attention_right_info"><div class="attention_right_content"><div class="right_main_top"><div class="right_main_top_left">' + i.title + '</div></div><div class="right_bottom_text">' + i.number + '</div><div class="right_bottom_text">' + i.time + '</div><div class="right_bottom_text">作者：' + i.author + '</div><div class="right_bottom_text">学科：' + i.subject + '</div><div class="right_bottom_text">关键字：' + i.keyword + '</div></div><div class="right_main_bottom"><a href="#">' + i.content + '</a></div></div></div>')
                    $('.card-columns0').append('<a class="card card-reveal" href="javascript:go_detail()"><img class="card-img-top" src="' + i.src + '" /><div class="card-body"><div class="card-title">' + i.title + '</div></div></a>')
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
    })
    function go_detail(){
        window.location.href="catalogInfo.html";
    }