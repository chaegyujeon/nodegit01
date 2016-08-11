

var fs = require('fs');

var text = fs.readFile('fsfile01.txt', 'UTF-8',function(err,data){
	//console.log(data);
	if(data)
		{text = data;}
	else
		{text = '파일 이름 확인 하세요';}
	
	//return data;
})

//console.log(text);

setTimeout(function() {
	console.log(text);
}, 3000)
