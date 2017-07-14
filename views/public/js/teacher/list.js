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


		$("#tc_list_body").on('click','a.btnHandle',function (){ 
			// alert('1');
			
			var id =$(this).parent().attr('data-id');
			 var that = $(this);
			$.ajax({
				url:'/api/teacher/handle',
				type:'post',
				data:{
				tc_id:id,
				tc_status:that.attr('data-status')
			},
				success:function (res) {
					//把服务器返回的数据也修改到data-status属性上
					that.attr('data-status',res.result.tc_status);
					if(res.code == 200){
						// alert('2');
						 if(res.result.tc_status == 0){
						 	that.text("注销");
						 }else{
						 	that.text("启用");
						 }
					}  

				}
			})
		 })

   	  
})