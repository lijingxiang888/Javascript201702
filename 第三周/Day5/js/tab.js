~function () {
    function Tab(selector, options) {
        //->init parameter
        var _default = {
            preIndex: 0
        };
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                _default[key] = options[key];
            }
        }

        //->set private property
        this.container = document.getElementById(selector);
        this.preIndex = _default.preIndex;
        this.firstItem = utils.firstChild(this.container);
        this.itemList = utils.children(this.firstItem, 'LI');
        this.contentList = utils.getByClass('content', this.container);

        //->run
        this.init();
    }

    Tab.prototype = {
        constructor: Tab,
        selectInit: function () {
            for (var i = 0; i < this.itemList.length; i++) {
                var curLi = this.itemList[i],
                    curDiv = this.contentList[i];
                if (i === this.preIndex) {
                    utils.addClass(curLi, 'select');
                    utils.addClass(curDiv, 'select');
                } else {
                    utils.removeClass(curLi, 'select');
                    utils.removeClass(curDiv, 'select');
                }
            }
        },
        bindEvent: function () {
            var _this = this;
            for (var i = 0; i < this.itemList.length; i++) {
                this.itemList[i]['data-index'] = i;
                this.itemList[i].onclick = function () {
                    //->移除上一次的
                    utils.removeClass(_this.itemList[_this.preIndex], 'select');
                    utils.removeClass(_this.contentList[_this.preIndex], 'select');

                    //->选中本次点击的
                    var dataIndex = this['data-index'];
                    utils.addClass(_this.itemList[dataIndex], 'select');
                    utils.addClass(_this.contentList[dataIndex], 'select');

                    //->更新preIndex
                    _this.preIndex = dataIndex;
                }
            }
        },
        init: function () {
            this.selectInit();
            this.bindEvent();
        }
    };

    window.TabChange = Tab;
}();