define([
    'utils',
    'jquery',
    'template',
    'uploadify',
    'jcrop'

], function (utils, $, template, uploadify, jcrop) {
    var id = utils.queryString().cs_id;

    $.ajax({
        url: '/api/course/picture',
        type: 'get',
        data: {
            cs_id: id
        },
        success: function (info) {
            if (info.code == 200) {
                var htmlStr = template('picpml', info.result);
                $('.steps').html(htmlStr);

                //点击按钮上传图片并显示在图片中
                $('#upload').uploadify({
                    swf: '/views/public/assets/uploadify/uploadify.swf',
                    uploader: '/api/uploader/cover',
                    buttonText: '选择图片',
                    width: 85,
                    height: 'auto',
                    buttonClass: 'btn btn-success btn-sm', //按钮的样式
                    formData: {
                        cs_id: id
                    },
                    fileObjName: 'cs_cover_original',
                    itemTemplate: '<span><span>', //去掉上传成功提示
                    onUploadSuccess: function (file, data, response) {
                        $('.preview img').attr('src', JSON.parse(data).result.path);
                        //把禁用的按钮启用
                        $('#cropBtn').prop('disabled', false);
                    }

                })


                // 动态创建的元素要用事件委托来注册
                $('.steps').on('click', '#cropBtn', function () {
                    if ($(this).attr('data-status') != 'save') {
                        $(this).attr('data-status', 'save').text('保持');
                        //缩略图的样式设置
                        $('.preview img').Jcrop({
                            aspectRatio: 2,
                            setSelect: [30, 30, 100, 50]
                        }, function () {
                            jcrop_obj = this;
                            jcrop_obj.initComponent('Thumbnailer', {
                                width: 240,
                                height: 120
                            });
                            //把剪切的图片渲染到左上角
                            $('.thumb').append($('.jcrop-thumb'));
                        });
                    } else {
                        alert('test');
                        var result = jcrop_obj.getSelection();
                        $.ajax({
                            url: '/api/course/update/picture',
                            type: 'post',
                            data: {
                                cs_id:id,
                                x: result.x,
                                y: result.y,
                                w: result.w,
                                h: result.h
                            },
                            success: function(info) {
                                if (info.code == 200) {
                                    location.href = '/course/lesson?cs_id=' + info.result.cs_id;

                                }
                            }
                        })

                    }
                })
            }
        } //success


    })




});