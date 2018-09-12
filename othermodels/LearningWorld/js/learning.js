$(function () {
    function parseUrl() {
        var url = location.href;
        var i = url.indexOf('?');
        if (i == -1) return;
        var querystr = url.substr(i + 1);
        var arr1 = querystr.split('&');
        var arr2 = new Object();
        for (i in arr1) {
            var ta = arr1[i].split('=');
            arr2[ta[0]] = ta[1];
        }
        return arr2;
    }
    var v = parseUrl(); //解析所有参数
    if (v) {
        $('li[data-name="' + v.key + '"]').addClass('act_leftli');
    }
    $(".left_ul li").each(function () {
        $(this).click(function () {
            window.location.href = location.href.split('?')[0] + '?key=' + $(this).data("name");
            // $("#content").load("html5/" + $(this).data("name") + '.html');
        });
    });
});