var isShowCatalog = 0; //判断目录是否展示中
var isFontSize = 0; //判断调整字体大小模块是否展示中
var isWordCitation = 0; //判断词引是否展示中
var phoneShow = 0; //判断手机端是否展示中
var pageNumber = 1;
var ptfUrl = ''; //路径
var topicId = getUrlParam("bookTopicId");
var pdfPreviewUrl = "http://testdam.pep.com.cn:9999/?furl=";
$(function() {
    if(topicId == "") {
        topicId = "10200016219012";
    }
    //附件才会传入bookName
    var bookName = getUrlParam("bookName");
    //收藏
    $("#collectionBtn").attr("onclick", "bookMark('" + userId + "','" + topicId + "')");
        //		//监控阅读页数,添加浏览记录
        window.addEventListener('message',function(event){
            var browseRecordInfo = {
                "userId": userId,
                "topicId": topicId,
                "historyLocation": event.data
            }
            $.ajax({
                type: "post",
                url: damApiHost + "personal/history",
                contentType: 'application/json;charset=UTF-8',
                DataType: "json",
                data: JSON.stringify(browseRecordInfo),
            });
        });
        //得到正文路径
        $.ajax({
            type: "get",
            url: damApiHost + "book/filePath/" + topicId,
            DataType: "json",
            async: true,
            success: function(data) {
                if(data.code == 200) {
                    //切换dam路径为代理路径，防止跨域
                    // ptfUrl = data.data.text[0].url.replace(damHost, damAgentHost);
                    //得到浏览页数
                    // var page = 1;
                    // if(data.data.bookHistory != null) {
                    //     page = parseInt(data.data.bookHistory.historyLocation);
                    // }
                    //添加数据
                    $("#pdfViewer").attr('src', pdfPreviewUrl+ data.data.file_path);
                    // $("#pdfViewer").attr('src', pdfHost + '?file=' + encodeURIComponent(ptfUrl) + "&page=" + page);
                    //回调
                    var iframe = document.getElementById("pdfViewer");
                    iframe.onload = function(){
                        iframe.contentWindow.postMessage(userId,'*');
                    };
                    $("#bookName").html(data.data.jz_book_name);
                    //标题
                    $("title").html(data.data.jz_book_name);
                }
            },
            error: function() {
                alert("异常");
            }
        });
        //获得目录
        var liHtml = '';
        $.ajax({
            url: damApiHost+"search/xml/"+topicId,
            dataType: 'xml',
            type: 'GET',
            timeout: 2000,
            error: function(xml) {
                //	            alert("加载XML 文件出错！");
            },
            success: function(xml) {
                $(xml).find("toc").children("tocdiv").each(function(i) {
                    liHtml += '<li class="title">' +
                        '<a href="javascript:void(0);" onclick="catalogJump(' + $(this).attr("pagenum").substring(0, $(this).attr("pagenum").indexOf("-")) + ')">' +
                        '<p>' + $(this).children("title").text() + '<span class="text-right">' + $(this).attr("pagenum") + '</span></p>' +
                        '</a>' +
                        '</li>';
                    $(this).children("tocdiv").each(function(i) {
                        liHtml += '<li class="title">' +
                            '<a href="javascript:void(0);" onclick="catalogJump(' + $(this).attr("pagenum").substring(0, $(this).attr("pagenum").indexOf("-")) + ')">' +
                            '<p>&nbsp;&nbsp;&nbsp;' + $(this).children("title").text() + '<span class="text-right">' + $(this).attr("pagenum") + '</span></p>' +
                            '</a>' +
                            '</li>';
                        $(this).children("tocdiv").each(function(i) {
                            liHtml += '<li>' +
                                '<a href="javascript:void(0);" onclick="catalogJump(' + $(this).attr("pagenum").substring(0, $(this).attr("pagenum").indexOf("-")) + ')">' +
                                '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + $(this).children("title").text() + '<span>' + $(this).attr("pagenum") + '</span></p>' +
                                '</a>' +
                                '</li>';
                        });
                    });
                });
                $("#catalogUl").append(liHtml);
            }
        });

    //附件模态框剧中
    $('#relevantModal').on('show.bs.modal', function(e) {
        // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零
        $(this).css('display', 'block');
        var modalHeight = $(window).height() / 3 - $('#youModel .modal-dialog').height() / 3;
        $(this).find('.modal-dialog').css({
            'margin-top': modalHeight
        });
    });
    //附件
    $("#enclosureBtn").click(function() {
        var PdfUlhtml = '';
        $.ajax({
            type: "get",
            url: damApiHost + "book/relevantAttach/" + topicId,
            DataType: "json",
            async: true,
            success: function(data) {
                $.each(data.data.attachment_path, function(i, item) {
                    PdfUlhtml = PdfUlhtml + '<li>' +
                        '<a href=bookRead.page?ptfUrl=' + encodeURIComponent(item.url) + '&bookName=' + encodeURIComponent(item.name) + ' target="_blank">' +
                        '<p>' +
                        '<span>' + (i + 1) + '.</span>' +
                        '<span><img src="../cm_img/bookInfo/tupian_16.jpg"/></span>' +
                        '<span>' + item.name + '</span>' +
                        '</p>' +
                        '</li>' +
                        '<li>';
                });
                $("#pdfUl").empty();
                $("#pdfUl").append(PdfUlhtml);
                $('#relevantModal').modal('show');
            },
            error: function() {
                layer.msg("异常", {
                    time: 2000,
                    icon: 5,
                    shift: 6
                });
            }
        });
    });
    //查询框回车事件绑定
    $('#searchInput').bind('keypress', function(event) {
        if (event.keyCode == "13") {
            event.preventDefault();
            //回车执行查询
            $('.searchBtn').click();
        }
    });
    //隐藏回到顶部
    $("#toTop").hide();
    //判断内容是否充满全屏
    if($(".backgroundWhite").height() < $(window).height()) {
        $(".backgroundWhite").height($(window).height());
        $(window).resize(function() {
            $(".backgroundWhite").height($(window).height());
        });
    }
    //显示回到顶部
    $(window).scroll(function() {
        if($(document).scrollTop() >= $(window).height()) {
            $("#toTop").fadeIn("1000");
        } else {
            $("#toTop").fadeOut("1000");
        }
    });
    //手机端隐藏
    $(window).resize(function() {
        if($(window).width() < 768) {
            isWordCitation = 1;
            showWordCitation();
        }
    });
    //展示目录与字体大小切换
    $(".bookInfo").click(function() {
        if($(window).width() < 768) {
            if(phoneShow == 0) {
                $(".menu").removeClass("hidden-xs");
                phoneShow = 1;
            } else {
                $(".menu").addClass("hidden-xs");
                isWordCitation = 1;
                showWordCitation();
                phoneShow = 0;
            }
        }
    });
    $("#sizeUp").click(function() {
        var size = $("#fontSizeSpan").html();
        size = Number(size) + 1;
        $("#fontSizeSpan").html(size);
        $("para").css({
            "font-size": size
        });
    });
    $("#sizeDown").click(function() {
        var size = $("#fontSizeSpan").html();
        size = parseInt(size) - 1;
        $("#fontSizeSpan").html(size);
        $("para").css({
            "font-size": size
        });
    });
});

