/*特效专区*/

/* 功能：把一句话以单个子的形式输出
 *  参数：字符串,输出速度
 *  时间：2018-10-18
 */
//function OneByOne(str, speed) {
//    var SingeText = [];
//    var createnode = $('<p></p>');
//    var nodes = ['<p>', '<span>', '<h1>', '<h2>', '<h3>'];
//    var nodesend = ['</p>', '</span>', '</h1>', '</h2>', '</h3>'];
//    for (let i = 0; i < nodes.length; i++) {
//        var reg = RegExp(nodes[i]);
//        if (str.match(reg)) {
//            createnode = $(nodes[i] + nodesend[i]);
//            str = str.replace(nodes[i], '').replace(nodesend[i], '');
//            break;
//        }
//    }
//    $(".cursor").before(createnode);
//    for (let i = 0; i < str.length; i++) {
//        (function (i, onestr) {
//
//            setTimeout(function () {
//                var text = createnode.text();
//                createnode.text(text + onestr);
//                if (i == str.length - 1)
//                    createnode.after('<br/>');
//            }, i * speed)
//
//        })(i, str.substr(i, 1))
//    }
//
//}
function OneByOne(str, speed) { //初级版
    var SingeText = [];
    var createnode = $('<p></p>');
    $(".cursor").before(createnode);
    for (let i = 0; i < str.length; i++) {
        (function (i, onestr) {

            setTimeout(function () {
                var text = createnode.text();
                createnode.text(text + onestr);
                if (i == str.length - 1)
                    createnode.after('<br/>');
            }, i * speed)

        })(i, str.substr(i, 1))
    }
}
//改进版 ----参数：字符串,输出速度,要添加的父节点，创建指定节点
function OneByOneEle(str, speed, node) {
    node.text('');
    $("#saveresume pre").append(node);
    for (let n = 0; n <= str.length; n++) {
        (function (n, flagstr) {
            setTimeout(function () {
                node.text(flagstr);
            }, n * speed);
        })(n, str.substr(0, n))
    }
}

/*功能：闪烁效果
 * 参数：闪过的元素的节点,以及持续时间,frequency闪烁频率
 */
function Blink(element, time, frequency) {
    let showFlag = true;
    var blink = setInterval(function () {
        if (showFlag)
            element.show();
        else
            element.hide();
        showFlag = !showFlag;
    }, frequency);
    setTimeout(function () {
        clearInterval(blink);
        element.hide();
    }, time);
}