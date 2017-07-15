define([
        'jquery',
        'template'
    // 'ckeditor',
    // 'uploadify'
], function($,template) {
  // ,CKEDITOR,uploadify
  //  CKEDITOR.replace('introduce',{
  //      toolbarGroups:[
  //         { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
  //       { name: 'links' },
  //       { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
  //       { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
  //       { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] }
  //      ]
  //请求个人更新的数据
  $.ajax({
    url:'/api/teacher/profile',
    type:'get',
    success:function (res){
      if(res.code==200){
        console.log(res);
        
        var htmlStr = template('settings_tpl',res.result);

        $('.settings').html(htmlStr);
      }
    }
})




 });

   //上传图片
  //  $("#upfile").uploadify({
  //      swf:'/views/public/assets/uploadify/uploadify.swf',
  //      uploader:'/api/uploader/avatar',
  //      buttonText:'',
  //      weight:120,
  //      height:120,
  //      fileObjName:'tc_avatar',
  //      onUploadSuccess:function (file,data,response) { 
  //          $('#avatar_preview').attr('src',JSON.parse(data.result.path));
  //       }
  //  })


//     $('#region').region({
//       url:'/views/public/assets/jquery-region/region.json'
//     })

  


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