function showCatalog() {
    //隐藏调整字体大小模块
    $("#fontSize").removeClass();
    $("#fontSize").addClass("hidden");
    $("#showFontSizeA").removeClass("active");
    isFontSize = 0;
    //隐藏词引
    $("#wordCitation").removeClass();
    $("#wordCitation").addClass("hidden");
    $("#showWordCitationA").removeClass("active");
    isWordCitation = 0;
    if(isShowCatalog == 0) {
        $("#catalog").toggleClass("hidden", "show");
        $("#borderHidn").removeClass();
        $("#borderHidn").addClass("borderHidn1 hidden-xs");
        $("#showCatalogA").addClass("active");
        isShowCatalog = 1;
    } else {
        $("#catalog").removeClass();
        $("#catalog").addClass("hidden");
        $("#showCatalogA").removeClass("active");
        isShowCatalog = 0;
    }
}

function showFontSize() {
    //隐藏目录
    $("#catalog").removeClass();
    $("#catalog").addClass("hidden");
    $("#showCatalogA").removeClass("active");
    isShowCatalog = 0;
    //隐藏词引
    $("#wordCitation").removeClass();
    $("#wordCitation").addClass("hidden");
    $("#showWordCitationA").removeClass("active");
    isWordCitation = 0;
    if(isFontSize == 0) {
        $("#fontSize").toggleClass("hidden", "show");
        $("#borderHidn").removeClass();
        $("#borderHidn").addClass("borderHidn2 hidden-xs");
        $("#showFontSizeA").addClass("active");
        isFontSize = 1;
    } else {
        $("#fontSize").removeClass();
        $("#fontSize").addClass("hidden");
        $("#showFontSizeA").removeClass("active");
        isFontSize = 0;
    }
}

