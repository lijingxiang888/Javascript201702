function down(e) {
    //计算鼠标距离元素自身的宽高,要有个初始的自身值，这样后面的move才能执行，所以放在这
    this.l = e.clientX - this.offsetLeft;
    this.t = e.clientY - this.offsetTop;
    //计算边界
    var winW = document.documentElement.clientWidth || document.body.clientWidth;
    var winH = document.documentElement.clientHeight || document.body.clientHeight;
    this.maxL = winW - this.offsetWidth;
    this.maxT = winH - this.offsetHeight;
    //绑定move和up事件，用自己封装的on方法，但是需要解决一下this问题
    this.MOVE = handlerThis(move,this);
    this.UP = handlerThis(up,this);
    //用事件委托方法，一次性将move、up方法绑定在document上，提高了代码效率
    on(document, 'mousemove', this.MOVE);
    on(document, 'mouseup', this.UP);
}

function move(e) {
    this.boxL = e.clientX - this.l;
    this.boxT = e.clientY - this.t;
    computed.call(this);
}

function up() {
    off(document,'mousemove',this.MOVE);
    off(document,'mouseup',this.UP);
}
// 边界判断 位置处理
function computed() {
    if(this.boxL>this.maxL){
        this.boxL = this.maxL;0
    }else if(this.boxL <= 0){
        this.boxL = 0;
    }
    if(this.boxT>this.maxT){
        this.boxT = this.maxT;
    }else if(this.boxT <= 0){
        this.boxT = 0;
    }
    this.style.left = this.boxL + 'px';
    this.style.top = this.boxT + 'px';
}

// 处理this
function handlerThis(fn, context) {
    return function (e) {
        fn.call(context,e);
    }
}