
//将要做动画的元素都列举出来
var screenAnimateElements = {
    '.screen-1':[
        '.screen-1-text',
        '.screen-1-phone',
        '.screen-1-shadow',
    ],
    '.screen-2':[
        '.screen-2-heading',
        '.screen-2-subheading',
        '.screen-2-phone',
        '.screen-2-point',
    ],
    '.screen-3':[
        '.screen-3-heading',
        '.screen-3-subheading',
        '.screen-3-phone',
        '.screen-3-list',
        '.screen-3-item',
    ],
    '.screen-4':[
        '.screen-4-heading',
        '.screen-4-subheading',
        '.pic-item',
    ],
    '.screen-5':[
        '.screen-5-heading',
        '.screen-5-subheading',
        '.screen-5-bg',
    ]
};

// 初始化动画
var initAnimate = function(){
    // 对于screenAnimateElements中的每一个屏
    for (screen in screenAnimateElements) {
        // 获取当前屏中要做动画的所有元素
        var animateElements = screenAnimateElements[screen];

        for (var i = 0, length = animateElements.length;i<length;i++ ){
            // 加substr(1)是为了去掉前面的.
            $(animateElements[i]).addClass(animateElements[i].substr(1)+'_animate_init');
        }
    }
};

// 切换指定屏中所有元素的animateElements的init——>done
var playAnimate = function(screen){
    // 获取当前屏中要做动画的所有元素
    var animateElements = screenAnimateElements[screen];

    for (var i = 0, length = animateElements.length;i<length;i++ ){
        $(animateElements[i]).removeClass(animateElements[i].substr(1)+'_animate_init');
        $(animateElements[i]).addClass(animateElements[i].substr(1)+'_animate_done');
    }
};


var addNavStatus = function(){
    $('.header').addClass('header_status_black');
    $('.outline').addClass('outline_status_in');
};

var removeNavStatus = function(){
    $('.header').removeClass('header_status_black');
    $('.outline').removeClass('outline_status_in');
};


var addActiveClass = function(i){
    $('.header-nav-item').removeClass('active');
    $('.header-nav-item:eq('+i+')').addClass('active');
    $('.outline-item').removeClass('active');
    $('.outline-item:eq('+i+')').addClass('active');
    $('.header-nav-tip').css('left',i*77+'px');
};



window.onload = function () {
    initAnimate();
    setTimeout(" playAnimate('.screen-1')",500);
    setNavJump();
    setTip();
};


// 滚动到哪儿，哪儿就播放动画
window.onscroll = function () {
    // 使用 document.documentElement.scrollTop获取滚动条的高度
    var top = document.documentElement.scrollTop;
    // console.log(top);
    if (top < 80){
        removeNavStatus();
    }
    if ( top > 80 ) {
        playAnimate('.screen-1');
        addNavStatus();
        addActiveClass(0);

    }
    if (top > 800 -100 ){
        playAnimate('.screen-2');
        addActiveClass(1);

    }
    if (top > 800*2 -100){
        playAnimate('.screen-3');
        addActiveClass(2);
    }
    if (top > 800*3 -100){
        playAnimate('.screen-4');
        addActiveClass(3);
    }
    if (top > 800*4 -100) {
        playAnimate('.screen-5');
        addActiveClass(4);
    }
};

 // 双向定位

var setNavJump = function () {
    var length = $('.header-nav-item').length;
    for (var i = 0;i<length;i++ ){
        setNavClick(i)
    }
};

var setNavClick = function (i) {
    $('.header-nav-item:eq('+i+')').click( function () {
        document.documentElement.scrollTop= 800*i;
    });

    $('.outline-item:eq('+i+')').click( function () {
        document.documentElement.scrollTop= 800*i;
    });
};


// 滑动门特效

var setTip = function () {
    var length = $('.header-nav-item').length;
    for (var i = 0;i<length-1;i++ ){
        setTipMouse(i);
    }
};

var setTipMouse = function (i) {
    $('.header-nav-item:eq('+i+')').mouseover( function () {
      $('.header-nav-tip').css('left',i*77+'px');
    });

};