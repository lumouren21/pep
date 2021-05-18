// 最新更新
let swiper = [
	{'src': 'images/index/update_book.png'},
	{'src': 'images/index/recommend_book.png'},
	{'src': 'images/index/update_big_img.png'},
	{'src': 'images/index/update_book.png'},
	{'src': 'images/index/recommend_book.png'},
	{'src': 'images/index/update_big_img.png'},
	{'src': 'images/index/update_book.png'},
	{'src': 'images/index/recommend_book.png'},
	{'src': 'images/index/update_big_img.png'},
	{'src': 'images/index/update_book.png'},
	{'src': 'images/index/recommend_book.png'},
	{'src': 'images/index/update_big_img.png'},
	{'src': 'images/index/update_book.png'},
	{'src': 'images/index/recommend_book.png'},
	{'src': 'images/index/update_big_img.png'},
]
// 个性推荐 
let recommend = {
	'src': 'images/index/update_book.png',
	'title': '人教金典同步练习',
	'author': '作者：韩涵',
	'introduce': '新版通城学典小学数学计算机能手一年级上册，数学人教版北师版同步训练练习册精选题汇总，教材已进入义务教育教科书。'
}
// 个性推荐  换一批 
  let change_info = [{
		'src': 'images/index/update_big_img.png',
		'title': '人教金典同步练习',
		'word': '韩涵'
	},{
		'src': 'images/index/recommend_book.png',
		'title': '人教金典同步练习',
		'word': '韩涵'
	},{
		'src': 'images/index/update_book.png',
		'title': '人教金典同步练习',
		'word': '韩涵'
	},{
		'src': 'images/index/update_book.png',
		'title': '人教金典同步练习',
		'word': '韩涵'
	},{
		'src': 'images/index/update_big_img.png',
		'title': '人教金典同步练习',
		'word': '韩涵'
	}
]
// 社会关注
let society = [
	{'name': '法治','num': 12767},
	{'name': '语文','num': 8000},
	{'name': '年级','num': 10000},
	{'name': '历史','num': 2345},
	{'name': '小学','num': 9876}
]
// 热门搜寻
let search = [
	{'index':'01','text':'义务语文一年级'},
	{'index':'02','text':'义务语文二年级'},
	{'index':'03','text':'义务语文三年级'},
	{'index':'04','text':'义务语文四年级'},
	{'index':'05','text':'义务语文五年级'},
]
var W_width = window.screen.width
  $(document).ready(function() {
	// 最新更新
	if(W_width<760){
		for (let i of swiper.slice(0,2)) {
			$('.last_update_img_info').append('<div class="update_book"><img src="' + i.src + '" alt=""><div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div>')
		}
	}else{
		for (let i of swiper.slice(0,8)) {
			$('.last_update_img_info').append('<div class="update_book"><img src="' + i.src + '" alt=""><div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div>')
		}
	}
	$('.last_update_img').children('div:first-child').addClass('arrow_hidden')
	if (swiper.length <= swiper_show) {
		$('.last_update_img').children('div:last-child').addClass('arrow_hidden')
	}
	// 个性推荐
	$('.specific_content_img>img').attr('src',recommend.src)
	$('.word_one').text(recommend.title)
	$('.word_two').text(recommend.author)
	$('.word_four').text(recommend.introduce)
	// 个性推荐  换一批 
	if(W_width<760){
		for (let i of change_info.slice(0,2)) {
			$('.recommend_content_two').append('<div class="replace_content"><div class="replace_content_img"><img src="'+ i.src +'" alt=""> <div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div class="d-flex align-items-center justify-content-center flex-column"><div class="word_five">' + i.title + '</div><div class="word_six">作者：'+ i.word +'</div></div></div>')
		}
	}else{
		for (let i of change_info.slice(0,3)) {
			$('.recommend_content_two').append('<div class="replace_content"><div class="replace_content_img"><img src="'+ i.src +'" alt=""> <div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div class="d-flex align-items-center justify-content-center flex-column"><div class="word_five">' + i.title + '</div><div class="word_six">作者：'+ i.word +'</div></div></div>')
		}
	}
	// 获取数组中的最大值 (以最大值为标准 计算百分比)
	var maxNum = Math.max.apply(Math, society.map(function(o) {return o.num}))
	// 社会关注 
	for (let i of society) {
		$('.society_content').append('<div class="society_content_info"><a href="search.html?val=' + i.name + '"><div class="society_text">' + i.name + '</div><div class="society_plan"><div class="society_plan_info" style="width:' + i.num/maxNum*100 + '%"></div></div><div class="society_num">' + i.num + '</div></a> </div>'
		)
	}
	// 热门搜寻
	let bgc = ''
	for (let i of search) {
		if (i.index === '01'){
			bgc = '#FF5050'
		} else if (i.index === '02') {
			bgc = '#FD8164'
		} else if (i.index === '03') {
			bgc = '#FABF00'
		} else {
			bgc = '#CBCBCB'
		}
		$('.search_content').append('<div class="d-flex align-items-center"><a href="catalogInfo.html"><div class="search_number" style="background-color:' + bgc + '">' + i.index + '</div> <div class="search_text">' + i.text + '</div></a></div>')
	}
})
// 第一张图片索引
let swiper_index = 0
// 显示图片个数
let swiper_show = 8
$(function(){
	if(W_width<760){
		swiper_show = 2
	}
	// 最新更新右箭头
	$('.arrow_right').click(function(){
		swiper_index += 1
		$('.last_update_img_info').empty()
		for (let i of swiper.slice(swiper_index,swiper_show+swiper_index)){
			$('.last_update_img_info').append('<div class="update_book"><img src="' + i.src + '" alt=""><div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div>')}
		// swiper.length 数据总条数
		// swiper_show 显示图片个数
		// swiper_index  第一张图片索引
		// 控制右侧箭头隐藏
		$('.last_update_img').children('div:first-child').removeClass('arrow_hidden').addClass('arrow_show')
		if (swiper.length - swiper_show == swiper_index) {
			$('.last_update_img').children('div:last-child').addClass('arrow_hidden')
		}
	})
	// 最新更新左箭头
	$('.arrow_left').click(function(){
		swiper_index -= 1
		$('.last_update_img_info').empty()
		for (let i of swiper.slice(swiper_index,swiper_show+swiper_index)){
$('.last_update_img_info').append('<div class="update_book"><img src="' + i.src + '" alt=""><div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div>')}
		// swiper.length 数据总条数
		// swiper_show 显示图片个数
		// swiper_index  第一张图片索引
		// 控制右侧箭头隐藏
		$('.last_update_img').children('div:last-child').removeClass('arrow_hidden').addClass('arrow_show')
		if (swiper_index == 0) {
			$('.last_update_img').children('div:first-child').addClass('arrow_hidden')
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
	$('.change_batch').click(function(){
		let data = getRandomArrayElements(change_info, 3)
		$('.recommend_content_two').empty()
		if(W_width<760){
			for (let i of change_info.slice(0,2)) {
				$('.recommend_content_two').append('<div class="replace_content"><div class="replace_content_img"><img src="'+ i.src +'" alt=""> <div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div class="d-flex align-items-center justify-content-center flex-column"><div class="word_five">' + i.title + '</div><div class="word_six">作者：'+ i.word +'</div></div></div>')
			}
		}else{
			for (let i of change_info.slice(0,3)) {
				$('.recommend_content_two').append('<div class="replace_content"><div class="replace_content_img"><img src="'+ i.src +'" alt=""> <div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div class="d-flex align-items-center justify-content-center flex-column"><div class="word_five">' + i.title + '</div><div class="word_six">作者：'+ i.word +'</div></div></div>')
			}
		}
	})
	$(document).on('click','.society_content_info div',function(event){
		//var text=$(this).find(".society_text").html()
		//window.location.href="search.html?val="+text;
	})
})
function goDetail(){
	window.location.href="catalogInfo.html";
}