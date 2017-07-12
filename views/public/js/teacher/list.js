define(['jquery','template',"bootstrap"], function($,template) {
   $.ajax({
       url:"/api/teacher",
       type:"get",
       success:function(info) { 
           if(info.code == 200){
               var teacher_str = template("tc_ls_tmp",info);
               $("#tc_list_body").html(teacher_str);
           }
        }
   });


   //教师查看功能
	  $("#tc_list_body").on("click","a.check-info",function () {
		//   alert("hehe")
		var id =$(this).parent().attr('data-id');
			$.ajax({
				url:"/api/teacher/view",
				type:"get",
				data:{tc_id:id},
				success:function (info) {  
					if(info.code == 200){
						var teacherstr = template("tc_info_tpl",info.result);
						$("#teacherModal tbody").html(teacherstr);
						$("#teacherModal").modal();
						
					}
				}

			})
		
	    })

   	  
})