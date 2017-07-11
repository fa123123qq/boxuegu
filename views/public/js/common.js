
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });

	if(!$.cookie("PHPSESSID")&&location.pathname!="/login"){
		location.href = 'login';
	}
	if(location.pathname!="/login"){
		var tcInfo = JSON.parse($.cookie('tcInfo'));
		var tmphtml =  template("tp_aside_avatar",tcInfo);
		$(".aside>.profile").html(tmphtml);
	}