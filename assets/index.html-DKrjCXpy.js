import{_ as a,c as t,a as n,o as i}from"./app-3ObzEPbj.js";const l={};function r(c,e){return i(),t("div",null,e[0]||(e[0]=[n('<h2 id="执行局部安装的工具" tabindex="-1"><a class="header-anchor" href="#执行局部安装的工具"><span>执行局部安装的工具</span></a></h2><p>当我们在项目中局部安装了一些工具并且想在命令行中进行操作的时候，如果直接通过那些工具的命令去执行默认会在全局环境去查找是否有该命令，因为是局部安装的，实际上全局并没有该命令，所以默认会报错。而通过 <code>npx</code> 再加上命令后则会让该命令先从当前文件夹下的 <code>node_modules/.bin</code> 文件夹下去查找，这时候才能正常执行局部安装的工具中的命令。</p><h2 id="自动安装执行" tabindex="-1"><a class="header-anchor" href="#自动安装执行"><span>自动安装执行</span></a></h2><p>当尝试运行一个尚未安装的命令行工具时，npx 会自动为你临时安装所需的工具，并立即执行（临时安装的在使用完毕后会被删除，例如 npx create-react-app demo，这样会临时安装 create-react-app）。</p><h2 id="支持指定版本执" tabindex="-1"><a class="header-anchor" href="#支持指定版本执"><span>支持指定版本执</span></a></h2><p>可以通过 npx 运行特定版本的工具或库，而无需在全局或项目中安装多个版本。</p>',6)]))}const o=a(l,[["render",r],["__file","index.html.vue"]]),s=JSON.parse('{"path":"/article/7313jlgn/","title":"npx 有什么作用","lang":"zh-CN","frontmatter":{"title":"npx 有什么作用","createTime":"2024/11/07 14:35:04","permalink":"/article/7313jlgn/","tags":["工程化","npx"]},"headers":[{"level":2,"title":"执行局部安装的工具","slug":"执行局部安装的工具","link":"#执行局部安装的工具","children":[]},{"level":2,"title":"自动安装执行","slug":"自动安装执行","link":"#自动安装执行","children":[]},{"level":2,"title":"支持指定版本执","slug":"支持指定版本执","link":"#支持指定版本执","children":[]}],"readingTime":{"minutes":0.95,"words":286},"git":{"createdTime":1730966370000,"updatedTime":1730966370000,"contributors":[{"name":"coderchao","email":"coderchao@foxmail.com","commits":1}]},"filePathRelative":"工程化/npx 有什么作用.md","categoryList":[{"id":"d994a6","sort":10004,"name":"工程化"}],"bulletin":false}');export{o as comp,s as data};