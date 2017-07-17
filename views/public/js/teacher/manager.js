define(['utils','jquery', 'template', 'form', 'datepicker','datepickerzh'], function (utils,$, template, form, dp,datepickerzh) {
    //获取到url地址域名后面的数据
    // var search = location.search;
    // //把/去掉
    // search = search.slice(1);
    // // 用&号切割成数组
    // var searchArr = search.split('&');
    // //    console.log(searchArr);
    // //遍历数组并添加到新对象中
    // var obj = {};
    // for (var i = 0; i < searchArr.length; i++) {
    //     var temp = searchArr[i].split('=');
    //     obj[temp[0]] = temp[1];
    // }
    //    console.log(obj);
    //这里是后面根据id来渲染编辑还是添加讲师
    // var id = obj.tc_id;
    var id = utils.queryString().tc_id;
    if (id) {
        //根据当前的id给服务器发送ajax请求,获取当前id下面的信息
        $.ajax({
            url: '/api/teacher/edit',
            type: 'get',
            data: {
                tc_id: id
            },
            success: function (res) {
                if (res.code == 200) {
                    //    alert('asd')
                    res.result.title = '讲师编辑';
                    res.result.saveBtnText = '保存';
                    var htmlStr = template('tc_manager_tpl', res.result);
                    $('.teacher').html(htmlStr);

                    $('input[name=tc_join_date]').datepicker({
                        format: 'yyyy-mm-dd',
                        language:'zh-CN'
                    })
                }
            }
        })

        //内容在表单里面直接用表单提交,由于没有id所以要在表单的某个地方加标签添加id
        $(".teacher").on("click", '.btnSave', function () {
            $('form').ajaxSubmit({
                url: '/api/teacher/update',
                type: 'post',
                success: function (res) {
                    if (res.code == 200) {
                        alert('提交成功...');
                        location.href = '/teacher/list'; //跳转到讲师列表页
                    }

                }
            });
            return false;
        });

    } else {
        //这里是添加讲师
        var htmlStr = template('tc_manager_tpl', {
            title: '讲师添加',
            saveBtnText: '添加',
            tc_gender: 0
        });
        $('.teacher').html(htmlStr);
          $('input[name=tc_join_date]').datepicker({
                        format: 'yyyy-mm-dd',
                        language:'zh-CN'
                    })

        $(".teacher").on("click", '.btnSave', function () {
            $('form').ajaxSubmit({
                url: '/api/teacher/add',
                type: 'post',
                success: function (res) {
                    if (res.code == 200) {
                        location.href = '/teacher/list'
                    }
                }
            })
            return false;
        })
    }


});