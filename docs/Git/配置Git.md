---
show: true
cover: git.jpg
tags:
  - git
---

# 配置 Git

## 安装 Git

* 在[官网](https://git-scm.com/downloads)下载适合的 Windows 版软件
* 安装 Git 并选择所有默认选项

安装完毕后就可以在命令行中运行 git

## 初次配置 Git

参考：

* [初次运行 Git 前的配置](https://gitee.com/help/articles/4107)
* [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) | [中译版](https://git-scm.com/book/zh/v2/起步-初次运行-Git-前的配置)

在开始使用 Git 之前需要配置 Git。在命令行工具中运行以下每行，确保所有选项都已被配置好。

```bash
# 设置 Git 用户名
git config --global user.name "<Your-Full-Name>"

# 设置 Git 邮箱
git config --global user.email "<your-email-address>"

# 确保 Git 输出内容带有颜色标记
git config --global color.ui auto

# 对比显示原始状态
git config --global merge.conflictstyle diff3

# 列出所有的配置
git config --list
```

## Git 与代码编辑器

配置 Git 使其能与代码编辑器结合使用。

```bash
# VSCode 设置
git config --global core.editor "code --wait"
```

:bulb: 在安装 Git 时也可以进行该项设置

## 其他

### 配置终端命令提示符
参考：Udacity 的课程 *[Version Control with Git](https://www.udacity.com/course/version-control-with-git--ud123)*
1. 下载所需的[配置文件](http://video.udacity-data.com.s3.amazonaws.com/topher/2017/March/58d31ce3_ud123-udacity-terminal-config/ud123-udacity-terminal-config.zip)

2. 根据 :cinema: 教程（[Windows 版](https://youtu.be/CCYjHfBk9hw)/[Mac、Linux 版）](https://youtu.be/h00n9QLfbqU)进行操作