function showWordCitation() {
    //隐藏目录
    $("#catalog").removeClass();
    $("#catalog").addClass("hidden");
    $("#showCatalogA").removeClass("active");
    isShowCatalog = 0;
    //隐藏调整字体大小模块
    $("#fontSize").removeClass();
    $("#fontSize").addClass("hidden");
    $("#showFontSizeA").removeClass("active");
    isFontSize = 0;
    if(isWordCitation == 0) {
        $("#wordCitation").toggleClass("hidden", "show");
        $("#borderHidn").removeClass();
        $("#borderHidn").addClass("borderHidn3 hidden-xs");
        $("#showWordCitationA").addClass("active");
        isWordCitation = 1;
    } else {
        $("#wordCitation").removeClass();
        $("#wordCitation").addClass("hidden");
        $("#showWordCitationA").removeClass("active");
        isWordCitation = 0;
    }
}
//页面跳转
function catalogJump(pageNum) {
    // $("#pdfViewer").attr('src', pdfHost + '?file=' + encodeURIComponent(ptfUrl) + "&page=" + pageNum);
    document.getElementById('pdfViewer').contentWindow.postMessage("goPage," + --pageNum, '*');
}
//关键词搜索
function searchKeyWord() {
    $('#searchInfoUl').empty();
    var searchParam = $('#searchInput').val();
    var liHtml = '';
    var count = 0;	$.ajax({
        url: damApiHost+"search/xml/"+topicId,
        dataType: 'xml',
        type: 'GET',
        timeout: 2000,
        async: false,
        error: function(xml) {
            //			alert("加载XML 文件出错！");
        },
        success: function(xml) {
            var searchResultInfo = [];
            //循环单元
            $(xml).find("book").each(function(i) {
                $(this).children().each(function(i) {
                var unitSearchResultArray = [];
                $(this).children().each(function(i) {
                    //单元文字查询
                    if($(this)[0].tagName == "title" || $(this)[0].tagName == "para" || $(this)[0].tagName == "author" ||  $(this)[0].tagName == "notes") {
                        if($(this).text().indexOf(searchParam) >= 0) {
                            //设置高亮
                            var info = setRedSpan($(this).text(), searchParam);
                            unitSearchResultArray.push(info);
                        }
                    }
                    if($(this)[0].tagName == "page") {
                        //添加单元查询结果
                        if(unitSearchResultArray.length > 0) {
                            var unitSearchResult = {};
                            unitSearchResult["searchInfo"] = unitSearchResultArray;
                            unitSearchResult["page"] = $(this).text();
                            searchResultInfo.push(unitSearchResult);
                            unitSearchResultArray = [];
                        }
                    }
                });
                //篇查询
                var partSearchResultArray = [];
                $(this).children().children().each(function(i) {
                    //页查询
                    if($(this)[0].tagName == "title" || $(this)[0].tagName == "para" || $(this)[0].tagName == "author" ||  $(this)[0].tagName == "notes") {
                        if($(this).text().indexOf(searchParam) >= 0) {
                            //设置高亮
                            var info = setRedSpan($(this).text(), searchParam);
                            partSearchResultArray.push(info);
                        }
                    }
                    //得到页数添加一次页查询结果
                    if($(this)[0].tagName == "page") {
                        if(partSearchResultArray.length > 0) {
                            var partSearchResult = {};
                            partSearchResult["searchInfo"] = partSearchResultArray;
                            partSearchResult["page"] = $(this).text();
                            searchResultInfo.push(partSearchResult);
                            partSearchResultArray = [];
                        }
                    }
                    if($(this)[0].tagName == "chapter") {
                        $(this).children().each(function(i) {
                            //页查询
                            if($(this)[0].tagName == "title" || $(this)[0].tagName == "para" || $(this)[0].tagName == "author" ||  $(this)[0].tagName == "notes") {
                                if($(this).text().indexOf(searchParam) >= 0) {
                                    //设置高亮
                                    var info = setRedSpan($(this).text(), searchParam);
                                    partSearchResultArray.push(info);
                                }
                            }
                            //得到页数添加一次页查询结果
                            if($(this)[0].tagName == "page") {
                                if(partSearchResultArray.length > 0) {
                                    var partSearchResult = {};
                                    partSearchResult["searchInfo"] = partSearchResultArray;
                                    partSearchResult["page"] = $(this).text();
                                    searchResultInfo.push(partSearchResult);
                                    partSearchResultArray = [];
                                }
                            }
                        });
                    }
                });
                });
            //拼接结果
            $.each(searchResultInfo, function(index, value) {
                $.each(value.searchInfo, function(i, searchResult) {
                    liHtml += '<li>' +
                        '<a href="javascript:void(0);" onclick="catalogJump(' + value.page + ')">' +
                        '<p>' + searchResult + '</p>' +
                        '<p class="text-right">位于书本第<span class="redSpan">' + value.page + '</span>页</p>' +
                        '</a>' +
                        '</li>';
                    count++;
                });
            });
            });
        }
    });
    $('#searchCount').html(count);
    $(".searchResultNumDiv").show();
    $('#searchInfoUl').append(liHtml);
}
//设置高亮
function setRedSpan(addInfo, searchParam) {
    var startNum = addInfo.indexOf(searchParam);
    var endNum = startNum + searchParam.length;
    var info = insertStr(addInfo, endNum, '</span>');
    info = insertStr(info, startNum, '<span class="redSpan">');
    return info;
}

function insertStr(soure, start, newStr) {
    return soure.slice(0, start) + newStr + soure.slice(start);
}