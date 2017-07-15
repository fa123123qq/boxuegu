define(['jquery', 'template', 'uploadify', 'datepicker', 'datepickerzh', 'region', 'ckeditor'], function ($, template, uploadify, datepicker, datepickerzh, region, CKEDITOR) {

  //1请求个人更新的数据
  $.ajax({
    url: '/api/teacher/profile',
    type: 'get',
    success: function (res) {
      if (res.code == 200) {
        // console.log(res);
        var htmlStr = template('settings_tpl', res.result);
        $('.settings').html(htmlStr);

        //2上传图片,因为模板渲染完后才能显示当前页面
        $("#upfile").uploadify({
          'swf': '/views/public/assets/uploadify/uploadify.swf', //引入flash文件
          'uploader': '/api/uploader/avatar', //要提交的目标接口
          'buttonText': '',
          'width': 120,
          'height': 120,
          'fileObjName': 'tc_avatar',
          onUploadSuccess: function (file, data, response) {
            console.log(data);
            $('.preview img').attr('src', JSON.parse(data).result.path);
          }
        });

        //3添加了日期的中文插件
        $('input[name=tc_birthday],input[name=tc_join_date]').datepicker({
          format: 'yyyy-mm-dd',
          language: 'zh-CN'
        })

        // 4,省市级联动插件
        $('#region').region({
          url: '/views/public/assets/jquery-region/region.json'
        })

        //富文本编译器
        CKEDITOR.replace('introduce', {
          toolbarGroups: [{
              name: 'clipboard',
              groups: ['clipboard', 'undo']
            },
            {
              name: 'links'
            },
            {
              name: 'document',
              groups: ['mode', 'document', 'doctools']
            },
            {
              name: 'basicstyles',
              groups: ['basicstyles', 'cleanup']
            },
            {
              name: 'paragraph',
              groups: ['list', 'indent', 'blocks', 'align', 'bidi']
            }
          ]
        });



      }
    }
  })




});








// $('.settings').on('click','#saveBtn',function (){
//     $('[name=ckeditor]').val(CKEDITOR.instances.introduction.getData());//编辑器的一个bug，先获取一下输入的内容
//          $('form').ajaxSubmit({
//            url:'/api/teacher/modify',
//            type:'post',
//            success:function (data){
//                   console.log(data);
//            }
//          });
//          return false;// 阻止默认行为
//   })
// })