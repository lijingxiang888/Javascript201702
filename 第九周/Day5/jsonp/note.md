## 跨域
- 同源策略
> 协议 域名 端口 三者一致
三者 只要有一个不同 就是 跨域

主要存在于 两个页面交互中 url 不同
http://127.0.0.1:8000 
```
http://127.0.0.1:8001  跨域
http://127.0.0.2:8000  跨域
https://127.0.0.1:8000  跨域
```

同源策略限制 XMLHttpRequest 请求
img script ... 不存在跨域
jsonp 跨域 只支持 get请求

### jsonp 原理
   利用script标签不存在跨域，我们给src 属性url地址 只要能找到就会将js引入进来
  我们把 请求的url地址 设为script标签src属性 并且和后台定义一个字段 将我们全局中的函数名 传给后台cb=callBack

跨域解决常用
JSONP 利用script的src
CORS 跨域资源共享 需要服务端设置


