import{o as l,c as e,F as o,a as n,b as c}from"./app.93fa4a4f.js";const u={},d=n("h1",{id:"docker-compose",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-compose","aria-hidden":"true"},"#"),c(" Docker Compose")],-1),s=n("p",null,"一般需要多个容器构建一个项目，每个容器都提供一项服务，可以有效地避免依赖冲突等问题，Docker Compose 是用于管理多个容器的工具，解决顺序依赖、互访问题。",-1),r=n("p",null,[c("Docker Compose 是一个 YAML 文件 "),n("code",null,"docker-compose.yml"),c("，以空格为缩进的文件格式。")],-1),i=n("p",null,[n("img",{src:"/blog-code/assets/docker-compose.336794bf.png",alt:"docker compose"})],-1),p=n("p",null,"主要有三部分组成：",-1),a=n("ul",null,[n("li",null,[n("code",null,"version"),c(" 指定 docker compose 使用哪一个版本的语法")]),n("li",null,[n("code",null,"Services"),c(" 设置多容器中，各个容器的配置信息。每一个容器称为一种服务 service")]),n("li",null,[n("code",null,"volumes"),c(" 设置数据卷")])],-1),m=n("p",null,[n("img",{src:"/blog-code/assets/docker-compose-2.44fe461d.png",alt:"docker compose 2"})],-1),t=n("p",null,"容器（服务）的常见配置参数：",-1),k=n("ul",null,[n("li",null,[n("code",null,"image"),c(" 或 "),n("code",null,"build"),c(" 指定容器使用的镜像。如果使用 "),n("code",null,"image"),c(" 则会直接从 Registry 拉取镜像；如果使用 "),n("code",null,"build"),c(" 会进入指定的目录中，根据 "),n("code",null,"dockerfile"),c(" 命令创建")]),n("li",null,[n("code",null,"ports"),c(" 设置端口的映射规则")]),n("li",null,[n("code",null,"volumes"),c(" 设置数据卷的映射")]),n("li",null,[n("code",null,"depends_on"),c(" 设置当前服务所依赖的容器，等待依赖服务启动后再执行代码")]),n("li",null,[n("code",null,"environment"),c(" 设置容器的环境变量")])],-1);u.render=function(n,c){return l(),e(o,null,[d,s,r,i,p,a,m,t,k],64)};export default u;