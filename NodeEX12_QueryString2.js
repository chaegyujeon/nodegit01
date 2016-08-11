
var url = require('url');
var querystring = require('querystring')
var addr = 'http://news.naver.com/main/main.nhn?sid1=105&mid=shm&viewType=pc&mode=LSD&nh=20160810162355'
var paserUrl = url.parse(addr);
console.log( querystring.stringify({sid1: '105',
		 mid: 'shm',
		 viewType: 'pc',
		 mode: 'LSD',
		 nh: '20160810162355'}));
