{
    $("#userName").text(localStorage.getItem("userId"));

    let files = [];
    let isUploadFileStatus = false;

    /**
     * 添加文件的方法
     */
    $('.upload-container #file-choice-input').on('change', function () {
        for (let i = 0; i < this.files.length; i++) {
            const fr = new FileReader();
            const img = this.files.item(i);
            img.id = String(new Date().getTime()) + String(Math.random() * 100);
            files.push(img);
            $('.upload-container .file-table-null').hide();
            fr.readAsDataURL(img);
            fr.onload = function () {
                const src = this.result;
                $('.upload-container .file-table ul').append('<li>\n' +
                    '                  <img class="ico" src="' + src + '"/>\n' +
                    '                  <span class="name">' + img.name + '</span>\n' +
                    '                  <span class="size">' + Number(img.size / 1024).toFixed(1) + 'KB</span>\n' +
                    '                  <span class="close" onclick="uploadContainerDeleteFileInput(this, \'' + img.id + '\')">X</span>\n' +
                    '                </li>');
            }
        }
        let size = 0;
        for (let i = 0; i < files.length; i++) {
            size += files[i].size;
        }
        $('.upload-container #files-num').text(files.length);
        $('.upload-container #files-size').text(Number(size / 1024 / 1024).toFixed(2));
        this.value = '';
    });
    $('.upload-container #file-drag-input').on('change', function () {
        for (let i = 0; i < this.files.length; i++) {
            const fr = new FileReader();
            const img = this.files.item(i);
            img.id = String(new Date().getTime()) + String(Math.random() * 100);
            files.push(img);
            $('.upload-container .file-table-null').hide();
            fr.readAsDataURL(img);
            fr.onload = function () {
                const src = this.result;
                $('.upload-container .file-table ul').append('<li>\n' +
                    '                  <img class="ico" src="' + src + '"/>\n' +
                    '                  <span class="name">' + img.name + '</span>\n' +
                    '                  <span class="size">' + Number(img.size / 1024).toFixed(1) + 'KB</span>\n' +
                    '                  <span class="close" onclick="uploadContainerDeleteFileInput(this, \'' + img.id + '\')">X</span>\n' +
                    '                </li>');
            }
        }
        let size = 0;
        for (let i = 0; i < files.length; i++) {
            size += files[i].size;
        }
        $('.upload-container #files-num').text(files.length);
        $('.upload-container #files-size').text(Number(size / 1024 / 1024).toFixed(2));
        this.value = '';
    });

    /**
     * 删除文件的方法
     */
    function uploadContainerDeleteFileInput(obj, id) {
        obj.parentNode.remove();
        for (let i = 0; i < files.length; i++) {
            if (files[i].id === id) {
                files.splice(i, 1);
                break;
            }
        }
        if (files.length === 0) {
            $('.upload-container .file-table-null').show();
        }
        let size = 0;
        for (let i = 0; i < files.length; i++) {
            size += files[i].size;
        }
        $('.upload-container #files-num').text(files.length);
        $('.upload-container #files-size').text(Number(size / 1024 / 1024).toFixed(2));
    }

    /**
     * 删除全部的文件的方法
     */
    function uploadContainerDeleteFileAll() {
        files = []
        $('.upload-container .file-table ul li').remove();
        $('.upload-container .file-table-null').show();
        let size = 0;
        for (let i = 0; i < files.length; i++) {
            size += files[i].size;
        }
        $('.upload-container #files-num').text(files.length);
        $('.upload-container #files-size').text(Number(size / 1024 / 1024).toFixed(2));
    }

    /**
     * 删除全部的文件的方法
     */
    function uploadContainerDeleteMetadataAll() {
        $('input').val('');
        $('.upload-container .item').remove();
    }

    /**
     * 确认
     */
    $('.upload-container #upload-complete').on('click', function (start, end) {
            if (files.length > 0) {
                isUploadFileStatus = true;
                const form = new FormData();
                let metadata_element_list = [];
                $("[metadata-class='com.artesia.metadata.MetadataField']").each(function () {
                    let metadataField = {
                        id: $(this).attr("id"),
                        type: $(this).attr("metadata-class"),
                        datatype: $(this).attr("metadata-type"),
                        value: $(this).val(),
                    };

                    metadata_element_list.push(metadataField);

                });

                $("[metadata-class='com.artesia.metadata.MetadataTableField']").each(function () {
                    let metadataTableField = {
                        id: $(this).attr("id"),
                        type: $(this).attr("metadata-class"),
                        datatype: $(this).attr("metadata-type")
                    }
                    const values = [];
                    $(this).children(".item").each(function () {
                        const c = this.innerText;
                        values.push(c.substring(0, c.length - 2));
                    })
                    metadataTableField.value = values;
                    metadata_element_list.push(metadataTableField);
                });
                const policies = ["35"];
                form.append('metadata_element_list', JSON.stringify(metadata_element_list));
                form.append("metadata_model_id", "PEP.MODEL.RESOURCE.ASSET");
                form.append("security_policy_list", JSON.stringify(policies));
                for (let i = 0; i < files.length; i++) {
                    form.append('files', files[i]);
                }
                let userInfo = {
                    "user_id": localStorage.getItem("userId"),
                    "department_id": localStorage.getItem("departmentId")
                }
                form.append("user_info", JSON.stringify(userInfo));
                let url ='http://192.168.190.122:1876/dam-api/resourcesLibrary/import';
                // let url = 'http://10.52.0.154:1876/pepapi/resourcesLibrary/import';
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: form,
                    processData: false,
                    contentType: false,
                    success: function (data) {
                        console.log(data);
                        uploadContainerDeleteFileAll();
                        isUploadFileStatus = false;
                    },
                    error: function (e) {
                        console.log(e);
                        isUploadFileStatus = false;
                    }
                });
            }
        }
    )
    ;

    /**
     * 重置
     */
    $('.upload-container #upload-reset').on('click', function () {
        if (isUploadFileStatus) {
        } else {
            uploadContainerDeleteFileAll();
            uploadContainerDeleteMetadataAll();
        }
    });

    /**
     * 取消
     */
    $('.upload-container #upload-cancel').on('click', function () {
        if (isUploadFileStatus) {
        } else {
            uploadContainerDeleteFileAll();
            uploadContainerDeleteMetadataAll();
        }
    });

    /**
     * 自定义标签的输入框显示
     */
    $('.upload-container .metadata-box .add-button button').on('click', function () {
        $('.upload-container .metadata-box .add-button').hide();
        $('.upload-container .metadata-box .add-input')[0].style.display = 'flex';
    });

    /**
     * 自定义标签的--添加
     */
    $('.upload-container .metadata-box .add-input button').on('click', function () {
        const val = $('.upload-container .metadata-box .add-input input')[0].value;
        if (val !== null && val !== undefined && val.length > 0) {
            // 添加节点
            $('.upload-container .metadata-box .add-button').before($('<div class="item">' + val + '<span onclick="uploadContainerMetadataTagDelete(this)">X</span></div>'));
            $('.upload-container .metadata-box .add-input').hide();
            $('.upload-container .metadata-box .add-button').show();
            $('.upload-container .metadata-box .add-input input')[0].value = '';
        }
    });

    /**
     * 自定义标签的--删除
     */
    function uploadContainerMetadataTagDelete(obj) {
        obj.parentNode.remove();
    }

}