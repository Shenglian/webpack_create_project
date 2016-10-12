## 1. extract-text-webpack-plugin
	

##  2. html-webpack-plugin

* [解決 Webpack build 時，會含有 html code](https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/html-reload)

```javascript
if (process.env.NODE_ENV !== 'production') {
  require('./index.html')
}
```
##  3. HotModuleReplacementPlugin
* 將 html css, 放入 js 做 hotreload

```javascript
devServer: {
	contentBase: './',
	inline: true,
	historyApiFallback: true,
	progress: true,
	hot: true,
	port: 9090
}
```
##  4. ES6 

## 5. 其他

[相關文章教學：](https://segmentfault.com/a/1190000007126268)