(function () {
    let $$ = (ele)=>document.querySelector(ele);
    let userList = $$('#userList');

    // 获取用户数据
    function getData(callback) {
        $.ajax({
            url: '/getAllUsers',
            type: 'GET',
            dataType: 'json',
            succese: function (result) {
                if (result && result.error === 0) {
                    typeof callback === 'function' ? callback(result['data']) : null;
                }
            }
        })
    }

    getData(bindData);
    //绑定数据
    function bindData(data) {
        let str = '';
        for (let i = 0; i < data.length; i++) {
            let curData = data[i];
            str += `
                    <li>
                        <span>${curData.id}</span>
                        <span>${curData.name}</span>
                        <span>${curData.tel}</span>
                        <span>
                            <a href="/template/update.html?uid=${curData.id}">修改</a>
                            <a class="removeBtn" href="javascript:;" data-rid=${curData.id}>删除</a>
                        </span>
                    </li>>
                 `
        }
        userList.innerHTML = str;
        //写删除数据的逻辑
        let removeBtn = document.querySelectorAll('.removeBtn');
        for (let i = 0; i < removeBtn.length; i++) {
            let curBtn = removeBtn[i];
            curBtn.onclick = removeInfo;
        }

        function removeInfo() {
            // this 是当前点击删除按钮
            let rid = this.getAttribute('data-rid');
            let that = this;
            //确认一下是否删除
            let flag = confirm('是否删除');
            if (!flag) return;

            $.ajax({
                url: '/removeUserInfo',
                data: {
                    rid: rid
                },
                dataType: 'json',
                succese: function (result) {
                    if (result && result.error === 0) {
                        userList.removeChild(that.parentNode.parentNode)
                        alert(result.msg)
                    }
                }
            })
        }
    }
})();