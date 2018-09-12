var index = {
    backgroundact: function () {
        var x = (Math.floor(Math.random() * 10) * 1000 + Math.floor(Math.random() * 10) * 100 + Math.floor(Math.random() * 10) * 10 + Math.floor(Math.random() * 10)) % (parseInt($('.index_page').css('width').replace('px', '')));
        var y = (Math.floor(Math.random() * 10) * 1000 + Math.floor(Math.random() * 10) * 100 + Math.floor(Math.random() * 10) * 10 + Math.floor(Math.random() * 10)) % (parseInt($('.index_page').css('height').replace('px', '')));
        var banjing = Math.floor(Math.random() * 10) % 5;
        var boxshadow = Math.floor(Math.random() * 100) % 15;
        var yidong = Math.floor(Math.random() * 100) % 50;
        var div = $('<span"></span>');
        div.css({
            display: 'inline-block',
            position: 'absolute',
            background: '#fff',
            width: banjing + 'px',
            height: banjing + 'px',
            top: y + 'px',
            left: x + 'px',
            opacity: 0,
            borderRadius: '50%',
            boxShadow: '0px 0px ' + boxshadow + 'px #fff'
        }).animate({
            opacity: 1,
            top: y + yidong + 'px',
            left: x - yidong / 2 + 'px',
        }, 2000).animate({
            opacity: 0,
            top: y + yidong * 2 + 'px',
            left: x - yidong + 'px',
        }, 2000);
        $('body').append(div);
        setTimeout(function () {
            div.remove();
        }, 4000);
    }
}
$(function () {
    setInterval(function () {
        var num = 50;
        while (num > 0) {
            index.backgroundact();
            num--;
        }
    }, 1000);

    //标题特效
    $("#index_title a").addClass('active');
    setTimeout(function () {
        $("#index_title a").removeClass('active');
    }, 1500);
});