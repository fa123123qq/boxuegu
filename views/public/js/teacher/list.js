define(['jquery','template'], function($,template) {
   $.ajax({
       url:"/api/teacher",
       type:"get",
       success:function(info) { 
           if(info.code == 200){
               var teacher_str = template("tc_ls_tmp",info);
               $("#tc_list_body").html(teacher_str);
           }
        }
   })
})