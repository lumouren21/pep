
let vcgDeatailUrl = 'http://192.168.190.122:1876/dam-api/vcg/detailed/creative'
let damDetailUrl = 'http://192.168.190.122:1876/dam-api/dam/detail'
let vcgLikeUrl = 'http://192.168.190.122:1876/dam-api/vcg/search/list/like'
let vcgDamCollection = 'http://192.168.190.122:1876/dam-api/image/collect'
let damDownloadUrl = 'http://192.168.190.122:1876/dam-api/dam/download'
let vcgDownloadUrl = 'http://192.168.190.122:1876/dam-api/image/download/execute'
let page_size
let assetId
let url
let event
//获取跳转连接ID
function getUrlParam(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

var W_width = window.screen.width
$(document).ready(function () {
    //设置当前复制连接地址
    $("#copy").attr("data-clipboard-text", window.location.href);

    if (W_width < 1200) {
        page_size = 12
    } else {
        page_size = 14
    }
    //获取资源ID
     assetId = getUrlParam("id");

    if (assetId.indexOf("VCG") != -1) {
        //调用VCG的接口
        $.ajax({
            url: vcgDeatailUrl + "?id=" + assetId + "&ids=" + assetId + "&userId=" + userId, // 目标资源
            cache: false, //true 如果当前请求有缓存的话，直接使用缓存。如果该属性设置为 false，则每次都会向服务器请求
            async: false, //默认是true，即为异步方式-
            dataType: "json", // 服务器响应的数据类型
            type: "get", // 请求方式
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                var imageDetail = data.data[0]
                url = imageDetail.previewUrl
                $("#copy").after("  <div><a href=\"index.page?url=" + url + "\">以图搜索</a></div>")

                //文件大小
                var imageSize = imageDetail.origenPicByte / 1024 / 1024
                var size = imageSize.toFixed(2);
                //将关键字以逗号分个

                if (imageDetail.keywords != null) {
                    var keyword = imageDetail.keywords.split(',')
                    for (let i of keyword) {
                        $('.right_tag_detail').append('<div>' + i + '</div>')
                    }
                }
                event = url+","+assetId
                $('.detail>img').attr('src', url)
                $('.right_platform').text('平台: ' + "VCG")
                $('.right_img_code').text('图片编号: ' + imageDetail.resId)
                $('.img_format').text('图片格式: ' + imageDetail.assetFormat)
                $('.img_size').text('图片大小: ' + size + 'MB')
                $('.img_import_time').text('图片导入时间: ' + imageDetail.uploadTime)
                 _paq.push(['trackEvent','vcgImage',event]);
                //调用视觉中国获取相似图接口
                $.ajax({
                    url: vcgLikeUrl + "?id=" + assetId, // 目标资源
                    cache: false, //true 如果当前请求有缓存的话，直接使用缓存。如果该属性设置为 false，则每次都会向服务器请求
                    async: false, //默认是true，即为异步方式-
                    dataType: "json", // 服务器响应的数据类型
                    type: "get", // 请求方式
                    contentType: "application/json;charset=utf-8",
                    success: function (data) {
                        for (let i of data.data.list.slice(0, page_size)) {
                            $('.container0').append('<div class="item" ><a href="detail.page?id=' + i.resId + '"><img src="' + i.previewUrl + '"/></a></div>')
                        }

                    }
                })

            }
        })
    } else {
        //调用otmm
        $.ajax({
            url: damDetailUrl + "/" + assetId + "?userId=" + userId, // 目标资源
            cache: false, //true 如果当前请求有缓存的话，直接使用缓存。如果该属性设置为 false，则每次都会向服务器请求
            async: false, //默认是true，即为异步方式-
            dataType: "json", // 服务器响应的数据类型
            type: "get", // 请求方式
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                var imageDetail = data.data

                url = imageDetail.url
                console.log(url)
                //文件大小
                var imageSize = imageDetail.size / 1024 / 1024
                var size = imageSize.toFixed(2);
                //将关键字以逗号分个
                if (imageDetail.keyWord != null) {
                    var keyword = imageDetail.keyWord.split(',')
                    for (let i of keyword) {
                        $('.right_tag_detail').append('<div>' + i + '</div>')
                    }
                }
                event = url+","+assetId
                damDownloadUrl = damDownloadUrl + "/" + assetId + "/" + userId
                $('.detail>img').attr('src',url+'&ht=375&wd=535')
                $('.right_platform').text('平台: ' + 'otmm')
                $('.right_img_code').text('图片编号: ' + imageDetail.id)
                $('.img_format').text('图片格式: ' + imageDetail.mineType)
                $('.img_size').text('图片大小: ' + size + "MB")
                $('.img_import_time').text('图片导入时间: ' + imageDetail.importDate)
                 _paq.push(['trackEvent','vcgImage',event]);
                for (let i of imageDetail.imageList.slice(0, page_size)) {
                    $('.container0').append('<div class="item"><a href="detail.page?id=' + i.id + '"><img src="' + i.url + '&ht=188"/></a></div>')
                }
            }
        })
    }
    $(".right_tag_detail").find("div").click(function () {
        var val = $(this).html();
        window.location.href = "index.page?text=" + val;
    })
    var clipboard = new ClipboardJS('#copy');
    clipboard.on('success', function (e) {
        // $("#loadText").html("链接复制成功")
        // $('.mask_layer').removeClass('mask_hidden')
        e.clearSelection();
    });


})

function collect() {
    //获取当前id
    //收藏DAM
    var type = 'otmm';
    if (assetId.indexOf("VCG") != -1) {
        type = 'vcg'
    }

    $.ajax({
        url: vcgDamCollection, // 目标资源
        cache: false, //true 如果当前请求有缓存的话，直接使用缓存。如果该属性设置为 false，则每次都会向服务器请求
        async: false, //默认是true，即为异步方式-
        dataType: "json", // 服务器响应的数据类型
        type: "post", // 请求方式
        data: JSON.stringify({
            "assetId": assetId,
            "type": type,
            "url": url,
            "userId": userId
        }),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
        }
    })
}

function download() {
    if (assetId.indexOf("VCG") != -1) {
        vcgDownload()
    }
    window.location.href = damDownloadUrl
}

function vcgDownload() {
    damDownloadUrl =   vcgDownloadUrl+"/"+userId+"/"+assetId

}

// 弹窗信息
$(function () {
    // 收藏
    $(".info_left_tag>div").eq(0).click(function () {
        collect();
        $("#message-content").text("收藏成功");
        $("#message").modal("show");

    })
    // 分享
    $("#copy").click(function () {
        $("#message-content").text("分享链接复制成功")
        $("#message").modal("show");
    })
})

