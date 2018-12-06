# react-ie8
react react-router react-redux 兼容 ie8  
1  
  require('es5-shim');   
  require('es5-shim/es5-sham');  
  require('console-polyfill');  
  require('fetch-ie8');  
  require('babel-polyfill');  
  这些东西都是网上找来的资料，统统在app.js里整进去就完事了，webpack
  里js的loaders里面再加一个es3ify-loader，plugins里也可以再加一个es3ify
  网上找了资料大体是plugin这个更细致一点,然后babel的plugins里得加个
  add-module-exports。解决ie8里的报错，标志符错误，原因是对象里的属性用了
  js的关键字，比如export.default这种。具体的可以去网上找资料，很多都有详细的  
2  
react版本切到0.14，v15不支持ie8了，react-router要到2.3.0以下
withRouter直接GG了。redux没试高版本的，没有出问题。但是引用了一个react-actions
的插件，因为是已经编译好的，导出被babel用了Object.defineProperty,手动把它们改成module
.exports然后放到了自己的components的文件夹里。如果有其他插件遇到这种情况也可以这么做，感觉
蛮省力的。  
3  
ie8不支持的冒泡啊，addEventListener这些，网上找找资料替代一下，我这里
也抄了了个别的兼容代码  
4  
css不支持的直接另外写一份吧，也没其他好办法了。  
5  
ie6不支持webpack代码热重载，太惨了，每次改完都要重新打包
去ie8看一看  
  
其他感觉也没什么了吗，npm install一下应该直接可以运行起来，Object.defineProperty，emmm，万恶
的源泉，装插件写代码什么的注意一下吧。其实兼容ie8也并不是很难，耐心真的很重要，不然心态
一下子就崩了

