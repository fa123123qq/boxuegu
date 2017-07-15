// NProgress.start();

// NProgress.done();

// $(document).ajaxStart(function () {  
// 	NProgress.start();
// })
// $(document).ajaxStop(function () {  
// 	NProgress.done();
// })

// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });

define(["jquery", "cookie", "template", "nprogress"], function ($, cookie, template, NProgress) {

	//登陆的功能
	if (!$.cookie("PHPSESSID") && location.pathname != "/login") {
		location.href = 'login';
	}

	if (location.pathname != '/login' && location.pathname != '/dashboard/login' && location.pathname != '/views/dashboard/login') {
		//把json字符串转回对象
		var tcInfo = JSON.parse($.cookie('tcInfo'));
		var tmphtml = template("tp_aside_avatar", tcInfo);
		$(".aside>.profile").html(tmphtml);
	}

	$("#logoutBtn").on('click', function () {
		$.ajax({
			url: '/api/logout',
			type: 'post',
			success: function (info) {
				if (info.code == 200) {
					alert('退出成功');
					location.href = '/login';
				}
			}
		})
	})

	//侧边栏的点击显示功能
	$(".navs a+ul").prev().on('click', function () {
		$(this).next().slideToggle();
	})

	//每个页面的读取状态条
	NProgress.start();
	NProgress.done();

	// 全局ajax事件监视，是整个页面中
	// 每一次ajax请求的时候，都会有的一个进度条的效果
	$(document).ajaxStart(function () {
		NProgress.start();
	});
	$(document).ajaxStop(function () {
		NProgress.done();
	})




})