define([
    'utils',
    'jquery',
    'template',
    'bootstrap',
    'form'
    
], function(utils, $,template,bt,from) {
    var id = utils.queryString().cs_id;
    $.ajax({
        url:'/api/course/lesson',
        type:'get',
        data:{cs_id:id},
        success:function (res) {  
            if(res.code == 200){
                var tem = template('cs_lesson_tmp',res.result);
                $('.steps').html(tem);
            }
        }

    })

    $('.steps').on('click','#addLesson',function () { 
        var htmlStr = template('cs_modal_tpl',{
            title:'课时添加',
            saverBtinText:'添加'
        });
        $('#editPanel').html(htmlStr);
        $('#lesson').modal();
     })

     $('form').ajaxSubmit({
         url:'/api/course/chapter/add',
         type:'post',
         data:{},
         success:function (info) {  
             if(info.code == 200){
                 alert('课程添加成功')
             }
         }
     })


    
});