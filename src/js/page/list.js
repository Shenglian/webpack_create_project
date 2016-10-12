//引入css
require("../../css/lib/reset.scss");
require("../../css/common/global.scss");
require("../../css/common/grid.scss");
require("../../css/page/list.scss");


var html = '';
for(var i=0;i<5;i++){
	html += '<li>列表'+(i+1)+'</li>';
}

$('#list').html(html);

