 require.config({
    baseUrl: '/views/public',
    paths: {
      'jquery': 'assets/jquery/jquery.min',
      'bootstrap': 'assets/bootstrap/js/bootstrap.min',
      'cookie': 'assets/jquery-cookie/jquery.cookie',
      'nprogress': 'assets/nprogress/nprogress',
      'template': 'assets/artTemplate/template',
      //      'common':'js/common'
      'common': 'js/dashboard/common',
      'login': 'js/dashboard/login',
      'form':'assets/jquery-form/jquery.form'
    },
    shim: { // 设置bootstrap的依赖
      'bootstrap': {
        deps: ['jquery']
      }
    }

  });

