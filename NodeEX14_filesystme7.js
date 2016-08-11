
/*이거 시험 문제 나옴*/
var fs = require('fs');

try {
	fs.writeFile('fsfile01.txt','Hello World2!','UTF-8',function(err){
		//console.log(data);
		if(err)
			{ console.log(err);}
		else
			{
			console.log('파일을 확인해주세요');
			}
		
		//return data;
	})
	console.log('It\'s Saved');
}
catch (e) {
	console.log(e);
}

try {
	var text = fs.readFileSync('fsfile01.txt', 'UTF-8')
	console.log(text);
}
catch (e) {
	console.log(e);
}
