

var fs = require('fs');

var text = fs.readFile('fsfile01.txt', 'UTF-8',function(err,data){
	console.log(data);
	text = data;
	//return data;
})

console.log(text);

setTimeout(function() {
	console.log(text);
}, 3000)