
// 个性推荐 
let recommend = {
	'src': 'images/index/update_book.png',
	'title': '人教金典同步练习',
	'author': '作者：韩涵',
	'introduce': '新版通城学典小学数学计算机能手一年级上册，数学人教版北师版同步训练练习册精选题汇总，教材已进入义务教育教科书。'
}

var W_width = window.screen.width
  $(document).ready(function() {
	// 个性推荐
	$('.specific_content_img>img').attr('src',recommend.src)
	$('.word_one').text(recommend.title)
	$('.word_two').text(recommend.author)
	$('.word_four').text(recommend.introduce)
	// 个性推荐  换一批
	// if(W_width<760){
	// 	for (let i of change_info.slice(0,2)) {
	// 		$('.recommend_content_two').append('<div class="replace_content"><div class="replace_content_img"><img src="'+ i.src +'" alt=""> <div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div class="d-flex align-items-center justify-content-center flex-column"><div class="word_five">' + i.title + '</div><div class="word_six">作者：'+ i.word +'</div></div></div>')
	// 	}
	// }else{
	// 	for (let i of change_info.slice(0,3)) {
	// 		$('.recommend_content_two').append('<div class="replace_content"><div class="replace_content_img"><img src="'+ i.src +'" alt=""> <div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div class="d-flex align-items-center justify-content-center flex-column"><div class="word_five">' + i.title + '</div><div class="word_six">作者：'+ i.word +'</div></div></div>')
	// 	}
	// }

})
$(function(){

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
	// $('.change_batch').click(function(){
	// 	let data = getRandomArrayElements(change_info, 3)
	// 	$('.recommend_content_two').empty()
	// 	if(W_width<760){
	// 		for (let i of change_info.slice(0,2)) {
	// 			$('.recommend_content_two').append('<div class="replace_content"><div class="replace_content_img"><img src="'+ i.src +'" alt=""> <div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div class="d-flex align-items-center justify-content-center flex-column"><div class="word_five">' + i.title + '</div><div class="word_six">作者：'+ i.word +'</div></div></div>')
	// 		}
	// 	}else{
	// 		for (let i of change_info.slice(0,3)) {
	// 			$('.recommend_content_two').append('<div class="replace_content"><div class="replace_content_img"><img src="'+ i.src +'" alt=""> <div class="mask"></div><div class="imgaes"><div><img src="images/index/guanzhu.png" alt=""></div><div class="space"><a href="catalogInfo.html"><img src="images/index/shoucang.png" alt=""></a></div></div></div><div class="d-flex align-items-center justify-content-center flex-column"><div class="word_five">' + i.title + '</div><div class="word_six">作者：'+ i.word +'</div></div></div>')
	// 		}
	// 	}
	// })

})
function goDetail(){
	window.location.href="catalogInfo.html";
}