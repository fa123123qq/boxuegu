define([
    'jquery',
    'form'
], function ($, form) {
    $('.btn-success').on('click', function (){      
        $('form').ajaxSubmit({
            url: '/api/course/create',
            type: 'post',
           success: function (res) {
                if (res.code == 200) {
                    alert('de')
                    location.href = '/course/basic?cs_id='+res.result.cs_id;
                }
            }
        })
        return false;
    })


});