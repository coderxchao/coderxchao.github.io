---
title: Nginx 基本使用
createTime: 2024/11/07 14:35:04
permalink: /article/yiy2salj/
tags: [nginx]
---

[参考：知乎（就是要让你搞懂 Nginx，这篇就够了！）](https://zhuanlan.zhihu.com/p/225842782?utm_id=0)

> 本文的所有操作还是在 `windows 11` 上进行的。但其实不管在什么系统上操作 `nginx` 的配置文件都是一样的，没有什么大的区别。

## 正向代理与反向代理

> Nginx 是一个高性能的 HTTP 和反向代理服务器，特点是占用内存少，并发能力强，事实上 nginx 的并发能力确实在同类型的网页服务器中表现较好

### 正向代理

理解反向代理前我们需要先理解正向代理，那么什么是正向代理呢？其实我们如果使用过 VPN 就大概知道什么是正向代理了。盗用网上一张图片如下：所谓正向代理就是将我们客户端的请求通过代理服务器发送到目标服务器。例如我们需要访问 [www.google.com](https://www.google.com)，在国内正常情况下我们是无法访问的，所以就需要用到 VPN，其实 VPN 就是在给我们客户端的请求进行正向代理。也就是我们发送的网络请求先通过 VPN 转发到 VPN 代理服务器上，代理服务器再将我们的请求转发到 [www.google.com](https://www.google.com) 服务器上。这个过程的前提就是我们的网络能够正常访问 VPN 服务器，且 VPN 服务器能够正常访问 [www.google.com](https://www.google.com) 服务器。

![1712385704351.png](https://coderchao.oss-cn-shanghai.aliyuncs.com/images/1712385704351.png)

### 反向代理

反向代理对于用户来说是无法感知的（以上面例子为例，正向代理需要手动安装 VPN），用户只需要把请求发送到反向代理服务器就可以了。具体反向代理服务器实际将你的请求代理到哪台服务器用户是无法感知的。反向代理可以用来做负载均衡，如果网站访问并发量大，可能需要用到多台服务器来做负载均衡。这时候就可以通过 `nginx` 来进行配置。也就是将很多用户的请求代理转发到多台不同的服务器上，这样每台服务器需要处理的请求就少了。

![1712385766944.png](https://coderchao.oss-cn-shanghai.aliyuncs.com/images/1712385766944.png)

## Nginx 安装与配置

[下载地址](https://nginx.org/en/download.html)

下载完成后解压缩然后双击 `nginx.exe` 启动 `nginx` 即可，启动成功后我们访问 `localhost` 可以看到如下的一个默认页面

![1712385792488.png](https://coderchao.oss-cn-shanghai.aliyuncs.com/images/1712385792488.png)

这个默认页面是如何加载的呢？我们需要找到我们之前解压缩 nginx 文件路径，该文件夹下有一个 `conf` 文件夹，该文件夹下有一个 `nginx.conf` 文件。内容如下：

```bash
# 指定 Nginx 启动时的工作进程数量
worker_processes  1;

events {
    # 定义 Nginx 事件模块的配置，其中 worker_connections 指定每个工作进程的最大连接数为 1024
    worker_connections  1024;
}

http {
    # 引入了 mime.types 文件，该文件定义了文件扩展名与 MIME 类型之间的映射关系
    include       mime.types;

    # 指定默认的 MIME 类型为 application/octet-stream，即未知类型的文件默认以二进制流的方式传输
    default_type  application/octet-stream;

    # 启用了 sendfile 功能，用于在磁盘文件和网络 socket 之间直接传输数据，提高文件传输效率。
    sendfile        on;

    # 指定客户端与服务器之间的 keep-alive 连接超时时间为 65 秒
    keepalive_timeout  65;

    # 定义了一个 HTTP 服务器块，监听在 80 端口，服务器名为 localhost
    server {
        listen       80;
        server_name  localhost;

        # 配置了根路径 / 的访问规则，指定了根目录为 html，并且指定了默认的索引文件为 index.html 或 index.htm
        location / {
            root   html;
            index  index.html index.htm;
        }

        # 配置了当发生 500、502、503、504 错误时，跳转到 /50x.html 页面
        error_page   500 502 503 504  /50x.html;

        # 配置了 /50x.html 页面的访问规则，指定了该页面的根目录为 html
        location = /50x.html {
            root   html;
        }

    }
}
```

从上面文件我们可以知道默认情况下我们访问 localhost 走的是这里，也就是加载当前 html/index. Html 文件，解压后的 linux 文件夹下就有 `html` 文件夹，且其内部包含有 `index.html` 与 `50x.html` 文件

```bash
location / {
    root   html;
    index  index.html index.htm;
}
```

## 暴露静态文件夹

有时候我们需要将一个图片资源文件夹暴露出去让外部可以访问，只需要在 `nginx` 的配置文件 `nginx.conf` 中添加相应配置即可。修改 `nginx.conf` 配置文件保存后需要使用如下命令 `nginx -s reload` 重启一下 `nginx`，例如我 D 盘下有个 images 文件下，可以在 80 server 添加一个 location。配置如下：

```bash
# 通过localhost/assets/访问
location /assets/ {
    alias   D:/images/;
    access_log logs;
    autoindex on;
}
```

或

```bash
# 通过localhost/images/访问
location /images/ {
    root   D:/;
    access_log logs;
    autoindex on;
}
```

这时我们可以通过 localhost/assets/看到所有图片文件，如下：

![1712385835276.png](https://coderchao.oss-cn-shanghai.aliyuncs.com/images/1712385835276.png)

## 反向代理（将请求代理到其他服务器）

在 `nginx.conf` 下新增一个 `server`，配置如下：

```bash
server {
    listen 81;
    server_name localhost;

    location / {
        proxy_pass http://localhost:3000/;
        proxy_set_header HOST $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

当我们访问 localhost: 81 的时候会自动代理到 localhost: 3000 上，这里我 localhost: 3000 启动了一个前端程序。效果如下：可以看到地址栏中的 url 是 81 端口，但是实际走的确实我本地启动的 3000 端口程序服务。

![1712385859368.png](https://coderchao.oss-cn-shanghai.aliyuncs.com/images/1712385859368.png)

> 使用此功能可以将我们前端程序和接口部署到同一个端口上，在同一个 server 下增加一个 location 即可。Location /用来访问网页，location /api 用来访问接口。

## 负载均衡（将请求代理到多台服务器）

负载均衡其实和反向代理一样，只是需要创建一个服务器群，然后将反向代理的地址指向这个服务器群即可。配置如下：

```bash
http {
    upstream backend {
        server localhost:3000;
        server localhost:3001;
    }

    server {
        listen 82;
        server_name localhost;

        location / {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
}
```

这样配置后，我们打开 2 个浏览器窗口，访问 localhost: 82，会发现一个代理到了 localhost: 3000，一个代理到了 localhost:3001
