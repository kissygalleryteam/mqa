var S = KISSY;
S.config({
    packages:[
        {
            name:"kg",
            path:"http://g.tbcdn.cn/kg/",
            charset:"utf-8",
            ignorePackageNameInUri:true
        }
    ]
});

if (S.Config.debug) {
    var srcPath = "../src/";
    S.config({
        packages:[
            {
                name:"kg/mqa/2.0.0",
                path:srcPath,
                charset:"utf-8",
                ignorePackageNameInUri:true
            }
        ]
    });
}


//DEMO主体代码
KISSY.use('kg/mqa/2.0.0/index', function (S, Mqa) {
    function createRet(mql) {
        var m = null
        var media = mql.media
        var ret = '<p class="ret">媒体查询状态改变，匹配结果：' + mql.matches + '</p>'

        if (m = document.getElementById(media)) {
            m.innerHTML += ret
        } else {
            m = document.createElement('div')
            m.id = media
            m.innerHTML = '<p class="name">媒体查询名:' + media + '</p>' + ret
            document.body.appendChild(m)
        }
    }
    Mqa.add('landscape', "(orientation:landscape)").
        //立即执行
        on('landscape', createRet, true).
        //直接通过媒体查询字符串判断最小宽度
        on("(min-width:400px)", createRet).
        //添加媒体查询字符串的假名
        add('smallscreen', "(min-width:1000px)").
        //到这里，可直接对假名进行事件监听
        on('smallscreen', function (mql) {
            createRet(mql)
        })


    ~function () {
        document.getElementById('remove').onclick = function () {
            var alias = this.previousElementSibling.value

            document.body.firstElementChild.innerHTML = '移除' + alias + "结果:" + Mqa.remove(alias)
        }
    }()
})

