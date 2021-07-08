---
show: true
cover: multiple-keys.jpg
summary: 在本地有很多项目与不同的 Gihub 账号的远程仓库连接，需要找到一个方便管理多个 Github 账号的方法。方便起见使用 SSH 来管理多个 Github 账号。

---

# 管理多个 Github 账号

在本地有很多项目与不同的 Gihub 账号的远程仓库连接，需要找到一个方便管理多个 Github 账号的方法。Github 提供两种命令行方式 Clone Code：

* HTTPS：使用 url 直接克隆到本地，但每次 fetch 和 push 代码都需要输入账号和密码
* SSH：使用前需要在 Github 和本地配置好 SSH key，（如果生成 SSH key 时没有输入密码 passphrase）则克隆或者  fetch 和 push 代码时都不需要输入账号和密码

方便起见使用 SSH 来管理多个 Github 账号。



##  参考

* [一台电脑设置多个github账号](https://summertreee.github.io/blog/2017/10/16/yi-tai-dian-nao-she-zhi-duo-ge-githubzhang-hao/)
* [ssh密钥配置多个github账号](https://blog.csdn.net/littleRpl/article/details/109801707)
* Github 官方文档 [使用 SSH 连接到 GitHub](https://docs.github.com/cn/github/authenticating-to-github/connecting-to-github-with-ssh) 一节



## （本地）多个 Git 用户设置

Git 用户信息 `user.name` 和 `user.email` 可以方便地识别和追踪项目的各部分的代码是哪一个开发者编写的，Git 支持设置全局的用户信息：

```bash
# 设置全局用户信息
$ git config --global user.name "your name"
$ git config --global user.email "your email"

# 查看全局的用户信息
$ git config --global user.name
$ git config --global user.email

# 重置（取消）全局用户信息
$ git config --global --unset user.name
$ git config --global --unset user.email


```

如果在不同的项目里使用不同的用户信息，可以设置本地用户信息，即以上语句不使用 `--global` 参数

```bash
# 在特定的项目路径下进行设置
$ git config user.name "your name"
$ git config user.email "your email"

# 查看当前项目的用户信息
$ git config user.name
$ git config user.email
```



## 配置 SSH

为方便起见使用 SSH 将本地项目与远程的 Github 仓库连接，并进行配置方便管理多个使用不同 Github 账号的项目。

一个 SSH 的 public key 只能添加到一个 Github 账号上，因此如果需要在本机通过 SSH 连接多个 Github 账号，需要生成多个 SSH key，

* 生成的 SSH keys 在 Windows 系统盘的 `C:\Users\yourUsername\.ssh` 目录下，其中添加到 Github 的公钥是以 `.pub` 为后缀的文件

* 在 Git Bash 输入以下命令可以查看已存在 SSH

    ```bash
    $ ls -al ~/.ssh
	```
	
* 在 Git Bash 输入以下命令生成新的 SSH 密钥，其中命令中 `your_email@example.com` 替换为所需的邮件和 `keyName` 替换为所需的文件名

    ```bash
    $ ssh-keygen -t ed25519 -C "your_email@example.com" -f -ssh/id_rsa_keyName
    ```

    * 这将创建以所提供的电子邮件地址为标签的新 SSH 密钥
    * 生成名为 `id_rsa_keyName` 私钥，和名为 `id_rsa_keyName.pub` 公钥两个文件
    * 生成密钥过程中会提示让你输入安全密码： `Enter passphrase(empty for no passphrase)` 如果为空，则以后使用密钥的时候就不会重复要求输入安全密码

* 将 SSH 密钥添加到 ssh-agent

    * 确保 ssh-agent 正在运行 `eval "$(ssh-agent -s)"`
    * 将上一步创建的 SSH 私钥添加到 ssh-agent `$ ssh-add ~/.ssh/id_ed25519`

* [将公钥添加到需要连接的 Github 账户上](https://docs.github.com/cn/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

* 配置 ssh

    * 如果在 Windows 系统盘的 `C:\Users\yourUsername\.ssh` 目录下没有配置文件 `config` 可以手动创建

    * 在 ``~/.ssh/config` 文件中按照以下模板为「多个 Github 账户」设置不同的 SSH key ，以下例子配置了两个 ssh key

        ```
        #github default 默认使用
        Host github.com #这里名称可以随意取，和下面的不一样就行，这是识别的关键
            HostName github.com
            User git
            IdentityFile ~/.ssh/id_rsa #使用的相应私钥
            IdentitiesOnly yes
        
        #github collection
        Host collection.github.com #这里名称可以随意取
            HostName github.com
            User git
            IdentityFile ~/.ssh/id_rsa_collection
            IdentitiesOnly yes
        ```

###  克隆远程仓库

将远程仓库使用 SSH 克隆到本地，根据以上的 SSH 配置，需要使用不同的方式：

* 如果是使用默认的 SSH key 可以直接使用 Gihub 提供的 SSH url 来克隆，即使用 Host `github.com`，克隆命令遵循格式为 `git clone git@github.com:账户名/仓库.git`。

* 如果希望使用 collection 对应的 SSH key，则克隆仓库时需要使用设定的 Host `collection.github.com`，即克隆命令遵循格式为 `git clone git@collection.github.com:账户名/仓库.git`

### 连接远程仓库

如果是将本地已存在的项目与远程仓库连接，根据以上的 SSH 配置，类似地需要使用不同的方式：

* 如果是使用默认的 SSH key，则直接将 Github 提供的 SSH url 作为远端仓库的地址，即为本地项目绑定远程仓库的命令遵循格式为 `git remote add origin git@github.com:账户名/仓库.git`
* 如果希望使用 collection 对应的 SSH key，则绑定远程仓库的命令遵循格式为 `git remote add origin git@collection.github.com:账户名/仓库.git`



:bulb: 查看本地项目已连接的远程仓库 `git remote -v`

:bulb: 如果本地项目已经与远程仓库绑定了，需要先「解绑」`git remote remove origin` （其中 `origin` 是远程仓库的名称，默认值一般为 `origin`，可以查看已绑定的远程仓库信息确认一下），才可以重新连接新的远程仓库

:bulb: 重新绑定远程仓库后，第一次推动代码需要设定上游分支 `git push -u origin master` 该命令表示推送代码时将远程仓库 origin 的分支 `master` 作为上游分支
