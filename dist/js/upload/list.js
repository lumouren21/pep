$(function () {
    queryData(0);
    $("#userName").text(localStorage.getItem("userId"));
})

function queryData(pageNum) {
    var item = $("#upload-item-template").html();
    var template = Handlebars.compile(item);
    var userId = localStorage.getItem("userId");
    // var url = "http://10.52.16.100:1876/pepapi//resourcesLibrary/myUpload/" + userId + "?pageNum=" + pageNum;
     var url = "http://192.168.190.122:1876/dam-api/resourcesLibrary/myUpload/" + userId + "?pageNum=" + pageNum;

    $.get(url, function (result, status) {
        var html = template(result);
        $("#upload-list").html(html);
        if(result.pages > 0) {
            loadPage(result.pages);
        }
    });
}

function loadPage(pages) {
    // $('#pagination-demo').twbsPagination('destory');
    $('#pagination-demo').twbsPagination({
        totalPages: pages,
        first: "首页",
        last: "尾页",
        prev:"前页",
        next:"后页",
        initiateStartPageClick:false,
        onPageClick: function (event, page) {
            queryData(page - 1);
        }
    });
}
