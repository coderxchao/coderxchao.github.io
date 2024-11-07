import{_ as n,c as a,a as e,o as t}from"./app-3ObzEPbj.js";const l={};function i(o,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h2 id="vscode-配置" tabindex="-1"><a class="header-anchor" href="#vscode-配置"><span>Vscode 配置</span></a></h2><p>项目根目录 . vscode 目录下增加 .launch.json 文件，内容如下：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;configurations&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;name&quot;: &quot;Attach to Chrome&quot;,</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;chrome&quot;,</span></span>
<span class="line"><span>      &quot;request&quot;: &quot;attach&quot;,</span></span>
<span class="line"><span>      &quot;port&quot;: 9222,</span></span>
<span class="line"><span>      &quot;url&quot;: &quot;http://localhost:3000&quot;,</span></span>
<span class="line"><span>      &quot;webRoot&quot;: &quot;\${workspaceFolder}&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;name&quot;: &quot;Launch Chrome&quot;,</span></span>
<span class="line"><span>      &quot;request&quot;: &quot;launch&quot;,</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;chrome&quot;,</span></span>
<span class="line"><span>      &quot;url&quot;: &quot;http://localhost:3000&quot;,</span></span>
<span class="line"><span>      &quot;webRoot&quot;: &quot;\${workspaceFolder}&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chrome-浏览器配置" tabindex="-1"><a class="header-anchor" href="#chrome-浏览器配置"><span>Chrome 浏览器配置</span></a></h2><p>chrome 浏览器桌面图标右键属性&gt;快捷方式&gt;目标后面空格增加--remote-debugging-port=9222，以这种方式启动 chrome 浏览器即可。</p><p><img src="https://files.catbox.moe/h3xlqd.png" alt="h3xlqd.png"></p><blockquote><p>launch 模式：由 vscode 来启动一个独立的具有 debug 模式的程序 attach 模式：附加于（也可以说“监听”）一个已经启动的程序&gt;</p></blockquote>`,7)]))}const p=n(l,[["render",i],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/article/z912f27k/","title":"vscode attach 调试","lang":"zh-CN","frontmatter":{"title":"vscode attach 调试","createTime":"2024/11/07 11:08:25","permalink":"/article/z912f27k/","tags":["vscode"]},"headers":[{"level":2,"title":"Vscode 配置","slug":"vscode-配置","link":"#vscode-配置","children":[]},{"level":2,"title":"Chrome 浏览器配置","slug":"chrome-浏览器配置","link":"#chrome-浏览器配置","children":[]}],"readingTime":{"minutes":0.53,"words":159},"git":{"createdTime":1730966370000,"updatedTime":1730966370000,"contributors":[{"name":"coderchao","email":"coderchao@foxmail.com","commits":1}]},"filePathRelative":"工具配置/vscode attach 调试.md","categoryList":[{"id":"a33812","sort":10001,"name":"工具配置"}],"bulletin":false}');export{p as comp,d as data};
