define([
    'utils',
    'jquery',
    'template',
    'bootstrap',
    'form'

], function (utils, $, template, bt, form) {
    var id = utils.queryString().cs_id;
    renderLesson();
    // $.ajax({
    //     url: '/api/course/lesson',
    //     type: 'get',
    //     data: {
    //         cs_id: id
    //     },
    //     success: function (res) {
    //         if (res.code == 200) {
    //             var tem = template('cs_lesson_tpl', res.result);
    //             $('.steps').html(tem);
    //         }
    //     }

    // })

    //点击添加按钮,模态框的弹出
    $('.steps').on('click', '#addLesson', function () {
        var htmlStr = template('cs_modal_tpl', {
            title: '课时添加',
            savaBtnText: '添加',
            actionUrl:'/api/course/chapter/add'
        });

        $('#editPanel').html(htmlStr);
        $('#lesson').modal();
    })

     //当单击编辑按钮的时候，要弹出模态框并将当前课时的数据显示在页面上
  $('.steps').on('click','#editBtn',function (){
         //要发送数据，显示模态框
    var ct_id = $(this).parent().attr('data-id');
          $.ajax({
            url:'/api/course/chapter/edit',
            type:'get',
            data:{
              ct_id:ct_id
            },
            success:function (info){
              info.result.title = '课时编辑';  //实际上就是多了这两行代码
              info.result.savaBtnText = '保存'; //实际上是多了这两行代码 
              info.result.actionUrl = '/api/course/chapter/modify'
              if(info.code==200){
                //渲染模板
                var htmlStr = template('cs_modal_tpl',info.result);
                $('#editPanel').html(htmlStr);
               
              }

            }
       })
        $('#lesson').modal();
  })
  
  
    //当单击按钮 的时候，要向服务器提交数据
    $('#editPanel').on('click', '#saveBtn', function () {

        var ct_is_free = Number($('#ct_is_free').prop('checked'))
        $('form').ajaxSubmit({
            // url: '/api/course/chapter/add',
            type: 'post',
            data: {
                ct_is_free: ct_is_free,
                ct_cs_id: id
            },
            success: function (info) {
                if (info.code == 200) {
                    alert('操作成功');
                    $('#lesson').modal('hide');
                    //重新渲染页面
                    renderLesson();
                    

                }
            }
        })

    });//on


 




     /**
   * 封装了一个刷新当前页面的函数
   */
  function renderLesson(){
    $.ajax({
      url:'/api/course/lesson',
      type:'get',
      data:{
        cs_id:id
      },
      success:function (info){
        // 渲染模板
        var htmlStr = template('cs_lesson_tpl',info.result);
        $('.steps').html(htmlStr);
      }
    })
  }




});