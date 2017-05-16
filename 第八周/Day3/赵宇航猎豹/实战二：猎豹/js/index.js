+function () {
    var outer=document.getElementsByClassName('outer')[0];
    var swipe=outer.getElementsByClassName('swipe')[0];
    var swipeFast=swipe.getElementsByClassName('swipe-fast')[0];
    var swipeEasy=swipe.getElementsByClassName('swipe-easy')[0];
    var focus=document.getElementsByClassName('focus')[0];
    var left=outer.getElementsByClassName('focus-left')[0];
    var right=outer.getElementsByClassName('focus-right')[0];
    var focusLis=focus.getElementsByTagName('li');
    // outer.timer=setInterval(autoMove,2000);
    outer.step=0;
    outer.addEventListener('webkitAnimationEnd',function () {
        left.style.pointerEvents='auto';
        right.style.pointerEvents='auto';
        outer.id='';
    });
    function autoMove(ind) {
        console.log('auto');
        typeof ind!=='undefined'?outer.step=ind:outer.step++;
        if (outer.step%2===1) {
            outer.style.backgroundColor='#193d85';
            swipeFast.style.display='none';
            swipeEasy.style.display='block';
            swipeEasy.id='swipe-easy';
            swipeFast.id='';
            outer.id='outer';
        }
        else {
            outer.style.backgroundColor='#ff6900';
            swipeFast.style.display='block';
            swipeEasy.style.display='none';
            swipeEasy.id='';
            swipeFast.id='swipe-fast';
            outer.step=0;
            outer.id='outer';
        }
        changeFocus();
    }
    function changeFocus() {
        if(outer.step===0) {
            focusLis[0].style.backgroundColor='rgba(0,0,0,.1)';
            focusLis[1].style.backgroundColor='rgba(255,255,255,.1)';
        }
        else {
            focusLis[0].style.backgroundColor='rgba(255,255,255,.1)';
            focusLis[1].style.backgroundColor='rgba(0,0,0,.1)';
        }
    }
    outer.onmouseover=function () {
        // clearInterval(outer.timer);
    };
    outer.onmouseout=function () {
        // outer.timer=setInterval(autoMove,2000);
    };
    eventFocus();
    function eventFocus() {
        for (var i = 0; i < focusLis.length; i++) {
            var cur=focusLis[i];
            cur.ind=i;
            cur.onclick=function () {
                autoMove(this.ind);
            }
        }
    }
    left.onclick=function () {
        outer.step--;
        if(outer.step===-1){
            outer.step=1;
        }
        autoMove(outer.step);
        left.style.pointerEvents='none';
    };
    right.onclick=function () {
        autoMove();
        right.style.pointerEvents='none';
    };
    var winH=document.documentElement.clientWidth||document.body.clientWidth;
    if(winH<=760){
        move();
    }
    window.onresize=function () {

        if(winH<=760){
            move();
        }
    };
    var x1;
    function move() {
        outer.addEventListener('touchstart',function (e) {
            e=e||window.event;
            x1=e.changedTouches[0].clientX;
        },false);
        outer.addEventListener('touchend',function (e) {
            var x2=e.changedTouches[0].clientX;
            console.log(x1, x2);
            if(x1-x2<0) {
                autoMove();
            }
            else if(x2-x1<0){
                outer.step--;
                if(outer.step===-1){
                    outer.step=1;
                }
                autoMove(outer.step);
            }
        },false)
    }
}();
