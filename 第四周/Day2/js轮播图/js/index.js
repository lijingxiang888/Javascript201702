// 获取操作元素
var outer = document.getElementById('outer');
var swiper = document.getElementById('swiper');
var oDivs = swiper.getElementsByTagName('div');

// 平移到 第二张
// 一屏700
// 2 left 1 * -700   -700
// 3 left 2 * -700   -1400
//
// 当前图片索引* 负的 一屏700 就是向左要偏移的位置


// 第一次 要由第一张平移到到二张 step = 1
// step * -700 -700
// 第二次 要由第二张平移到到三张 step = 2
// step * -700 -1400

var length = oDivs.length;

// 获取outer展示区域宽度
var wid = outer.clientWidth;
console.log(wid);
var step = 0; // 记录当前索引
// 执行轮播  4
var timer = setInterval(function () {
    step++; // 1
    if (step > length - 1) { // 如果step大于最后一张索引（当最后一张执行完动画时，再继续平移时 立马变成第一张然后 紧接着平移出来第二张 ） 让left立马为0 回到第一张 （最后一张和第一张一模一样）
        utils.css(swiper, 'left', 0); // 立马变成第一张
        step = 1;// 紧接着从第二张开始
    }
    zfAnimate({
        ele: swiper, // 执行元素
        target: { // left偏移 当前图片索引 * -wid
            left: step * -wid
        },
        // effect: 2,
        duration: 300
    })
}, 3000);