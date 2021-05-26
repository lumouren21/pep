
let index = $('.attention_content ul li.active').index();
$(function(){
    //$(".recommend_content_two").css("height", $(".recommend_content_one").height());
    $('#searchWords,#searchWordsM').typeahead({
        source: function (query, process) {
            //query是输入值
            var data=[
                '语文',
                '语文教材'
            ]
            process(data);
        },
        updater: function (item) {
            return item.replace(/<[^>]+>/g,""); //这里一定要return，否则选中不显示
        },
        afterSelect: function (item) {
            //选择项之后的时间，item是当前选中的项
            //alert(item);
        },
        items: 8, //显示8条
        delay: 500 //延迟时间
    });
    /*$('.bottom_ul li').click(function(){
      $(this).siblings('li').removeClass('active');
      $(this).addClass('active');
      if ($(this).index() === 1) {
          $(".nav_ul").removeClass('show_drop');
      } else {
          $(".nav_ul").addClass('show_drop');
      }
    })*/
    $('body').click(function(event){
        if($(event.target).hasClass("position-relative")){
            if(!$(".nav_ul").hasClass("show_drop")){
                $(".nav_ul").addClass('show_drop');
            }else{
                $(".nav_ul").removeClass('show_drop');
            }
        }else{
            if(!$(".nav_ul").hasClass("show_drop")){
                $(".nav_ul").addClass('show_drop');
            }
        }
        if($(event.target).attr("src")!=undefined){
            if($(event.target).attr("src").indexOf("guanzhu.png")>-1){
                $(event.target).attr("src","images/index/guanzhu_b.png")
            }else if($(event.target).attr("src").indexOf("guanzhu_b.png")>-1){
                $(event.target).attr("src","images/index/guanzhu.png")
            }
            if($(event.target).attr("src").indexOf("myCollect.png")>-1){
                $(event.target).attr("src",$(event.target).attr("src").replace("myCollect","myCollect_b"))
            }else if($(event.target).attr("src").indexOf("myCollect_b.png")>-1){
                $(event.target).attr("src",$(event.target).attr("src").replace("myCollect_b","myCollect"))
            }
            if($(event.target).attr("src").indexOf("collect.png")>-1){
                $(event.target).attr("src",$(event.target).attr("src").replace("collect","collect_b"))
            }else if($(event.target).attr("src").indexOf("collect_b.png")>-1){
                $(event.target).attr("src",$(event.target).attr("src").replace("collect_b","collect"))
            }
        }
    })
    $(".top_profile_img").bind("click",function(event){
        event.stopPropagation()
        event.preventDefault()
        $('#dropdownMenuLink').trigger("click")
    })
})
function click_head(){
    window.location.href="index.html";
}
function click_head_ma(){
    window.location.href="material.html";
}
function open_menu(){
    $(".overlay").show();
    $(".navbar-box").css("width","220px")
}
function close_menu(){
    $(".overlay").hide();
    $(".navbar-box").css("width","0px")
}


