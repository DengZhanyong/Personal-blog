$(function () {
    var osc = {};

    $(window).keydown(function (event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (osc[code])
            return;
        $("li[data-code='" + code + "']").addClass("active")
        if (code == 13 || code == 108) {
            window.open($("#search_btn").attr('href'), '_blank');
        }
    });

    $(window).keyup(function (event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        $("li[data-code='" + code + "']").removeClass("active");
        var search_text = $("#search").val();
        if (search_text == '扫雷') {
            $("#search_btn").attr('href', 'http://www.xmwweb.cn/dzy/game/Minesweeper');
        } else {
            $("#search_btn").attr('href', 'http://www.baidu.com/s?wd=' + search_text);
        }
    });

    // Detect Mouse Events
    $("li").mousedown(function (event) {
        $(this).addClass("active");
        var key = $(this).data("key");
        var code = $(this).data("code");
        var search_text = $("#search").val();
        if (code == 8) {
            var len = search_text.length;
            search_text = search_text.substring(0, len - 1);
        } else {
            search_text += key;
        }

        $("#search").val(search_text);
        setTimeout(function () {
            $("#search").focus();
        }, 50);
        console.log(search_text);
        if (search_text == '扫雷') {
            $("#search_btn").attr('href', 'http://www.xmwweb.cn/dzy/game/Minesweeper');
        } else {
            $("#search_btn").attr('href', 'http://www.baidu.com/s?wd=' + search_text);
        }
    });

    $("li").mouseup(function (event) {
        $(this).removeClass("active");
    });

    //返回上一级页面
    $("#return").click(function () {
        window.history.go(-1);
    });

    //游戏选择点击事件
    $("#choose #baidu_game").addClass('active');
    $("#baidu_game").click(function () {
        $(this).addClass('active');
        $("#choose #my_game").removeClass('active');
		$(".key-wrapper").removeClass('hidden');
		$(".mygame_content").removeClass('hidden');
    });
    $("#my_game").click(function () {
        $(this).addClass('active');
        $("#choose #baidu_game").removeClass('active');
		$(".key-wrapper").addClass('hidden');
		$(".mygame_content").addClass('hidden');
    });
});