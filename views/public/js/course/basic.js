define([
    'jquery',
    'form',
    'utils',
    'template',
    'ckeditor'
], function($, form,utils,template,CKEDITOR) {
    var id = utils.queryString().cs_id;
    $.ajax({
        url:'/api/course/basic',
        type:'get',
        data:{cs_id:id},
        success:function (res) { 
            if(res.code==200){
                // alert('ee0');
                var tmp = template('basic_tmp',res.result);
                $('.steps').html(tmp);

                CKEDITOR.replace('cs_brief');
            }
         }
    })


    //按钮事件委托点击,再通过form表单提交
   $('.steps').on('click','#btnSave',function () {  
        $("#cs_brief").val(CKEDITOR.instances.cs_brief.getData());
       $('form').ajaxSubmit({
           url:'/api/course/update/basic',
           type:'post',
           success:function (res) {  
               if(res.code == 200){

                   location.href = '/course/pic?cs_id='+res.result.cs_id;
                   alert('保持成功');
               }
           }
       })
       return false;
   })
});