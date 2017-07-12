define(["jquery","cookie"],function ($,cookie) { 
    
$('#formLogin').submit(function () {  
				//序列化表格的数据
            var data = $(this).serializeArray();
            $.ajax({
                url:'/api/login',
                type:'post',
                data:data,
				//这里不能用data
                success:function(info){
                    if(info.code == 200){
                        //把json对象转换为字符串
                        var infostr = JSON.stringify(info.result);
                        // console.log(infostr);
                         $.cookie('tcInfo',infostr);
					//跳转到index页面
                       
                        location.href = 'index';
                        // alert('登陆成功');
                    }
                },
                error:function(errorInfo){
                    alert('用户名或密码不对');
                }
            })
            return false;
        })
 });