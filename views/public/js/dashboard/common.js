
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });

define(["jquery","cookie","template"],function ($,cookie,template) { 
		//登陆的功能
		if(!$.cookie("PHPSESSID")&&location.pathname!="/login"){
		location.href = 'login';
	}
	
	if(location.pathname!='/login'&&location.pathname!='/dashboard/login'&&location.pathname!='/views/dashboard/login'){
		//把json字符串转回对象
		var tcInfo = JSON.parse($.cookie('tcInfo'));
		var tmphtml =  template("tp_aside_avatar",tcInfo);
		$(".aside>.profile").html(tmphtml);
	}

	$("#logoutBtn").on('click',function () { 
		$.ajax({
			url:'/api/logout',
			type:'post',
			success:function (info) {  
				if(info.code == 200){
					alert('退出成功');
					location.href = '/login';
				}
			}
		})
	 })

	 //侧边栏的点击显示功能
	 $(".navs a+ul").prev().on('click',function () { 
		$(this).next().slideToggle();
	  })



 })