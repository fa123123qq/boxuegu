define([
    'jquery',
    'template'
], function($, template) {
    $.ajax({
        url:'/api/course',
        type:'get',
        success:function (info) {  
            if(info.code == 200){
                var htmlStr = template('cs_list_tpl',info);
                $('.courses').html(htmlStr);
            }
        }
    })
    
});