/*引言*/
var Introduction = '欢迎查看我的简历<br/>将以不一样的形式来介绍我自己<br/>准备好了吗<br/>那现在就开始.....';

var resume = "<h2>基本信息</h2><p>姓名：邓占勇             性别：男</p><p>求职意向：WEB前端工程师</p><p>电话：18883245188        邮箱：2657179843@qq.com</p><h2>学习教育</h2><p>教育简述：现就读于重庆工商大学，物联网工程专业，2015级</p><p>担任职位：室长，魔方社社长，轮滑社教学部部长，大学生创新创业联盟实训部部长，数学分析课代表等</p><h2>技能证书</h2><p>熟练掌握与应用html，css，JS，jQuery，ajax等前端开发技术</p><p>熟练运用Less，LayUI的使用，掌握Canvas、SVG绘图以及git</p><p>掌握bootstrap，jQuery mobile，vue.js等框架的使用，了解D3、echarts图表库</p><p>了解AngularJS，微信小程序的开发，xml 等前端技术</p><p>熟练DIV+CSS布局，不同设备下的响应式布局</p><h2>参赛奖励</h2><p>第四届全国高校移动互联网应用开发创新大赛二等奖</p><p>重庆四校魔方联赛（异形魔方）第三名</p><p>2016中国大学生服务外包创新创业大赛校内二等奖</p><p>2016-2017学年优秀学生哦综合三等奖学金</p><p>2017全国大学生电子设计竞赛重庆市成功参赛奖</p><p>2017全国大学生创业综合模拟大赛（创业计划书）三等奖</p><p>2017全国大学生创业综合模拟大赛（软件模拟）优胜奖</p><p>重庆工商大学通识学院“第五届博雅体育田径运动会”跳高第三名</p><p>重庆工商大学第十五届田径运动会男子跳高第六名</p><p>重庆工商大学创新创业大赛暨“江南之星”创业大赛校内特等奖</p><p>网页设计大赛校内二等奖和三等奖</p><h2>项目经验</h2><p> <b>时间：2018.7—现在            公司：重庆夔牛科技有限公司         职位：WEB前端工程师</b> </p><p>项目：档案密集架管理系统和仓库环境监测系统，我所负责的是前台开发部分，根据UI设计师设计的界面，使用基础的前端技术进行开发，所选用的框架和库有：Layui、vue、JQuery、echarts等，采用echarts对数据进行图表显示。采用json格式和表单格式的数据格式与后台利用ajax进行交互。</p><p>GitHub：<a href='https://github.com/CTBUdzy' target='_blank'>https://github.com/CTBUdzy</a> </p><p>个人博客：<a href='http://www.xmwweb.cn/' target='_blank'>http://www.xmwweb.cn/</a>（还在完善中，可在其中的小作品模块查看个人平时制作的一些作品）</p><h2>自我评价</h2><p>我是一个开朗，富有上进心的人，大学期间积极参加各种比赛活动以及学校的社团组织等。善于从各方面的尝试中收获新的体会经历与心得。我是一个有规划的人，做事前都会想到以后可能遇到的问题，以及做出最好与最坏的打算，对自己的下一步都提早计划。</p><p>在工作上，对待工作认真负责，待人真诚有礼貌，善于沟通、协调有较强的组织能力与团队精神。</p><p>在学习上，采用边学习边实践的学习方法，积极高效的学习新的知识内容并加以运用到实际中。</p><p>在生活上，有着广泛的情趣，积极开朗的面对生活，平时喜欢一些户外活动，对于逻辑思维和空间想象的东西比较着迷，个人兴趣有魔方、轮滑、旅游等。</p>";


var data = [
    {
        id: '1',
        indexnumber: '1',
        linkbtn: {
            backgroundColor: 'rgb(180,212,190)'
        },
        leftcontent: {
            backgroundColor: 'red',
            color: '#fff',
            imgsrc: '1'
        },
        rightcontent: {
            backgroundColor: 'blue',
            color: '#000',
            title: '1'
        }

    },
    {
        id: '1',
        indexnumber: '2',
        linkbtn: {
            backgroundColor: 'rgb(251,242,192)'
        },
        leftcontent: {
            backgroundColor: 'yellow',
            color: '#000',
            imgsrc: '1'
        },
        rightcontent: {
            backgroundColor: 'green',
            color: '#000',
            title: '1'
        }

    },
    {
        id: '1',
        indexnumber: '3',
        linkbtn: {
            backgroundColor: 'rgb(244,166,84)'
        },
        leftcontent: {
            backgroundColor: 'yellow',
            color: '#000',
            imgsrc: '1'
        },
        rightcontent: {
            backgroundColor: 'green',
            color: '#000',
            title: '1'
        }

    },
    {
        id: '1',
        indexnumber: '4',
        linkbtn: {
            backgroundColor: 'rgb(241,50,74)'
        },
        leftcontent: {
            backgroundColor: 'yellow',
            color: '#000',
            imgsrc: '1'
        },
        rightcontent: {
            backgroundColor: 'green',
            color: '#000',
            title: '1'
        }

    },
    {
        id: '1',
        indexnumber: '5',
        linkbtn: {
            backgroundColor: 'rgb(230,201,190)'
        },
        leftcontent: {
            backgroundColor: 'yellow',
            color: '#000',
            imgsrc: '1'
        },
        rightcontent: {
            backgroundColor: 'green',
            color: '#000',
            title: '1'
        }

    },
    {
        id: '1',
        indexnumber: '6',
        linkbtn: {
            backgroundColor: 'rgb(199,162,203)'
        },
        leftcontent: {
            backgroundColor: 'yellow',
            color: '#000',
            imgsrc: '1'
        },
        rightcontent: {
            backgroundColor: 'green',
            color: '#000',
            title: '1'
        }

    }
];