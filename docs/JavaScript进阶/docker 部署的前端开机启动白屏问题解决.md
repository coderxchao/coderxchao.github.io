---
title: docker 部署的前端开机启动白屏问题解决
createTime: 2024/11/07 14:47:43
permalink: /article/8fc1g7fr/
tags: [开发问题, docker]
---

## Nginx. Conf 文件修改

```yaml
# 这个指令告诉浏览器，来自任何源的请求都可以访问该资源。
add_header 'Access-Control-Allow-Origin' '*';
#  这个指令告诉浏览器，该资源支持哪些HTTP请求方法
add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
```

![1727667653390.png](https://coderchao.oss-cn-shanghai.aliyuncs.com/images/1727667653390.png)

## 增加静态 load 页面

初始页面，逻辑是 1 秒轮询请求前端地址，判断是否成功，成功则跳转到前端程序，否则一直加载，防止出现白屏问题。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />

    <title>SAGE</title>
    <style>
      * {
        /* 初始化 */
        margin: 0;
        padding: 0;
      }
      body {
        /* 100%窗口高度 */
        height: 100vh;
        /* 弹性布局 水平垂直居中 */
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
      }
      .wavy {
        /* 相对定位 */
        position: relative;
        /* 倒影效果 */
        -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
      }
      .wavy span {
        position: relative;
        display: inline-block;
        color: #fff;
        font-size: 50px;
        text-transform: uppercase;
        letter-spacing: 8px;
        /* 执行动画：动画名 时长 加速后减速 无限次播放 */
        animation: wavyAnimate 1s ease-in-out infinite;
        /* 通过var函数调用自定义属性--i，在计算出动画延迟时间 */
        animation-delay: calc(0.1s * var(--i));
      }

      /* 定义动画 */
      @keyframes wavyAnimate {
        0% {
          transform: translateY(0);
        }
        20% {
          transform: translateY(-20px);
        }
        40%,
        100% {
          transform: translateY(0);
        }
      }
    </style>
    <script>
      function checkUrl(url) {
        fetch(url)
          .then((response) => {
            if (response.ok) {
              console.log("URL 调用成功:", url);
              const [page] = url.split("index.html");
              location.href = page;
            } else {
              console.log("URL 调用失败，状态码:", response.status);
            }
          })
          .catch((error) => {
            console.error("请求出错:", error);
          });
      }
      setInterval(() => {
        checkUrl("http://172.16.3.68:70/index.html?t=" + new Date().getTime());
      }, 1000);
      // 使用示例
    </script>
  </head>

  <body>
    <div class="wavy">
      <!-- --i是自定义属性，可通过var函数调用 -->
      <span style="--i:1;">S</span>
      <span style="--i:2;">A</span>
      <span style="--i:3;">G</span>
      <span style="--i:4;">E</span>
      <span style="--i:5;">初</span>
      <span style="--i:6;">始</span>
      <span style="--i:7;">化</span>
      <span style="--i:8;">中</span>
      <span style="--i:9;">.</span>
      <span style="--i:10;">.</span>
      <span style="--i:11;">.</span>
    </div>
  </body>
</html>
```

## 启动脚本修改

1. 将 html 文件复制到/home/sage/deploy 下面
2. 修改 autoload.sh 文件下的前端自启脚本
3. 将以前启动 localhost 改为自动打开默认文件 html 的形式

```bash
Gnome-terminal -x bash -c "google-chrome --kiosk /home/sage/deploy/frontend_load. Html; exec bash;"
```
