define(function () {
    var o = {
        queryString: function () {
            var search = location.search;
            //把/去掉
            search = search.slice(1);
            // 用&号切割成数组
            var searchArr = search.split('&');
            //    console.log(searchArr);
            //遍历数组并添加到新对象中
            var obj = {};
            for (var i = 0; i < searchArr.length; i++) {
                var temp = searchArr[i].split('=');
                obj[temp[0]] = temp[1];
            }
             return obj;
        }
    }
    return o;
   
});