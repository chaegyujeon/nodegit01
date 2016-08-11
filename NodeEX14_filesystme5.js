
/*이거 시험 문제 나옴*/
var fs = require('fs');

try {
	var text = fs.readFileSync('fsfile01.txt', 'UTF-8')
	console.log(text);
}
catch (e) {
	console.log("예외 발생 파일 확인하세요.");
}

try {
	fs.writeFileSync('fsfile01.txt', 'UTF-8')
	console.log('FILE WRITE COMPLETE');
}
catch (e) {
	console.log(e);
}
