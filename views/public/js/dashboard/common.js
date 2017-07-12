
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });

define(["jquery","cookie","template"],function ($,cookie,template) { 
		if(!$.cookie("PHPSESSID")&&location.pathname!="/login"){
		location.href = 'login';
	}
	
	if(location.pathname!='/login'&&location.pathname!='/dashboard/login'&&location.pathname!='/views/dashboard/login'){
		//把json字符串转回对象
		var tcInfo = JSON.parse($.cookie('tcInfo'));
		var tmphtml =  template("tp_aside_avatar",tcInfo);
		$(".aside>.profile").html(tmphtml);
	}
 })