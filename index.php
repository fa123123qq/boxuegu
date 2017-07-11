<?php
 header("Content-type:text/html;charset=utf-8");
 echo "php会加载include的内容";

//  include 'views/dashboard/index.html';
//  include 'views/dashboard/login.html';
//  include 'views/dashboard/repass.html';
//  include 'views/teacher/add.html';
// 用没有views访问 'PATH_INFO' => string '/teacher/add' 

//  var_dump($_SERVER);

$path = '';
if(array_key_exists('PATH_INFO',$_SERVER)){
     $path = $_SERVER["PATH_INFO"];
 //没有views要加views
//  include 'views'.$path.'.html';
// 有views就多了一个/,要去掉
$path = substr($path,1);
//用/分成几个数组
$arr = explode('/',$path);
if(count($arr)==2){
        $path = 'views/'.$arr[0].'/'.$arr[1];
    }else if(count($arr)==1) {
        $path = 'views/dashboard/'.$arr[0];
    }
}else{
	//没有数组
     $path = 'views/dashboard/index';
}


 include $path.'.html';
?>