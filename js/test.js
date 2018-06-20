
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


function setScreenAnimate(screenCls) {
    // 获取当前屏
    var screen = document.querySelector(screenCls);
    // 获取当前屏中要做动画的所有元素
    var animateElements = screenAnimateElements[screenCls];
    // 是否添加了动画样式
    var isSetAnimateClass = false;

    var isAnimateDone = false;


    screen.onclick = function () {
        //初始化样式，增加init
        if(isSetAnimateClass === false){
            for (var i = 0, length = animateElements.length;i<length;i++ ){
                // 加substr(1)是为了去掉前面的.
                $(animateElements[i]).addClass(animateElements[i].substr(1)+'_animate_init');
            }
            isSetAnimateClass = true;
            return;
        }

        //切换所有animateElements的init——>done

        if(isAnimateDone === false){
            for (var i = 0, length = animateElements.length;i<length;i++ ){
                $(animateElements[i]).removeClass(animateElements[i].substr(1)+'_animate_init');
                $(animateElements[i]).addClass(animateElements[i].substr(1)+'_animate_done');
            }
            isAnimateDone = true;
            return;
        }

        //切换所有animateElements的done——>init
        if(isAnimateDone === true){
            for (var i = 0, length = animateElements.length;i<length;i++ ){
                $(animateElements[i]).removeClass(animateElements[i].substr(1)+'_animate_done');
                $(animateElements[i]).addClass(animateElements[i].substr(1)+'_animate_init');
            }
            isAnimateDone = false;
            return;
        }

    }
}


$(function () {
    // 对screenAnimateElements中所有的key都绑定click事件
    for (screen in screenAnimateElements) {
        setScreenAnimate(screen);
    }
});
