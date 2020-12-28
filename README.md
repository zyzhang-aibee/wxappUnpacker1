
# 说明

- 本项目完全基于 大神qwerty472123和lcroot 项目[wxappUnpacker](https://github.com/qwerty472123/wxappUnpacker "wxappUnpacker") 改进的。
- 修复了项目中若干个bug，包含$gwx is not defined 和__vd_version_info__ is not defined，但不限于此。
- 尽管已经努力修复程序中的bug，但仍然有一些结构性的bug无法修复，除非重新设计反编译的架构。
- 支持分包
- 对插件的支持仍然不够友好
- 本项目推荐的运行环境是git bash，支持window和mac


# 分包功能

当检测到 wxapkg 为子包时, 添加-s 参数指定主包源码路径即可自动将子包的 wxss,wxml,js 解析到主包的对应位置下. 完整流程大致如下: 
1. 获取主包和若干子包
2. 解包主包 `./bingo.sh testpkg/master-xxx.wxapkg`
3. 解包子包 `./bingo.sh testpkg/sub-1-xxx.wxapkg -s=../master-xxx`

TIP
> -s 参数可为相对路径或绝对路径, 推荐使用绝对路径, 因为相对路径的起点不是当前目录 而是子包解包后的目录

```
├── testpkg
│   ├── sub-1-xxx.wxapkg #被解析子包
│   └── sub-1-xxx               #相对路径的起点
│       ├── app-service.js
│   ├── master-xxx.wxapkg
│   └── master-xxx             # ../master-xxx 就是这个目录
│       ├── app.json
```


安装依赖

```
npm install esprima -g
npm install css-tree -g
npm install cssbeautify -g
npm install vm2 -g
npm install uglify-es -g
npm install js-beautify -g
npm install escodegen -g
```
解决小程序反编译问题 `Cannot find module 'uglify-es'`

https://zhuanlan.zhihu.com/p/136886986

```
npm install uglify-es --save
npm install esprima --save
npm install css-tree --save
npm install cssbeautify --save
npm install vm2 --save
npm install uglify-es --save
npm install js-beautify --save
npm install escodegen --save
npm install cheerio --save
```





