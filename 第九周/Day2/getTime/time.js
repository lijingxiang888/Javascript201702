let time = document.getElementById('time');

function getTime() {
     // time.innerHTML = new Date().toLocaleString();
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:5000/getTime', true);
    xhr.responseType = 'json'; // 按照json对象形式 解析 响应数据
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && /^2\d{2}$/.test(this.status)) {
            // console.log(this.response);// 对象格式数据 {time: "2017-5-10 16:22:39"}
            // console.log(this.responseText); // string文本数据
            time.innerHTML = this.response.time;
        }
    };
    xhr.send();
}
getTime();
setInterval(getTime, 1000);
