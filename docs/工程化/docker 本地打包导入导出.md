---
title: docker 本地打包导入导出
createTime: 2024/11/07 14:35:04
permalink: /article/bebx4o52/
tags: [工程化, docker]
---

1. 先 `npm run build` 或 `yarn build` 将本地项目打包
2. 确保项目根目录下有 `DockerFile` 文件，内容如下

```dockerfile
FROM nginx:latest // 以nginx镜像为基础镜像
EXPOSE 80 // 端口号为80
COPY dist  /usr/share/nginx/html // 将dist下的文件放入指定位置             
COPY nginx.conf /etc/nginx/nginx.conf // 将nginx的配置文件（项目本地的nginx.conf配置文件）放入容器指定位置
```

1. `docker build -t <imageName> .` ：打包镜像
2. `docker images`： 查看打包好的镜像（能看到镜像 ID）
3. `docker save -o <imageFile.tar> <image ID>` ：将本地镜像导出成 `tar` 压缩包，`<imageFile.tar>` 是你要导出的 Docker 镜像的 `tar` 文件的路径和名称，`<image ID>` 是你要导出的 Docker 镜像的 ID。例如 `docker save -o ./test.tar 6a01c2c70634`，这样就会把指定镜像导出到项目根目录下并生成 `test.tar` 文件
4. `docker load -i <imageFile.tar>`：在其他设备导入之前导出的本地镜像文件
5. 导入镜像后通过 `docker images` 查看导入的镜像, 在 windows 下导出，然后 linux 下导入的 tar 文件，镜像的 REPOSITORY 和 TAG 都是 `<none>`，这时候可以通过 `docker tag <镜像ID> frontend:latest` 将这个导入的镜像的 REPOSITORY 和 TAG 设置为 `frontend` 和 `latest`
6. 然后在 `docker-compose.yaml` 中将要更新的容器的 `image` 的值改为 `frontend`，`docker stop 容器名`，`docker remove 容器名` 删除现有容器，最后执行 `docker-compose up -d 容器名` 即可更新

> 涉及到资安问题需要安装包不大于 20 M 的可通过如下命令进行分包合并处理：
>
> split -b 20M example.tar example.tar.part 分包
> cat example.tar.part\* > example.tar 合并
