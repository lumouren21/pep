let data = [
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
let page_info = {
    // 总页数
    'total_page': '2',
    // 总条数
    'total_size': '16',
    // 每页条数
    'page_size': '14'
}
// 当前分页页数
let page_number = 1
var W_width = window.screen.width
$(document).ready(function() {
    if(W_width<1200){
        page_info.page_size=12
    }else{
        page_info.page_size=14
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
    $('.pages_info div').click(function(){
        let value = $(this)[0].innerText
        if (parseInt(value) === page_number) return
        else if (value.indexOf('共') != -1) return
        else if (value === '下一页 >') {
            $('.container0').empty()
            for (let i of data.slice(page_number*parseInt(page_info.page_size),(page_number+1)*parseInt(page_info.page_size))) {
                $('.container0').append('<div class="item" onclick="go_detail()"><img src="' + i.src + '"/></div>')
            }
            page_number += 1
            if (page_number === parseInt(page_info.total_page)){
                $(this).addClass('page_next_hidden')
            }
            $('.pages_info div').eq(page_number).addClass('native');
            $('.pages_info div').eq(page_number).siblings('div').removeClass('native');
            setTimeout(function(){
                $(".container0").rowGrid({itemSelector: ".item", minMargin: 10, maxMargin: 25, firstItemClass: "first-item"});
            },50)
            return 
        }
        else {
            page_number = parseInt(value)
            $('.container0').empty()
            for (let i of data.slice((parseInt(value)-1)*parseInt(page_info.page_size),parseInt(value)*parseInt(page_info.page_size))) {
                $('.container0').append('<div class="item" onclick="go_detail()"><img src="' + i.src + '"/></div>')
            }
            if (parseInt(value) === parseInt(page_info.total_page)){
                $(this).siblings().last().addClass('page_next_hidden')
            } else {
                $(this).siblings().last().removeClass('page_next_hidden')
            }
            $(this).addClass('native')
            $(this).siblings('div').removeClass('native')
            setTimeout(function(){
                $(".container0").rowGrid({itemSelector: ".item", minMargin: 10, maxMargin: 25, firstItemClass: "first-item"});
            },50)
            return 
        }
    })

    var urlVal=getUrlParam("text")
    if(urlVal){
        $("#searchWords").val(decodeURI(urlVal));
    }
    for (let i of data.slice(0,page_info.page_size)) {
        $('.container0').append('<div class="item" onclick="go_detail()"><img src="' + i.src + '"/></div>')
    }
    $(".hotText").click(function(){
        var textVal=$(this).html();
        $("#searchWords").val(textVal)
    })
    setTimeout(function(){
        $(".container0").rowGrid({itemSelector: ".item", minMargin: 10, maxMargin: 25, firstItemClass: "first-item"});
    },50)
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
function go_detail(){
    window.location.href="PageDetails.html";
}