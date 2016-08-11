const PI = Math.PI;
exports.area = function (r) {
	return PI * r * r;//공식
}
exports.circumference = function(r) {
	return 2 * r * PI; // 원둘레에 대한 공식
} 

exports.abs = function (Var) {
	if(Var <0)
		{return -Var;}
	else
		{return Var;}
		
}