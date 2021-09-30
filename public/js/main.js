//设计稿100px = 1rem，html根font-size = 屏幕宽度/（设计稿宽度/100），tablet页面同pc端 
function setRem() {
    // 获取屏幕宽度
    let width = document.documentElement.clientWidth;
    // 在较大屏幕上显示周围空白处画面
    if (width >= 1280 && width <= 1920) {
        document.documentElement.style.fontSize = 100 + 'px';
        let body = document.getElementById("body");
        let minus = - (1920 - width) / 2 + 'px'
        body.style.left = minus;
        body.style.overflowX = "hidden";
    }
    // mac屏幕及pc端更小窗口显示中间主体部分
    else if (width >=768 && width < 1280) {
        document.documentElement.style.fontSize = width / 12.8 + 'px';
        body.style.left =- (1920 - 1280) /2 * (width / 1280)  + 'px';
        body.style.overflowX = "hidden";
    }
    // 超过1920px大屏以1920为基准放大
    else if (width >= 1920) {
        document.documentElement.style.fontSize = width / 19.2 + 'px';
    }
    // 移动端
    else if (width < 768) {
        document.documentElement.style.fontSize = width / 3.75 + 'px';
        body.style.left = 0;
    }
    body.style.overflowX = "scroll";
    
}

setRem();

// 超链接
var btn = document.getElementById('ctMore-1')
btn.onclick = function () {
    // window.location.href = 'https://sast.njupt.edu.cn/recruitment'  //当前页面打开
    window.open('Introduction.html')  //新窗口打开
}
var btn = document.getElementById('ctMore-2')
btn.onclick = function () {
    // window.location.href = 'https://sast.njupt.edu.cn/recruitment'  //当前页面打开
    window.open('Introduction.html')  //新窗口打开
}
var btn = document.getElementById('ctMore-3')
btn.onclick = function () {
    // window.location.href = 'https://sast.njupt.edu.cn/recruitment'  //当前页面打开
    window.open('Introduction.html')  //新窗口打开
}




//窗口大小改变时重置rem
window.onresize = function () {
    setRem();
};


$(function () {
    //移动端，数据卡触摸后改变样式
    function changeDataCardColor(class1) {
        $("." + class1).on("touchstart", function () {
            $(this).css({ "background-color": " #03E5BF", "box-shadow": "0 0 0.15rem 0 #a9a9a979 " });
            $(this).children("div").css("color", "#FFF");
            $(this).children("p").css("color", "#606266");
        });
        $("." + class1).on("touchend", function () {
            $(this).css({ "background-color": "#ffff", "box-shadow": "0rem 0rem 0.15rem 0rem 	rgba(219, 219, 219, 0.5)" });
            $(this).children("div").css("color", "#27a29c");
            $(this).children("p").css("color", "#9B9B9B");
        });
    }
    changeDataCardColor("card");


    // 下拉加载更多
    // function loadMore() {
    //     let s = $(window).scrollTop(),
    //         h = $(window).height(),
    //         documentH = $(document).height();
    //     if ((s + h) >= documentH) {
    //         $("#load").hide();
    //         $(".load-more").show();
    //     }
    // }

    // 页面移动到特定区域时执行动画
    /*  element         被监听元素
        rem             执行动画时该元素在窗口上高度（rem）
        H               该元素距页面顶部距离
        s               页面已滚动距离
        h               窗口可视高度
        fontsize        当前rem与px换算值
        offset          执行动画时该元素在窗口上高度（px），去单位
           */
    function scrollNumber(element, rem) {
        let H = $(element).offset().top,
            s = $(window).scrollTop(),
            h = $(window).height(),
            fontsize = document.documentElement.style.fontSize,
            offset = rem * (fontsize.substring(0, fontsize.length - 2));
        if (s + h >= H + offset) {
            $(element).show();
            pictureWallBackground();   //move.js
        }
    }

    $(window).scroll(function () {
        loadMore();
        scrollNumber("#background-2", 5);
    })

    // pc端照片墙遮罩层显示与隐藏
    function pictureWallInPc() {
        $("#pictureWall div").mouseover(function () {
            $(this).children("span").show();
        });
        $("#pictureWall div").mouseout(function () {
            $(this).children("span").hide();
        });
    }

    // 移动端照片墙遮罩层显示与隐藏
    function pictureWallInMobile() {
        $("#pictureWall div").on("touchstart", function () {
            $(this).children("span").show();
        });
        $("#pictureWall div").on("touchend", function () {
            $(this).children("span").hide();
        })
    }

    if (document.documentElement.clientWidth >= 768) {
        pictureWallInPc();
    }
    else if (document.documentElement.clientWidth < 768) {
        pictureWallInMobile();
    }

})
