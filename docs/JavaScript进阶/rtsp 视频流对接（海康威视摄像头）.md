---
title: rtsp 视频流对接（海康威视摄像头）
createTime: 2024/11/07 14:43:39
permalink: /article/gw6xl4eo/
tags: [开发问题]
---

> 1.  https://github.com/mpromonet/webrtc-streamer
> 2.  视频流编码需要改成 H.264，H.265 浏览器不支持（mp 4 视频文件预览也一样）
> 3.  通过 docker 启动 localhost: 8000 端口

## 通过 docker 指令

```bash
docker run -p 8000:8000 -it mpromonet/webrtc-streamer -n raspicam -u rtsp://admin:aa123456@172.16.2.251:554/Streaming/Channels/101
```

## 通过 docker-compose

```yaml
webrtc-streamer:
  image: mpromonet/webrtc-streamer
  command: -n raspicam -u rtsp://admin:aa123456@172.16.2.251:554/Streaming/Channels/101
  ports: "8000:8000"
  restart: always
```
