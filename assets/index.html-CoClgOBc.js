import{_ as a,c as n,a as t,o as i}from"./app-3ObzEPbj.js";const o={};function r(c,e){return i(),n("div",null,e[0]||(e[0]=[t('<h2 id="解析-parsing" tabindex="-1"><a class="header-anchor" href="#解析-parsing"><span>解析 （Parsing）</span></a></h2><p>首先，V 8 引擎会将 JavaScript 代码经过解析（Parsing）模块转化为抽象语法树（AST）。这个过程主要负责检查语法，并建立代码结构</p><h2 id="编译-ignition" tabindex="-1"><a class="header-anchor" href="#编译-ignition"><span>编译（Ignition）</span></a></h2><h3 id="字节码生成-bytecode-generation" tabindex="-1"><a class="header-anchor" href="#字节码生成-bytecode-generation"><span>字节码生成（Bytecode Generation）</span></a></h3><p>接下来，V 8 会利用 Ignition 解释器将抽象语法树（AST）编译成字节码（Bytecode）。字节码是一种中间表示格式，可以被 V 8 引擎更高效地执行。</p><h3 id="字节码执行-execution-of-bytecode" tabindex="-1"><a class="header-anchor" href="#字节码执行-execution-of-bytecode"><span>字节码执行 （Execution of Bytecode）</span></a></h3><p><mark>V 8 引擎执行字节码并将其交给 CPU 执行</mark>。Ignition 解释器会逐条执行字节码，获取执行结果。</p><h2 id="优化-turbofan" tabindex="-1"><a class="header-anchor" href="#优化-turbofan"><span>优化 （TurboFan）：</span></a></h2><p>在执行过程中，V 8 会监视字节码的执行情况，并标记频繁执行的代码段，即热点代码（Hot Code）。这样的代码会被送往 TurboFan 优化编译器。</p><p>TurboFan 会对这些热点代码进行额外的优化，直接将其编译为高效的机器码。这样可以显著提高性能，尤其是在需要频繁调用的函数或方法情况下。</p><p><mark>TurboFan 生成的机器码会被交给 CPU 执行，性能相比原字节码执行有明显提升。</mark></p><p>垃圾回收（Garbage Collection）：</p><p>运行过程中，V 8 还会进行垃圾回收，以管理内存，确保清理不再使用的对象，防止内存泄漏。</p>',13)]))}const s=a(o,[["render",r],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/article/2k5ticml/","title":"v8 引擎执行原理","lang":"zh-CN","frontmatter":{"title":"v8 引擎执行原理","createTime":"2024/11/07 14:39:25","permalink":"/article/2k5ticml/","tags":["js高级"]},"headers":[{"level":2,"title":"解析 （Parsing）","slug":"解析-parsing","link":"#解析-parsing","children":[]},{"level":2,"title":"编译（Ignition）","slug":"编译-ignition","link":"#编译-ignition","children":[{"level":3,"title":"字节码生成（Bytecode Generation）","slug":"字节码生成-bytecode-generation","link":"#字节码生成-bytecode-generation","children":[]},{"level":3,"title":"字节码执行 （Execution of Bytecode）","slug":"字节码执行-execution-of-bytecode","link":"#字节码执行-execution-of-bytecode","children":[]}]},{"level":2,"title":"优化 （TurboFan）：","slug":"优化-turbofan","link":"#优化-turbofan","children":[]}],"readingTime":{"minutes":1.19,"words":357},"git":{"createdTime":1730966370000,"updatedTime":1730966370000,"contributors":[{"name":"coderchao","email":"coderchao@foxmail.com","commits":1}]},"filePathRelative":"JavaScript进阶/v8 引擎执行原理.md","categoryList":[{"id":"6c19ce","sort":10000,"name":"JavaScript进阶"}],"bulletin":false}');export{s as comp,d as data};