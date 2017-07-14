define(['jquery','template','form'],function($,template) {
   var search = location.search;
   search = search.slice(1);  
   var searchArr = search.split('&');
//    console.log(searchArr);
   
   var obj = {};
   for (var i = 0; i < searchArr.length; i++) {
       var temp = searchArr[i].split('=');
       obj[temp[0]] = temp[1];
   }
//    console.log(obj);
   
   //根据当前的id给服务器发送ajax请求,获取当前id下面的信息
   $.ajax({
       url:'/api/teacher/edit',
       type:'get',
       data:{tc_id:obj.tc_id},
       success:function(res) {  
           if(res.code == 200){
            //    alert('asd')
               res.result.title = '讲师编辑';
               res.result.saveBtnText = '保存';
               var htmlStr = template('tc_manager_tpl',res.result);
               $('.teacher').html(htmlStr);
           }
       }
   })

   //内容在表单里面直接用表单提交,由于没有id所以要在表单的某个地方加标签添加id
   $(".teacher").on("click",'.btnSave',function (){
    $('form').ajaxSubmit({
      url:'/api/teacher/update',
      type:'post',
      success:function (res){
          if(res.code==200){
             alert('提交成功...');
        location.href='/teacher/list';//跳转到讲师列表页
          }
       
      }
    });
    return false;
  })
    
});