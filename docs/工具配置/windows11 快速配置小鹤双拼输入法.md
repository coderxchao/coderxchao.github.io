---
title: windows11 快速配置小鹤双拼输入法
createTime: 2024/11/07 11:08:25
permalink: /article/3kvga7k2/
tags: [工具]
---

在 cmd 中输入

```bash
reg add HKCU\Software\Microsoft\InputMethod\Settings\CHS /v UserDefinedDoublePinyinScheme0 /t REG_SZ /d "小鹤双拼*2*^*iuvdjhcwfg^xmlnpbksqszxkrltvyovt" /f
```

需要注意的是输入完上面命令后需要重新进入输入法的设置页面里面，就可以看到双拼输入法下有【小鹤双拼】这一选项了
