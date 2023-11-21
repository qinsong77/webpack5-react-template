# [MSW](https://mswjs.io/docs/)

即Mock Service Worker，支持浏览器和node服务端的mock api。

## Browser集成

In the browser, MSW works by registering a Service Worker responsible for request interception on the network level.

步骤：
1. 使用命令`pnpx msw init ./public --save`，会生成`mockServiceWork.js`，还必须指定公共静态资源的文件目录，比如`./public`。
2. `--save` 会把上面的路径放到package.json，这样每次安装msw就会更新``mockServiceWork.js``文件了。
```json
{
  "name": "my-app",
  "msw": {
    "workerDirectory": "./public"
  }
}

```
3. 入口文件启用，如[官网](https://mswjs.io/docs/integrations/browser)


其实主要用来测试比较方便合理。
- [Stop mocking fetch](https://kentcdodds.com/blog/stop-mocking-fetch)


## todo 

1. [x] 跑测试axios目前还报错 Network Error, 等msw修复。。
2. [ ] jest 中hack的比较多代码，need remove
