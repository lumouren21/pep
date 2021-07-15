
let collectUrl = "http://192.168.190.122:1876/dam-api/personal/mark"
let suggestionUrl = 'http://192.168.190.122:1876/dam-api/search/suggestion'
let index = $('.attention_content ul li.active').index();
let  userId
let  userName
let employeeNumber
let oaPhoto =  "https://wechattest.pep.com.cn/photo/";
let  userHeader

function getUserId() {
	userId = localStorage.getItem("userId");
	userName = localStorage.getItem("userName");
	employeeNumber = localStorage.getItem("employeeNumber");
	if(employeeNumber!=null || employeeNumber!=''){
		userHeader = oaPhoto+employeeNumber+'.png';
	}
	if(userId==null || userId==" "){
		// window.location.href = "https://192.168.207.86:9443/oauth2/endpoint/IAMProvider/authorize?response_type=code&client_id=tsclient&redirect_uri=http://192.168.190.122:1776/pep"
	}
}

$(document).ready(function () {
	getUserId()
	document.getElementById("userName").innerText=userName
	if(userHeader!=null){
		document.getElementById("img").innerText=userHeader
	}
})


$(function() {
	//$(".recommend_content_two").css("height", $(".recommend_content_one").height());
	var xhr;
	$('#searchWords,#searchWordsM').typeahead({
		source: function (query, process) {
			//query是输入值
			let data = []
			try {
				xhr.abort();
			} catch (e) {
			}
			xhr = $.ajax({
				url: suggestionUrl + "/" + query, // 目标资源
				async: true, //默认是true，即为异步方式-
				dataType: "json", // 服务器响应的数据类型
				type: "get", // 请求方式
				contentType: "application/json;charset=utf-8",
				success: function (obj) {
					data = obj.data;
					process(data);
				}
			})
		},
		/*
		updater: function (item) {
			return item.replace(/<[^>]+>/g,""); //这里一定要return，否则选中不显示
		},
		afterSelect: function (item) {
			//选择项之后的时间，item是当前选中的项
			//alert(item);
		},
		 */
		items: 8, //显示8条
		delay: 1000, //延迟时间
		changeInputOnSelect: false,
		changeInputOnMove: false
	});

	$('body').click(function (event) {
		if ($(event.target).hasClass("position-relative")) {
			if (!$(".nav_ul").hasClass("show_drop")) {
				$(".nav_ul").addClass('show_drop');
			} else {
				$(".nav_ul").removeClass('show_drop');
			}
		} else {
			if (!$(".nav_ul").hasClass("show_drop")) {
				$(".nav_ul").addClass('show_drop');
			}
		}
	});

	$(".action-collect").on("click", function () {
		var topicId = $(this).data('id');
		$.ajax({
			url: collectUrl, // 目标资源
			data: JSON.stringify({
				"topicId": id,
				"userId": userId,
			}),
			dataType: "json", // 服务器响应的数据类型
			type: "POST", // 请求方式
			contentType: "application/json;charset=utf-8",
			success: function (data) {
				var collectStatus = data.data.status;
				var $myCollect = $(".action-collect img");
				if (collectStatus == 0) {
					$myCollect.attr("src", $myCollect.attr("src").replace("myCollect", "myCollect_b"));
				} else {
					$myCollect.attr("src", $myCollect.attr("src").replace("myCollect_b", "myCollect"));
				}
			}
		})
	});
	/*
            //收藏
            var id = event.target.id
            $.ajax({
                url: collectUrl, // 目标资源
                cache: false, //true 如果当前请求有缓存的话，直接使用缓存。如果该属性设置为 false，则每次都会向服务器请求
                async: false, //默认是true，即为异步方式-
                data: JSON.stringify({
                    "topicId": id,
                    "userId": userId,
                }),
                dataType: "json", // 服务器响应的数据类型
                type: "POST", // 请求方式
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                }
            })
            $(event.target).attr("src",$(event.target).attr("src").replace("myCollect","myCollect_b"))
        }else if($(event.target).attr("src").indexOf("myCollect_b.png")>-1){
            var id = event.target.id
            //删除
            $.ajax({
                url: collectUrl + "/" + userId + "/" + id, // 目标资源
                cache: false, //true 如果当前请求有缓存的话，直接使用缓存。如果该属性设置为 false，则每次都会向服务器请求
                async: false, //默认是true，即为异步方式-
                dataType: "json", // 服务器响应的数据类型
                type: "PUT", // 请求方式
                contentType: "application/json;charset=utf-8",
                success: function (data) {

                }
            })
            $(event.target).attr("src",$(event.target).attr("src").replace("myCollect_b","myCollect"))
        }
        if($(event.target).attr("src").indexOf("collect.png")>-1){
            $(event.target).attr("src",$(event.target).attr("src").replace("collect","collect_b"))
        }else if($(event.target).attr("src").indexOf("collect_b.png")>-1){
            $(event.target).attr("src",$(event.target).attr("src").replace("collect_b","collect"))
        }
        */

	$(".top_profile_img").bind("click", function (event) {
		event.stopPropagation()
		event.preventDefault()
		$('#dropdownMenuLink').trigger("click")
	});
});

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


