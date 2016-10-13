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

##  5. Mocha
install npm 
* "babel": "6.5.2"
* "babel-core": "6.14.0"
* "babel-preset-es2015": "6.14.0"
* "mocha-jsdom": "1.1.0"
* "should": "11.1.0"

> if your mocha is global 
> use
> mocha --compilers js:babel-core/register "your test path"
> or not 
> ../node_modules/bin/mocha --compilers js:babel-core(babel)/register "your test path"

and add '.babelrc'

```javascript 
{
      "presets": ["es2015"]
}

```

##  6. 其他

[相關文章教學：](https://segmentfault.com/a/1190000007126268)
