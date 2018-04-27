window.onload=function(){
    resizeWin ()
};
window.addEventListener("resize",(function(){
        resizeWin ()
    }
));
function resizeWin () {
    var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    document.documentElement.style.fontSize=rem + "px"
    document.body.style.fontSize=rem + "px"
    //$('html').css('font-size', rem + "px");
}
$(window).scroll(function(){
    var toTop=$(document).scrollTop()/1000;
    if(toTop>0.5){
        toTop=0.5
    }
   $('.header').css('background',`rgba(198,198,198,${toTop})`);
    console.log(toTop)
})
