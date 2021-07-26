# Dockerfile

 使用命令 `docker build` 读取 `dockerfile` 文件，逐行执行相应的命令，最后可以创建出一个新镜像。



## 添加文件

将宿主机或外部资源添加到容器的指定目录中

* `ADD` 命令支持 URL，支持解析压缩文件，将其中的资源抽取出来
* `COPY` 命令更透明，优先使用



## 添加信息

为容器添加信息

* `ENV` 命令添加环境变量
* `LABEL` 命令添加元数据
* `ARG` 命令设置构建时 `docker build` 的参数



## 执行命令

`RUN` 命令可以执行一些命令代码，例如为容器安装一些依赖.

可以在 `RUN` 命令前添加 `SHELL` 命令，以指定通过哪一个终端执行命令。

```dockerfile
# Executed as powershell
SHELL ["powershell", "-command"]
RUN Write-Host hello
```

:bulb: 待执行的命令有两种形式：

* shell 形式的命令 `<instruction> <param1> <param2> <...> <executable> `
* exec 形式（推荐）的命令 `<instruction> ["executable", "param1", "param2", ...]`

例如安装 Python 的两种形式

```dockerfile
RUN apt-get install python3
```

```dockerfile
RUN ["apt-get", "install", "python3"]
```

`CMD` 命令和 `ENTRYPOINT` 命令也是用以执行一些命令代码

* `CMD` 命令用以解析 `docker run <ImageName>` 通过镜像创建容器的这一条命令代码
* `ENTRYPOINT` 命令也有类似的作用

两者还可以结合使用，`CMD` 命令可以为 `ENTRYPOINT` 命令传递参数

```dockerfile
FROM sameersbn/ubuntu:14.04.20161014
# ...
ENTRYPOINT ["/sbin/entrypoint.sh"]
CMD ["user/sbin/nginx"]
```



## 其他命令

* `FROM` 命令在 Dockerfile 中的第一行，指定从哪一个基础镜像开始进行构建
* `EXPOSE` 命令设置容器暴露的端口，只有容器暴露的端口才可以用于端口映射
* `VOLUME` 命令指定数据卷
* `WORKDIR` 命令如果在 `CMD` 命令前运行，就会先进入指定的工作区，再执行后面的代码。工作目录的路径需要以 `/` 开头，即使用绝对路径
* `USER` 命令指定用户
* `ONBUILD` 命令是在当前镜像被引用，即其他镜像使用 `FROM` 命令，将其作为基础镜像使用时，会触发执行的命令
* `STOPSIGNAL` 命令设置停止容器会发出的信号



