/*说明：生活记录模块JS
 *时间：2018-10-17
 */

var CreateNode = function (data) {
    this.data = data;
}
CreateNode.prototype = {
    //创建导航节点
    LinkNav: function () {
        var CloneLinkBtn = $("#LinkModel").clone(true);
        CloneLinkBtn.attr('id', this.data.id);
        CloneLinkBtn.data('index', this.data.indexnumber);
        CloneLinkBtn.css({
            background: this.data.linkbtn.backgroundColor
        });
        $(".fixNav").append(CloneLinkBtn);
    },
    //创建左边内容区
    leftcontent: function () {},
    //创建右侧内容区
    rightcontent: function () {}
}

/*页面加载*/
$(function () {
    setCSS();
    AllEvent(); //所有事件函数
    indexPage(); //加载引导界面特效
});

//动态设置CSS样式
function setCSS() {
    var bodyHeight = $('body').outerHeight();
    $(".leftConWrapper,.rightConWrapper").css({
        minHeight: bodyHeight + 'px'
    });
    //设置各个模块的背景颜色
    var RightBgColor = ['rgb(175, 129, 203)',
                       'rgb(222, 198, 174)',
                       'rgb(237, 106, 116)',
                       'rgb(240, 144, 70)',
                       'rgb(248, 234, 184)',
                       'rgb(185, 212, 192)'];
    var LeftBgColor = ['rgb(188, 219, 206)',
                      'rgb(244, 244, 244)',
                      'rgb(255, 150, 52)',
                      'rgb(236, 136, 156)',
                      'rgb(237, 204, 186)',
                      'rgb(167, 98, 185)'];
    $(".rightConWrapper").each(function (i) {
        $(this).css({
            backgroundColor: RightBgColor[i]
        })
    });
    $(".leftConWrapper").each(function (i) {
        $(this).css({
            backgroundColor: LeftBgColor[i]
        })
    });
}

/*加载首页*/
function indexPage() {
    firstParagraph(); //第一段话
}
//第一段话
function firstParagraph() {
    var SingleSentence = Introduction.split('<br/>'); //获取第一段话个内容
    var speed = 60; //每个字输出时间
    var SentenceSpeed = speed * 4;
    var setTime = 0; //计算每句话的延时时间
    for (let i = 0; i < SingleSentence.length; i++) {
        if (i)
            setTime += SingleSentence[i - 1].length;
        setTimeout(function () {
            //闪烁光标
            Blink($(".cursor"), SingleSentence[i].length * speed - speed);
            OneByOne(SingleSentence[i], speed, speed * 1.8); //调用单子输出函数
        }, i ? (setTime * speed + i * SentenceSpeed) : 0);

        //最后一句话删除后面的换行符
        if (i == SingleSentence.length - 1) {
            setTimeout(function () {
                $('.cursor').prev().remove();
                Blink($(".cursor"), 2000, 500); //执行到最后一句话时再执行5s闪烁光标
                setTimeout(function () { //关闭第一段话
                    $('.first').slideUp();
                    LoadResume() //开始自我介绍
                }, 2000);
            }, (setTime + SingleSentence[i].length) * speed + i * SentenceSpeed);
        }
    }
}

//加载简历
function LoadResume() {
    $("#saveresume").slideDown();
    var sentences = resume.replace(/></g, '>^^<');
    sentences = sentences.split('^^');
    //    console.log(sentences);
    //    var time = 0;
    //    for (let i = 0; i < sentences.length; i++) {
    //        if (i)
    //            time += sentences[i - 1].length * 200;
    //        setTimeout(function () {
    //            $("#saveresume pre").append(sentences[i]);
    //        }, i ? time : 0);
    //    }

    var speed = 50; //每个字输出时间
    var SentenceSpeed = speed * 3;
    var setTime = 0; //计算每句话的延时时间
   	var s = setInterval(function(){
		$("#saveresume").scrollTop($("#saveresume pre").height());
	}, 100);
    for (let i = 0; i < sentences.length; i++) {
        if (i)
            setTime += $(sentences[i-1]).text().length*speed+SentenceSpeed;
        setTimeout(function () {
            OneByOneEle($(sentences[i]).text(), speed, $(sentences[i])); //调用单子输出函数
			if(i == sentences.length-1)
				setTimeout(function(){
					clearInterval(s);
					//$('.indexAnimate').slideUp();
				},sentences[i].length*speed);
        }, i ? (setTime) : 0);
    }
};


/*所有事件函数*/
function AllEvent() {
    for (var i = 0; i < data.length; i++) {
        data[i].indexnumber = i;
        var create = new CreateNode(data[i]);
        //创建导航节点
        create.LinkNav();
        //创建左边内容区
        create.leftcontent();
        //创建右侧内容区
        create.rightcontent();
    }
    $("#LinkModel").remove();

    //点击中部导航按钮
    let ClickFlag = false; //判断当前是否正在运行动画
    $($(".LinkBtn")[0]).addClass('LinkBtn_active');
    $(".LinkBtn").each(function (i) {
        $(this).click(function (i) {
            if (!ClickFlag) {
                var bodyHeight = $('body').outerHeight();
                $('.MainLeft').animate({
                    'top': -$(this).data('index') * bodyHeight
                }, 1000, function () { //动画执行完后执行
                    ClickFlag = false;
                });
                $('.MainRight').animate({
                    'bottom': -$(this).data('index') * bodyHeight
                }, 1000);
                $(".LinkBtn").removeClass('LinkBtn_active');
                $(this).addClass('LinkBtn_active');
                ClickFlag = true;
            }
        });

    });
	
	//动画页与静态页切换
	$("#Down_switch").click(function(){
		$('.indexAnimate').slideUp();
	});
	
}