// 图书信息
let info = {'src': 'images/index/recommend_book.png', 'code': '10212125412010', 'type': '教材', 'author_one':'李武', 'book_number': '987-107-31205-2', 'publisher': '人教社', 'week': '201607', 'edition': '01','title': '义务教育教科书（新疆专用）语文 一年级上册 教师专用图书', 'subject': '品德与生活', 'author_two': '教育部', 'edit': '郭雯雯', 'source_from':'综合文科编辑室', 'discipline':'品德与生活','mark':"摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息"}
// 学科统计1
let subject_statistics = [
	{'type':'义务教育','images': [
		{'src':'images/index/update_big_img.png','title': '人教金典同步练习'},
		{'src':'images/index/update_big_img.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
	]},
	{'type':'品德生活','images': [
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/index/update_big_img.png','title': '人教金典同步练习'},
		{'src':'images/index/update_big_img.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
	]},
	{'type':'义务一年级','images': [
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/index/update_big_img.png','title': '人教金典同步练习'},
		{'src':'images/index/update_big_img.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'}
		
	]},
	{'type':'教育部','images': [
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/index/update_big_img.png','title': '人教金典同步练习'},
		{'src':'images/index/update_big_img.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'}
	]},
	{'type':'文理综合','images': [
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/index/update_big_img.png','title': '人教金典同步练习'},
		{'src':'images/catalog/catalog_book.png','title': '人教金典同步练习'},
		{'src':'images/index/update_big_img.png','title': '人教金典同步练习'}
	]},
]
// 学科统计2
let topic_name = [
	{'name': '义务教育教科书 一年级上册'},
	{'name': '义务教育教科书 一年级上册'},
	{'name': '义务教育教科书 一年级上册'},
	{'name': '义务教育教科书 一年级上册'},
	{'name': '义务教育教科书 一年级上册'},
	{'name': '义务教育教科书 一年级上册'}
]
// 相关附件
let about_accessory = [
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'},
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'},
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'},
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'},
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'},
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'},
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'},
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'},
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'},
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'},
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'},
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'},
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'},
	{'src': 'images/catalog/pdf.png', 'title': '义务教育与法治教育.pdf', 'size': '18MB', 'definition': '高清PDF'}
]
// 标签
let keyword = ['小学语文','数学']
// 记录选中的标签id
let tag_id = ''
var W_width = window.screen.width
$(document).ready(function() {
	$('.left_info_img>img').attr('src',info.src)
	$('.left_info_text div:nth-child(1)').text('选题编号: '+info.code)
	$('.left_info_text div:nth-child(2)').text('图书类型: '+info.type)
	$('.left_info_text div:nth-child(3)').text('作者: '+info.author_one)
	$('.left_info_text div:nth-child(4)').text('ISBN国内统一书号: '+info.book_number)
	$('.left_info_text div:nth-child(5)').text('出版单位: '+info.publisher)
	$('.left_info_text div:nth-child(6)').text('版次年月: '+info.week)
	$('.left_info_text div:nth-child(7)').text('版次: '+info.edition)
	
	$('.log_box div:nth-child(1)').text(info.discipline)
	$('.log_box div:nth-child(2)').text('选题编号: '+info.code)
	$('.log_box div:nth-child(3)').text('选题名称: '+info.author_one)
	$('.log_box div:nth-child(4)').text('丛书名: '+info.discipline)
	$('.log_box div:nth-child(5)').text('开列书名: '+info.publisher)
	$('.log_box div:nth-child(6)').text('合作出版者: '+info.source_from)
	$('.log_box div:nth-child(7)').text('选题类别: '+info.subject)
	$('.log_box div:nth-child(8)').text('编辑室: '+info.publisher)
	$('.log_box div:nth-child(9)').text('第一作者: '+info.author_one)
	$('.log_box div:nth-child(10)').text('第一著作方式: '+info.author_two)
	$('.log_box div:nth-child(11)').text('责任编辑编号: '+info.code)

	$('.info_top_title').text(info.title)
	$('.info_subject').text('科目: '+info.subject)
	$('.info_author_two').text('作者: '+info.author_two)
	$('.info_edit').text('责任编辑: '+info.edit)
	$('.info_source_from').text('资源来源: '+info.source_from)
	$('.info_discipline').text('学科: '+info.discipline)
	$('.info_mark').text('摘要: '+info.mark)
	
	// 学科统计1
	for (let i in subject_statistics) {
		if (parseInt(i) === 0) {
			$('.right_info_bottom>ul').append('<li class="native">' +subject_statistics[i].type + '</li>')
			if(W_width<1200){
				for (let j of subject_statistics[i].images.slice(0,3)){
					$('.info_bottom_img').append('<div class="info_bottom_img_detail"><div class="update_book"><img src="' + j.src + '" alt=""><div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div>' + j.title +'</div></div>')
				}	
			}else{
				for (let j of subject_statistics[i].images.slice(0,6)){
					$('.info_bottom_img').append('<div class="info_bottom_img_detail"><div class="update_book"><img src="' + j.src + '" alt=""><div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div>' + j.title +'</div></div>')
				}	
			}
		} else {
			$('.right_info_bottom>ul').append('<li>' +subject_statistics[i].type + '</li>')
		}
	}
	// 学科统计2
	for (let i of topic_name) {
		$('.catalog_statistics>ul').append('<li>选题名称:  ' + i.name + '</li>')
	}
	// 相关附件
	for (let i of about_accessory) {
		if(W_width<760){
			$('.catalog_accessory ul').append('<li class="d-flex align-content-center"><a href="#"><div class="box_m"><div><img src="' + i.src + '" alt=""></div><div class="statistics_word">' + i.title + '</div></div><div class="box_m0"><div class="statistics_word">' + i.size + '</div><div class="statistics_word">' + i.definition + '</div></div></a></li>')
		}else{
			$('.catalog_accessory ul').append('<li class="d-flex align-content-center"><a href="#"><div><img src="' + i.src + '" alt=""></div><div class="statistics_word">' + i.title + '</div><div class="statistics_word">' + i.size + '</div><div class="statistics_word">' + i.definition + '</div></a></li>')
		}
	}
	// 关键字
	for( let i in keyword) {
		$('.keyword_sub_word').append('<div class="keyword_word_info"><div>' + keyword[i] + '</div><div class="del_keyword" data-id="' + i + '"><img src="images/catalog/delete.png" alt=""></div></div>')
	}
})
$(function(){
	// 切换学科统计 导航栏
	$('.right_info_bottom ul li').click(function(){
	  $(this).siblings('li').removeClass('native')
	  $(this).addClass('native');
	  // 获取当前书签名
	  let book_type = $(this)[0].innerText
	  for (let i in subject_statistics) {
		if (subject_statistics[i].type === book_type ) {
			$('.info_bottom_img').empty()
			if(W_width<1200){
				for (let j of subject_statistics[i].images.slice(0,3)){
					$('.info_bottom_img').append('<div class="info_bottom_img_detail"><div class="update_book"><img src="' + j.src + '" alt=""><div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div>' + j.title +'</div></div>')
				}	
			}else{
				for (let j of subject_statistics[i].images.slice(0,6)){
					$('.info_bottom_img').append('<div class="info_bottom_img_detail"><div class="update_book"><img src="' + j.src + '" alt=""><div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div>' + j.title +'</div></div>')
				}	
			}	
		}
	  }
	})
	// 获取随机数
	function getRandomArrayElements(arr, count) {
		var shuffled = arr.slice(0),
			i = arr.length,
			min = i - count,
			temp, index;
		while(i-- > min) {
			index = Math.floor((i + 1) * Math.random());
			temp = shuffled[index];
			shuffled[index] = shuffled[i];
			shuffled[i] = temp;
		}
		return shuffled.slice(min);
	}
	// 换一批
	$('.info_bottom_change').click(function() {
		// 获取当前书签名
		let book_type = $('.right_info_bottom ul .native')[0].innerText
		for (let i in subject_statistics) {
			if (subject_statistics[i].type === book_type ) {
				let data = getRandomArrayElements(subject_statistics[i].images,6)
				$('.info_bottom_img').empty()
				if(W_width<1200){
					for (let j of subject_statistics[i].images.slice(0,3)){
						$('.info_bottom_img').append('<div class="info_bottom_img_detail"><div class="update_book"><img src="' + j.src + '" alt=""><div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div>' + j.title +'</div></div>')
					}	
				}else{
					for (let j of subject_statistics[i].images.slice(0,6)){
						$('.info_bottom_img').append('<div class="info_bottom_img_detail"><div class="update_book"><img src="' + j.src + '" alt=""><div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div>' + j.title +'</div></div>')
					}	
				}
				return
			}
		}
	})	
	// 添加关键字
	$('.modal-footer button').click(function() {				
		// 获取输入内容
		let value = $('.modal-body input').val()
		if (!value) return
		if (keyword.indexOf(value) != -1){
			alert("该标签已存在");
		}
		keyword.push(value)
		let it_index =  keyword.length-1
		$('.keyword_sub_word').append('<div class="keyword_word_info"><div>' + value + '</div><div class="del_keyword" data-id="' + it_index + '"><img src="images/catalog/delete.png" alt=""></div></div>')
		// 关闭modal
		$('.modal').modal('hide')
		$('.modal-body input').prop('value','')
	})
	// 取消 
	$('.pop_cancle').click(function() {
		$('.mask_layer').addClass('mask_hidden')
		$('.mask_layer0').addClass('mask_hidden')
	})
	// 删除
	$('.pop_del').click(function() {
		$('.keyword_sub_word>div').eq(tag_id).remove()
		$('.mask_layer').addClass('mask_hidden')
	})
})
$(document).on('click','.del_keyword',function(){
	//if($(".keyword_word_info").length==1){
	//	$('.mask_layer0').removeClass('mask_hidden')
	//}else{
		tag_id= $(this).parents(".keyword_word_info").index()
		$('.mask_layer').removeClass('mask_hidden')
	//}
})