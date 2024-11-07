import{_ as n,c as a,a as l,o as i}from"./app-3ObzEPbj.js";const e={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[l(`<h2 id="nginx-conf-文件修改" tabindex="-1"><a class="header-anchor" href="#nginx-conf-文件修改"><span>Nginx. Conf 文件修改</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span># 这个指令告诉浏览器，来自任何源的请求都可以访问该资源。</span></span>
<span class="line"><span>add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;;</span></span>
<span class="line"><span>#  这个指令告诉浏览器，该资源支持哪些HTTP请求方法</span></span>
<span class="line"><span>add_header &#39;Access-Control-Allow-Methods&#39; &#39;GET, POST, OPTIONS, PUT, DELETE&#39;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://coderchao.oss-cn-shanghai.aliyuncs.com/images/1727667653390.png" alt="1727667653390.png"></p><h2 id="增加静态-load-页面" tabindex="-1"><a class="header-anchor" href="#增加静态-load-页面"><span>增加静态 load 页面</span></a></h2><p>初始页面，逻辑是 1 秒轮询请求前端地址，判断是否成功，成功则跳转到前端程序，否则一直加载，防止出现白屏问题。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta</span></span>
<span class="line"><span>      name=&quot;viewport&quot;</span></span>
<span class="line"><span>      content=&quot;width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;title&gt;SAGE&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>      * {</span></span>
<span class="line"><span>        /* 初始化 */</span></span>
<span class="line"><span>        margin: 0;</span></span>
<span class="line"><span>        padding: 0;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      body {</span></span>
<span class="line"><span>        /* 100%窗口高度 */</span></span>
<span class="line"><span>        height: 100vh;</span></span>
<span class="line"><span>        /* 弹性布局 水平垂直居中 */</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        justify-content: center;</span></span>
<span class="line"><span>        align-items: center;</span></span>
<span class="line"><span>        background-color: #000;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .wavy {</span></span>
<span class="line"><span>        /* 相对定位 */</span></span>
<span class="line"><span>        position: relative;</span></span>
<span class="line"><span>        /* 倒影效果 */</span></span>
<span class="line"><span>        -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .wavy span {</span></span>
<span class="line"><span>        position: relative;</span></span>
<span class="line"><span>        display: inline-block;</span></span>
<span class="line"><span>        color: #fff;</span></span>
<span class="line"><span>        font-size: 50px;</span></span>
<span class="line"><span>        text-transform: uppercase;</span></span>
<span class="line"><span>        letter-spacing: 8px;</span></span>
<span class="line"><span>        /* 执行动画：动画名 时长 加速后减速 无限次播放 */</span></span>
<span class="line"><span>        animation: wavyAnimate 1s ease-in-out infinite;</span></span>
<span class="line"><span>        /* 通过var函数调用自定义属性--i，在计算出动画延迟时间 */</span></span>
<span class="line"><span>        animation-delay: calc(0.1s * var(--i));</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      /* 定义动画 */</span></span>
<span class="line"><span>      @keyframes wavyAnimate {</span></span>
<span class="line"><span>        0% {</span></span>
<span class="line"><span>          transform: translateY(0);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        20% {</span></span>
<span class="line"><span>          transform: translateY(-20px);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        40%,</span></span>
<span class="line"><span>        100% {</span></span>
<span class="line"><span>          transform: translateY(0);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>      function checkUrl(url) {</span></span>
<span class="line"><span>        fetch(url)</span></span>
<span class="line"><span>          .then((response) =&gt; {</span></span>
<span class="line"><span>            if (response.ok) {</span></span>
<span class="line"><span>              console.log(&quot;URL 调用成功:&quot;, url);</span></span>
<span class="line"><span>              const [page] = url.split(&quot;index.html&quot;);</span></span>
<span class="line"><span>              location.href = page;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>              console.log(&quot;URL 调用失败，状态码:&quot;, response.status);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>          .catch((error) =&gt; {</span></span>
<span class="line"><span>            console.error(&quot;请求出错:&quot;, error);</span></span>
<span class="line"><span>          });</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      setInterval(() =&gt; {</span></span>
<span class="line"><span>        checkUrl(&quot;http://172.16.3.68:70/index.html?t=&quot; + new Date().getTime());</span></span>
<span class="line"><span>      }, 1000);</span></span>
<span class="line"><span>      // 使用示例</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;wavy&quot;&gt;</span></span>
<span class="line"><span>      &lt;!-- --i是自定义属性，可通过var函数调用 --&gt;</span></span>
<span class="line"><span>      &lt;span style=&quot;--i:1;&quot;&gt;S&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;span style=&quot;--i:2;&quot;&gt;A&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;span style=&quot;--i:3;&quot;&gt;G&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;span style=&quot;--i:4;&quot;&gt;E&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;span style=&quot;--i:5;&quot;&gt;初&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;span style=&quot;--i:6;&quot;&gt;始&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;span style=&quot;--i:7;&quot;&gt;化&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;span style=&quot;--i:8;&quot;&gt;中&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;span style=&quot;--i:9;&quot;&gt;.&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;span style=&quot;--i:10;&quot;&gt;.&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;span style=&quot;--i:11;&quot;&gt;.&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动脚本修改" tabindex="-1"><a class="header-anchor" href="#启动脚本修改"><span>启动脚本修改</span></a></h2><ol><li>将 html 文件复制到/home/sage/deploy 下面</li><li>修改 autoload.sh 文件下的前端自启脚本</li><li>将以前启动 localhost 改为自动打开默认文件 html 的形式</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Gnome-terminal</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -x</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bash</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">google-chrome --kiosk /home/sage/deploy/frontend_load. Html; exec bash;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,9)]))}const d=n(e,[["render",p],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/article/8fc1g7fr/","title":"docker 部署的前端开机启动白屏问题解决","lang":"zh-CN","frontmatter":{"title":"docker 部署的前端开机启动白屏问题解决","createTime":"2024/11/07 14:47:43","permalink":"/article/8fc1g7fr/","tags":["开发问题","docker"]},"headers":[{"level":2,"title":"Nginx. Conf 文件修改","slug":"nginx-conf-文件修改","link":"#nginx-conf-文件修改","children":[]},{"level":2,"title":"增加静态 load 页面","slug":"增加静态-load-页面","link":"#增加静态-load-页面","children":[]},{"level":2,"title":"启动脚本修改","slug":"启动脚本修改","link":"#启动脚本修改","children":[]}],"readingTime":{"minutes":1.92,"words":575},"git":{"createdTime":1730966370000,"updatedTime":1730966370000,"contributors":[{"name":"coderchao","email":"coderchao@foxmail.com","commits":1}]},"filePathRelative":"JavaScript进阶/docker 部署的前端开机启动白屏问题解决.md","categoryList":[{"id":"6c19ce","sort":10000,"name":"JavaScript进阶"}],"bulletin":false}');export{d as comp,r as data};
