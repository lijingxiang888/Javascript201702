(function () {
    let $$ = (ele) => document.querySelector(ele);

    let userList = $$('#userList');

    // 获取用户数据
    function getInitData(callBack) {
        $.ajax({
           url: '/getAllUsers',
           type: 'GET',
           dataType: 'json',
           success: function (result) {
               if(result && result.error === 0) {
                   typeof callBack === 'function'? callBack(result['data']) : null;
               }
           }
        });
    }
    getInitData(bindData);
    // 数据绑定
    function bindData(data) {
        let str = '';
        for (let i = 0; i < data.length; i++) {
            let curData = data[i];
              str += `
                <li>
                <span>${curData.id}</span>
                <span>${curData.name}</span>
                <span>${curData.tel}</span>
                <span><a href='/template/update.html?uid=${curData.id}'>修改</a> <a class="removeBtn" href="javascript:;" data-rid=${curData.id}>删除</a></span>
                </li>
              `
        }
        userList.innerHTML = str;
        let removeBtn = document.querySelectorAll('.removeBtn');
        for(let i = 0; i < removeBtn.length; i++){
           let curBtn = removeBtn[i];
           curBtn.onclick = removeInfo;
        }

        function removeInfo() {
            // this 是当前点击删除按钮
            let rid = this.getAttribute('data-rid');
            let that = this;
            // 确认框
            let flag = confirm('是否删除 用户信息'); // 确认 返回true 取消 false
            if(!flag) return;

            $.ajax({
                url: '/removeUserInfo',
                data: {
                    rid: rid
                },
                dataType: 'json',
                success: function (result) {
                    if(result && result.error === 0) {
                        // 删除页面中相应 用户信息
                        userList.removeChild(that.parentNode.parentNode);
                        alert(result.msg);
                    }
                }
            })
        }
    }
})();