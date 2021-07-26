import{d as n}from"./app.93fa4a4f.js";const a={},e=n('<h1 id="配置-git" tabindex="-1"><a class="header-anchor" href="#配置-git" aria-hidden="true">#</a> 配置 Git</h1><h2 id="安装-git" tabindex="-1"><a class="header-anchor" href="#安装-git" aria-hidden="true">#</a> 安装 Git</h2><ul><li>在<a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">官网</a>下载适合的 Windows 版软件</li><li>安装 Git 并选择所有默认选项</li></ul><p>安装完毕后就可以在命令行中运行 git</p><h2 id="初次配置-git" tabindex="-1"><a class="header-anchor" href="#初次配置-git" aria-hidden="true">#</a> 初次配置 Git</h2><p>参考：</p><ul><li><a href="https://gitee.com/help/articles/4107" target="_blank" rel="noopener noreferrer">初次运行 Git 前的配置</a></li><li><a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" target="_blank" rel="noopener noreferrer">First-Time Git Setup</a> | <a href="https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%88%9D%E6%AC%A1%E8%BF%90%E8%A1%8C-Git-%E5%89%8D%E7%9A%84%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">中译版</a></li></ul><p>在开始使用 Git 之前需要配置 Git。在命令行工具中运行以下每行，确保所有选项都已被配置好。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 设置 Git 用户名</span>\n<span class="token function">git</span> config --global user.name <span class="token string">&quot;&lt;Your-Full-Name&gt;&quot;</span>\n\n<span class="token comment"># 设置 Git 邮箱</span>\n<span class="token function">git</span> config --global user.email <span class="token string">&quot;&lt;your-email-address&gt;&quot;</span>\n\n<span class="token comment"># 确保 Git 输出内容带有颜色标记</span>\n<span class="token function">git</span> config --global color.ui auto\n\n<span class="token comment"># 对比显示原始状态</span>\n<span class="token function">git</span> config --global merge.conflictstyle <span class="token function">diff3</span>\n\n<span class="token comment"># 列出所有的配置</span>\n<span class="token function">git</span> config --list\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="git-与代码编辑器" tabindex="-1"><a class="header-anchor" href="#git-与代码编辑器" aria-hidden="true">#</a> Git 与代码编辑器</h2><p>配置 Git 使其能与代码编辑器结合使用。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># VSCode 设置</span>\n<span class="token function">git</span> config --global core.editor <span class="token string">&quot;code --wait&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>💡 在安装 Git 时也可以进行该项设置</p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="配置终端命令提示符" tabindex="-1"><a class="header-anchor" href="#配置终端命令提示符" aria-hidden="true">#</a> 配置终端命令提示符</h3><p>参考：Udacity 的课程 <em><a href="https://www.udacity.com/course/version-control-with-git--ud123" target="_blank" rel="noopener noreferrer">Version Control with Git</a></em></p><ol><li><p>下载所需的<a href="http://video.udacity-data.com.s3.amazonaws.com/topher/2017/March/58d31ce3_ud123-udacity-terminal-config/ud123-udacity-terminal-config.zip" target="_blank" rel="noopener noreferrer">配置文件</a></p></li><li><p>根据 🎦 教程（<a href="https://youtu.be/CCYjHfBk9hw" target="_blank" rel="noopener noreferrer">Windows 版</a>/<a href="https://youtu.be/h00n9QLfbqU" target="_blank" rel="noopener noreferrer">Mac、Linux 版）</a>进行操作</p></li></ol>',17);a.render=function(n,a){return e};export default a;
