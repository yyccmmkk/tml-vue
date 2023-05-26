# mock server

####

使用 koa koa-router koa-body koa-static 简单的封装，实现本地数据 mock;
默认端口 4200，本地模拟接口数据时可以请求 basePath 可以设置为 http://localhost:4200；
本地接口模拟还可以进行模块划分；
本地接口服务开启 对 http://localhost:8080 的跨域资源共享（CORS）；
本地接口服务开启后默认对 public 目录开启静态资源服务；
接口上传文件后，上传文件会默认上伟到 public 目录；

---

#### 简单示例 参见 partB.js
