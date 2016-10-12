/*
  1. 對應的 html
  2. production 不要產生
*/
if (process.env.NODE_ENV !== 'production') {
  require('../../view/index.html')
}


// 引入的 css
require("../../css/lib/reset.scss");
require("../../css/common/global.scss");
require("../../css/common/grid.scss");
require("../../css/page/index.scss");

// 引入的 js
$('.g-bd').append('<p class="text">这是由js生成的一句话。</p>');

const page = 'page';

console.log(`${page}`)
