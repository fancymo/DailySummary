收集整理的移动端调试方式。

### window.onerror

### Chrome inspect

条件：Chrome 版本必须高于 32，其次你的测试机 Android 系统高于 4.4

1. 先用数据线将 Android 测试机连接到电脑上。需要打开测试机上面“开发者选项”中的 “USB 调试”功能。
2. 在PC的Chrome上打开 Chrome://inspect 即可找到你的设备
3. 手机进入一个webview页面，即可在Chrome上看到调试台了

要启用 WebView 调试，请在 WebView 类上调用静态方法 setWebContentsDebuggingEnabled。

```
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
    WebView.setWebContentsDebuggingEnabled(true);
}
```
### weinre

### Genymotion 模拟器

### Charles / Fiddler

### eruda

引入脚本：

```
<script src="//cdn.bootcss.com/eruda/1.2.4/eruda.min.js"></script>
<script>
  eruda.init();
</script>    
```


查看控制台 error 很方便，遇到两个问题，修复体验更佳。

1. 查找错误时定位行号
2. 跳转界面卡顿，属否考虑将耗时操作放入 webworker 处理

* [远程调试 Webview](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/webviews?hl=zh-cn)
* [远程调试 Android 入门](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3#configure-webview)
* [打造最舒适的 Webview调试环境](https://github.com/riskers/blog/issues/11)
