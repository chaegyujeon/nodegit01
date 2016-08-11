
/*이거 시험 문제 나옴*/
var fs = require('fs');

try {
	var text = fs.readFileSync('fsfile02.txt', 'UTF-8')
	console.log(text);
}
catch (e) {
	console.log("예외 발생 파일 확인하세요.");
}
